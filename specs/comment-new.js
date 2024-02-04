import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
// import { commentPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net/liveclass-service/api/v4/live-class/Bufr2qj7kR/messages';

const commentFailedPath = './logsCSV/superchat/commentFailed.csv';
const commentSuccessPath = './logsCSV/superchat/commentSuccess.csv';

// const csvData = open('../loginSuccess.csv');
// const userTokenData = papaparse.parse(csvData).data;
// const csvData2 = open('../logsCSV/liveClass/sessionSuccess.csv');
// const liveClassTokenData = papaparse.parse(csvData2).data;
//let length = userTokenData.length;

let liveClassTokenData = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzJlZWY1OWI1ZmM1MDRjMGIxMzY3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoic3ViQHN1Yi5zdWIiLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoieW8gbWUiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjQ5MjhhOGQ2NjY3ZTJjMDdjOGQ3NTQ5IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0OTI4YThkNjY2N2UyYzA3YzhkNzU0OSIsImRldmljZV9uYW1lIjoiQ2hyb21lIDExNC4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTE4LjY3LjIyMC4zOCJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMy0wNS0yOFQwNjowNDozNy4zMzNaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY4NzM1MDUyNX0.SbKsbellYZPQCfRR26NZGwK4_kcSXbGgu7a632iReS8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc3YzFhMmMxYTFlNDYxM2YzOGY2YiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNzExMzE0MTQ3IiwiZW1haWwiOiJmb3ZvbWVzODgwQGRqcGljaC5jb20iLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGFzbmlhIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0OTI4YWQ3NDhiMjdiMWQyY2ZlZjM5ZCIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NDkyOGFkNzQ4YjI3YjFkMmNmZWYzOWQiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMTQuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMDZUMDk6MTk6MjIuOTE0WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODczNTA1OTl9.wfpzA5GIQJwrIs6YZRX_FJH4UFdzdKdLitCErYHW6dc'
]

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1,
	// vus: 1,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "1s", target: 2 },
      ],
};


export default function() {
    
    for (let i = 0; i <100; i++) {
        // let i = Math.floor(Math.random() * 1200) + 1
        let userToken = liveClassTokenData[Math.round(Math.random())];
        // let auth_id = liveClassTokenData[i][3];
        // let commentData = commentPayload();        
        let commentJSON = JSON.stringify({
            "body": faker.lorem.sentence()
        });
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let commentRes = http.post(`${baseUrl}`, commentJSON, {
        headers: headers
    });

    check(commentRes, {
		'status is 201': (r) => r.status === 201,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(commentRes.status !== 201){
        file.appendString(commentFailedPath,`Failed Comment API Response,${commentRes.status},${auth_id},${commentRes.body}\n`)
        console.log(`Comment Failed API Response:, ${commentRes.body}, ${commentJSON}`);
    }
    else if(commentRes.json().status === 201){
        file.appendString(commentSuccessPath,`Success Comment API Response,${commentRes.status},${commentRes.timings.duration},${auth_id}\n`)
        console.log(`Comment Success API Response:, ${commentRes.body}`);
    }

    }	
    sleep(2)

}


