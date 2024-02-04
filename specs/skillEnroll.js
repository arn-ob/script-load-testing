import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { check } from 'k6';
import file from 'k6/x/file';

let lengthMinus = 1; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const skillFailedFilePath = './logsCSV/enroll/skillFailed.csv';
const skillSuccessFilePath = './logsCSV/enroll/skillSuccess.csv';

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
let length = userTokenData.length;


export default function() {

    let i = __ITER;
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        let userToken = userTokenData[i][3];
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let skillEnrollRes = http.get(`${baseUrl}/skillup-service/api/v3/premium/content/courses/enrolled`, {
        headers: headers
    });

    check(skillEnrollRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(skillEnrollRes.status !== 200){
        file.appendString(skillFailedFilePath,`Failed Login API Response,${skillEnrollRes.status},${skillEnrollRes.body}\n`)
        console.log("Login Failed API Response: " + skillEnrollRes.body);
    }
    else if(skillEnrollRes.status === 200){
        file.appendString(skillSuccessFilePath, `Successful Login API Response,${skillEnrollRes.status},${skillEnrollRes.timings.duration},Total Course: ${skillEnrollRes.json().data.length}\n`)
        console.log("Login Success API Response: " + skillEnrollRes.body);
    }

    // }	

}


