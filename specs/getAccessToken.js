import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { orderPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const purchasedFailedFilePath = './logsCSV/exam/accessTokenFailed.csv';
// file.writeString(purchasedFailedFilePath,'New Run\n')
const purchasedSuccessFilePath = './logsCSV/exam/accessToken.csv';
// file.writeString(purchasedSuccessFilePath,'New Run\n')

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	iterations: 119,
	vus: 1,
    duration: '60s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "5s", target: 4000 },
    //   ],
};


export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        // let i = Math.floor(Math.random() * 118) + 1
        let i = __ITER;
        let userToken = userTokenData[i][3];
        let auth_id = userTokenData[i][2];
        //-----------------------Headers-----------------------//
        let headers = {
            'Content-Type': 'application/json',
            'user-agent': 'ishakhttp',
            'Authorization': `Bearer ${userToken}`
        }

        let orderJSON = JSON.stringify([
            {
            }
        ]);
        //-----------------------Order API-----------------------//
        let orderRes = http.post(`${baseUrl}/exam-service/v1/group-exams/access-token?program_id=142`,orderJSON,{
            headers: headers
        });

    check(orderRes, {
		'status is 201': (r) => r.status === 201,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(orderRes.status !== 201){
        file.appendString(purchasedFailedFilePath,`Failed API Response,${orderRes.status},${orderRes.body},${auth_id},${i}\n`)
        console.log("Login Failed API Response: " + orderRes.body);
        //console.log(`VU: ${__VU} -  ITER: ${__ITER}`)
    }
    else if(orderRes.status === 201){
        file.appendString(purchasedSuccessFilePath, `Successful Login API Response,${orderRes.status},${orderRes.json().data.token}\n`)
        console.log("Login Success API Response: " + orderRes.body);
    }

    // sleep(1)

    // }	

}