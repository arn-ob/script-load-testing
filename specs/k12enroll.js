import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { check } from 'k6';
import file from 'k6/x/file';

// let lengthMinus = 1; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const k12FailedFilePath = './logsCSV/enroll/k12Failed.csv';
// file.writeString(k12FailedFilePath,'New Run\n')
const k12SuccessFilePath = './logsCSV/enroll/k12Success.csv';
// file.writeString(k12SuccessFilePath,'New Run\n')

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
// let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1000,
	// vus: 10,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "20s", target: 200 },
      ],
};


export default function() {
    
    let i = Math.floor(Math.random() * 1000) + 1
    // for (let i = 0; i <length-lengthMinus; i++) {
        let userToken = userTokenData[i][3];
        let user_id = userTokenData[i][2];
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let k12EnrollRes = http.get(`${baseUrl}/k12-course-service/api/v2/programs/enrolled`, {
        headers: headers
    });

    check(k12EnrollRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(k12EnrollRes.status !== 200){
        file.appendString(k12FailedFilePath,`Failed k12 API Response,${k12EnrollRes.status},${user_id},${k12EnrollRes.body}\n`)
        console.log("k12 Failed API Response: " + k12EnrollRes.body);
    }
    else if(k12EnrollRes.status === 200){
        file.appendString(k12SuccessFilePath, `Successful Login API Response,${k12EnrollRes.status},${user_id},${k12EnrollRes.timings.duration},Total Course: ${k12EnrollRes.json().data.length}\n`)
        console.log("Login Success API Response: " + k12EnrollRes.body);
    }

    // }	

}


