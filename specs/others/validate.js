import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { check } from 'k6';
import file from 'k6/x/file';

export let options = {
	//executor: 'shared-iterations',
	// iterations: 15000,
	// vus: 10,
    // duration : '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "20s", target: 1000 },
      ],
};

const baseUrl = 'https://stage-api.10minuteschool.net';

const tokenFailedFilePath = './logsCSV/tokenValidate/tokenFailed.csv';
const tokenSuccessFilePath = './logsCSV/tokenValidate/tokenSuccess.csv';

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
// let length = userTokenData.length;

export default function() {
    
    // for (let i = 0; i <length-1; i++) {
        let i = Math.floor(Math.random() * 1000) + 1
        let userToken = userTokenData[i][3];
        let auth_id = userTokenData[i][2];      
        let tokenJSON = JSON.stringify({
            'accessToken': `${userToken}`
        });
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp'
	}
    //-----------------------Order API-----------------------//
    let tokenValidateRes = http.post(`${baseUrl}/auth/v1/token/validate`, tokenJSON, {
        headers: headers
    });

    check(tokenValidateRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(tokenValidateRes.status !== 200){
        file.appendString(tokenFailedFilePath,`Failed Validate Response,${tokenValidateRes.status},${tokenJSON},${tokenValidateRes.body}\n`)
        console.log("Validate Failed API Response: " + tokenValidateRes.body);
    }
    else if(tokenValidateRes.status === 200 && tokenValidateRes.json().data.user_info.id === auth_id){
        file.appendString(tokenSuccessFilePath, `Successful Validate Response,${tokenValidateRes.status},${tokenValidateRes.timings.duration},${tokenValidateRes.json().data.user_info.id}\n`)
        console.log("Validate Success API Response: " + tokenValidateRes.body);
        if(i<=1000){
            i = 1;
        }
    }
    else{
        console.log(tokenValidateRes.body)
    }


    // }	

}


