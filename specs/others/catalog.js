import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { orderPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net/catalog-service/api/v2/products/ocd-by-l'

const purchasedFailedFilePath = './logsCSV/order/orderFailed.csv';
file.writeString(purchasedFailedFilePath,'New Run\n')
const purchasedSuccessFilePath = './logsCSV/order/orderSuccess.csv';
file.writeString(purchasedFailedFilePath,'New Run\n')

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1000,
	// vus: 10,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "1s", target: 400 },
      ],
};


export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        let i = Math.floor(Math.random() * 1000) + 1
        // let i = 1
        let userToken = userTokenData[i][3];
        let auth_id = userTokenData[i][2];
        let orderJSON = JSON.stringify({
            "products": [
                {
                    "prod_id": 10091,
                    "sku_id": 249822
                }
            ]
        });
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp',
        'Authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let orderRes = http.post(`${baseUrl}`, orderJSON, {
        headers: headers
    });

    check(orderRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(orderRes.status !== 200){
        // file.appendString(purchasedFailedFilePath,`Failed Login API Response,${orderRes.status},${auth_id},${orderJSON},${orderRes.body}\n`)
        console.log("Login Failed API Response: " + orderRes.body);
        //console.log(`VU: ${__VU} -  ITER: ${__ITER}`)
    }
    else if(orderRes.status === 200){
        // file.appendString(purchasedSuccessFilePath, `Successful Login API Response,${orderRes.status},${auth_id},${orderRes.timings.duration},OrderID:${orderRes.json().data.order_info.id},${orderRes.json().data.order_info.invoice_id}\n`)
        
        console.log("Login Success API Response: " + orderRes.body);
    }

    // sleep(1)
    // i++;

    // }	

}


