import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { orderPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';


let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const purchasedFailedFilePath = './logsCSV/order/orderFailed.csv';
// file.writeString(purchasedFailedFilePath,'New Run\n')
const purchasedSuccessFilePath = './logsCSV/order/enrollSuccess.csv';
// file.writeString(purchasedSuccessFilePath,'New Run\n')

const csvData = open('../logsCSV/order/orderSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	iterations: 5,
	vus: 1,
    duration: '120s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "10s", target: 300 },
    //   ],
};



export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        // let i = Math.floor(Math.random() * 1000) + 1
        let i = __ITER;
        // let userToken = userTokenData[i][2];
        let auth_id = userTokenData[i][2];
        let order_id = userTokenData[i][5];
        // let orderData = orderPayload();        
        let orderJSON = JSON.stringify([
            {
                "auth_user_id": auth_id,
                "catalog_product_id": "10091",
                "catalog_sku_id": "249949",
                "end_at": "2024-10-11T10:44:30.998Z",
                "enrolled_at": "2023-09-11T10:44:30.998Z",
                "identification_id": "142",
                "identification_type": "course",
                "invoice_id": order_id,
                "meta": {},
                "platform": "k12",
                "start_at": "2023-09-11T10:44:30.998Z",
                "status": "ongoing",
                "tenms_user_id": "",
                "type": "regular"
            }
        ]);
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'X-TEN-MS-SERVICE-KEY' : 'base64:ZFF0d6f47cfw5ICllJVL8p+D2IoZw+8tQaCq6RSQsVo='
	}
    //-----------------------Order API-----------------------//
    let orderRes = http.post(`${baseUrl}/enrolment-service/api/v1/enrolments`, orderJSON, {
        headers: headers
    });

    check(orderRes, {
		'status is 201': (r) => r.status === 201,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(orderRes.status !== 201){
        file.appendString(purchasedFailedFilePath,`Failed Login API Response,${orderRes.status},${auth_id},${orderJSON},${orderRes.body}\n`)
        console.log("Login Failed API Response: " + orderRes.body);
        //console.log(`VU: ${__VU} -  ITER: ${__ITER}`)
    }
    else if(orderRes.status === 201){
        file.appendString(purchasedSuccessFilePath, `Successful Login API Response, ${auth_id}\n`)
        console.log("Login Success API Response: " + orderRes.body);
    }

    // sleep(1)

    // }	

}


