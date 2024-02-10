import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import file from 'k6/x/file';

let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const purchasedFailedFilePath = './logsCSV/exam/getExamFailed.csv';
const purchasedSuccessFilePath = './logsCSV/exam/getExam.csv';

const csvData = open('../logsCSV/exam/accessToken.csv');
const userTokenData = papaparse.parse(csvData).data;

export let options = {
	//executor: 'shared-iterations',
	// iterations: 2,
	// vus: 1,
    // duration: '2s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "1s", target: 4000 },
      ],
};


export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        // let i = Math.floor(Math.random() * 118) + 1
        let i = __ITER;
        let userToken = userTokenData[i][2];
        // let auth_id = userTokenData[i][2];
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp',
        'Authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let orderRes = http.get(`${baseUrl}/exam-service/v1/group-exams`, {
        headers: headers
    });

    check(orderRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(orderRes.status !== 200){
        file.appendString(purchasedFailedFilePath,`Failed Login API Response,${orderRes.status},${orderRes.body}\n`)
        console.log("Login Failed API Response: " + orderRes.body);
        //console.log(`VU: ${__VU} -  ITER: ${__ITER}`)
    }
    else if(orderRes.status === 200){
        file.appendString(purchasedSuccessFilePath, `Successful Login API Response,${orderRes.status}\n`)
        // console.log("Login Success API Response: " + orderRes.body);
    }

    // sleep(1)

    // }	

}


