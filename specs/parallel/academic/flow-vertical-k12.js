
import http from 'k6/http';
import { check, sleep } from 'k6';


// Define the stages for the test
export let options = {
    vus: 10000,
    duration: '50s',
};


// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {
        
        let loginRes = http.get(`${baseUrl}/flow-service/api/v1/flows?vertical=k12&segment=101&modality=after_purchase&product=10091`);

        check(loginRes, {
            'status is 200': (r) => r.status === 200,
            'status is 502': (r) => r.status === 502,
            'status is 503': (r) => r.status === 503,
            'status is 500': (r) => r.status === 500,
            'status is 520': (r) => r.status === 520,
            'response time < 1000ms': (r) => r.timings.duration < 1000
        });

        if (loginRes.status !== 200) {
            // file.appendString(failedResult, `Failed Login API Response,${JSON.stringify(loginRes.status)}\n`)
            console.log("Login Failed API Response: " + loginRes.status);
        }
    

        sleep(2);
}


