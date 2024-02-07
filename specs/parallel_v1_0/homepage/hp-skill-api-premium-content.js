import http from 'k6/http';
import { check, sleep } from 'k6';
import file from 'k6/x/file';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';


//Define the stages for the test
export let options = {
    iterations: 10,
    vus: 10,
    duration: '10s',
};

const result = './specs/parallel_v1_0/homepage/result.csv';
const failedResult = './specs/parallel_v1_0/homepage/failedResult.csv';

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {
        
        let loginRes = http.get(`${baseUrl}/skillup-service/api/v3/premium/content/courses`);

        check(loginRes, {
            'status is 200': (r) => r.status === 200,
            'response time < 1000ms': (r) => r.timings.duration < 1000
        });

        if (loginRes.status !== 200) {
            file.appendString(failedResult, `Failed Login API Response,${JSON.stringify(loginRes.status)}\n`)
            console.log("Login Failed API Response: " + loginRes.body);
        }
        else if (loginRes.status === 200) {
            file.appendString(result, `Successful:${JSON.stringify(loginRes.status)}\n`)
            console.log("Login Success API Response: " + loginRes.body);
        }

        sleep(1);
}


