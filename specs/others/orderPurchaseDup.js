import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { orderPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

let lengthMinus = 1;

const baseUrl = 'http://172.16.10.127:3000';
// const baseUrl = "http://172.16.10.79:3000"

const purchasedFailedFilePath = './logsCSV/orderPurchase/purchasedFailed.csv';
// file.writeString(purchasedFailedFilePath,'New Run\n')
const purchasedSuccessFilePath = './logsCSV/orderPurchase/purchasedSuccess.csv';
// file.writeString(purchasedSuccessFilePath,'New Run\n')

const orderFailedFilePath = './logsCSV/orderPurchase/purchaseOrderFailed.csv';
// file.writeString(orderFailedFilePath,'New Run\n')
const orderSuccessFilePath = './logsCSV/orderPurchase/purchaseOrderSuccess.csv';
// file.writeString(orderSuccessFilePath,'New Run\n')

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	iterations: 10,
	vus: 1,
    // duration: '20s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "30s", target: 700 },
    //   ],
};

export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        let i = Math.floor(Math.random() * 1000) + 1
        let auth_id = userTokenData[i][2];
        let userToken = userTokenData[i][3];
        let orderData = orderPayload();        
        let orderJSON = JSON.stringify(orderData);
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp',
        'Authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let orderRes = http.post(`${baseUrl}/api/v1/orders`, orderJSON, {
        headers: headers
    });

    if(orderRes.json().status_code !== 201){
        file.appendString(orderFailedFilePath,`Failed Login API Response,${orderRes.status},${auth_id},${orderRes.timings.duration},${orderJSON},${orderRes.body}\n`)
        console.log("Login Failed API Response: " + orderRes.body);
    }
    else if(orderRes.json().status_code === 201){
        file.appendString(orderSuccessFilePath, `Successful Login API Response,${orderRes.status},${auth_id},${orderRes.timings.duration},${orderRes.json().status_code},${orderRes.json().data.order_info.id},${orderRes.json().data.order_info.invoice_id}\n`)
        console.log("Login Success API Response: " + orderRes.body);

        //-----------------------Order IPN API-----------------------//
        let headersIPN = {
            'Content-Type': 'application/json',
            'user-agent': 'ishakhttp',
            'X-TENMS-SERVICE-KEY' : 'base64:ZFF0d6f47cfw5ICllJVL8p+D2IoZw+8tQaCq6RSQsVo=',
            'authority': 'stage-api.10minuteschool.net'
        }
        let orderipnJSON = JSON.stringify({
            "bogos": [],
            "status": "COMPLETED",
            "transaction_id": {
                "ref_id": orderRes.json().data.order_info.invoice_id
            },
            "paid_amount": "10000",
            "source": "ssl",
            "transaction_date": "2023-03-28T12:12:01.000000Z"
        })
        //-----------------------Order IPN API REQUEST-----------------------//
        let orderIPNRes = http.post(`${baseUrl}/api/v1/orders/ipn`, orderipnJSON, {
            headers: headersIPN
        });

        if(orderIPNRes.status !== 201){
            file.appendString(purchasedFailedFilePath,`Failed Order IPN API Response,${orderIPNRes.status},${auth_id},${orderIPNRes.timings.duration},${orderipnJSON},${orderIPNRes.body}\n`)
            console.log("Order IPN Failed API Response: " + orderIPNRes.body);
        }
        else if(orderIPNRes.status === 201){
            file.appendString(purchasedSuccessFilePath, `Successful Order IPN API Response,${orderIPNRes.status},${auth_id},${orderIPNRes.timings.duration}\n`)
            console.log("Order IPN Success API Response: " + orderIPNRes.body);
        }
        sleep(1);
    }


    	

}