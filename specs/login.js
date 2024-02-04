// Import the necessary k6 and faker libraries
import http from 'k6/http';
import { check,sleep } from 'k6';
import file from 'k6/x/file';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

let lengthMinus = 15000;

const userExistsFailedFilePath = './logsCSV/login/userExistsFailed.csv';
const userExistSuccessFilePath = './logsCSV/login/userExistSuccess.csv';

const loginFailedFilePath = './logsCSV/login/loginFailed.csv';
const loginSuccessFilePath = 'loginSuccess.csv';
// file.writeString(loginSuccessFilePath,'New Run\n')
const csvData = open('../logsCSV/signup/signupSuccess2.csv');
const loginData = papaparse.parse(csvData).data;
let length = loginData.length;

//Define the stages for the test
export let options = {
	//executor: 'shared-iterations',
	iterations: 5,
	vus: 1,
    duration: '40s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "1s", target: 30 },
    //   ],
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net/auth';

export default function() {

    //for (let i = 0; i < length - lengthMinus; i++) {
        let i = __ITER;
        let username = loginData[i][3];

        const userExistsJSON = JSON.stringify({
            "username": username,
            "loginType": "email",
        });

//-----------------------Headers-----------------------//
        let headers = {
            'Content-Type': 'application/json',
            'user-agent': 'ishakhttp',
        }
//-----------------------User Exist API-----------------------//
        let userExistRes = http.post(`${baseUrl}/v1/userExists`, userExistsJSON, {
            headers: headers
        });

        // check(userExistRes, {
        //     'status is 200': (r) => r.status === 200,
        //     'response time < 200ms': (r) => r.timings.duration < 200
        // });

        if (userExistRes.status !== 200) {
            file.appendString(userExistsFailedFilePath,`Failed User Exist API Response,${userExistRes.status},${userExistRes.timings.duration},${userExistsJSON},${userExistRes.body}\n`)
            console.log("User Exist Failed API Response: "+ userExistRes.status + userExistRes.timings.duration +  + userExistRes.body);
        }
        else if(userExistRes.json().data.exist === true){
            file.appendString(userExistSuccessFilePath, `Successful User Exist API Response,${userExistRes.status},${userExistRes.timings.duration},${userExistRes.body}\n`)
            //-----------------------Login API-----------------------//
            let loginJSON = JSON.stringify({
                "username": username,
                "password" : "123456",
                "loginType": "email"
            })

            let loginRes = http.post(`${baseUrl}/v1/login`, loginJSON, {
                headers: headers
            });

            check(loginRes, {
                'status is 200': (r) => r.status === 200,
                'response time < 200ms': (r) => r.timings.duration < 200
            });
        
            if(loginRes.status !== 200){
                file.appendString(loginFailedFilePath,`Failed Login API Response,${loginRes.status},${loginRes.timings.duration},${loginJSON},${loginRes.body}\n`)
                console.log("Login Failed API Response: " + loginRes.body);
            }
            else if(loginRes.status === 200){
                file.appendString(loginSuccessFilePath, `Successful:${loginRes.status},${loginRes.timings.duration},${loginRes.json().data.user_info.id},${loginRes.json().data.token.access_token}\n`)
                console.log("Login Success API Response: " + loginRes.body);
            }
            
        }
        // sleep(1);
    // }

}