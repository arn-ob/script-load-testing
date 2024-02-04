import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
// import { commentPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


// let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net/k12-course-service/api/v2/routine?program_id=142&start_at=2023-06-30T18:00:00.000Z&end_at=2023-07-31T18:00:00.000Z';

// const commentFailedPath = './logsCSV/superchat/commentFailed.csv';
// const commentSuccessPath = './logsCSV/superchat/commentSuccess.csv';

// const csvData = open('../loginSuccess.csv');
// const userTokenData = papaparse.parse(csvData).data;
// const csvData2 = open('../logsCSV/liveClass/sessionSuccess.csv');
// const liveClassTokenData = papaparse.parse(csvData2).data;
//let length = userTokenData.length;

let liveClassTokenData = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0OGRiNjY2N2UyYzA3YzhkNzUzNCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiZXhhbUB0ZXN0LmNvbSIsImxvZ2luX3R5cGUiOiJlbWFpbCIsImxvZ2luX3NvdXJjZSI6IjEwbWluc2Nob29sIiwibG9naW5fdGFyZ2V0IjoiIiwibG9naW5fYXMiOjAsIm5hbWUiOiJza2kiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjRhYTRiZTY0NTY1ZTg2YzIyZjI0ZTg1IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0YWE0YmU2NDU2NWU4NmMyMmYyNGU4NSIsImRldmljZV9uYW1lIjoiaW5zb21uaWEgMjAyMy4yLjIiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiIiLCJvcmlnaW4iOiJ1bmtub3duIiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjMtMDYtMTlUMTI6MjM6NTUuNjdaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY4ODkwNzM1MH0.XbqVUf3a9jvo3CgDul6ALtt0KHHxiu3OEk-vZ3hGh3w',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI2MzdiMmRhNzA2NDdlYzkxNmE3MiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNTIxMjAwNDgzIiwiZW1haWwiOiJ0YXNuaWExQDEwbWludXRlc2Nob29sLmNvbSIsImxvZ2luX3R5cGUiOiJwaG9uZSIsImxvZ2luX3NvdXJjZSI6IjEwbWluc2Nob29sIiwibG9naW5fdGFyZ2V0IjoiIiwibG9naW5fYXMiOjAsIm5hbWUiOiJ0ZXN0IHVzZXIgIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0YWE0YmNhNDU2NWU4NmMyMmYyNGU4MyIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGFhNGJjYTQ1NjVlODZjMjJmMjRlODMiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMTIuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMDlUMDg6MjM6MjMuNjcxWiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODg5MDczMjJ9.jPuH7Gg_0NmM3QW08N5rVx0Ko9Jp8yZnVfjFEvRN9YA',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc3YzFhMmMxYTFlNDYxM2YzOGY2YiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNzExMzE0MTQ3IiwiZW1haWwiOiJmb3ZvbWVzODgwQGRqcGljaC5jb20iLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGFzbmlhIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0YWE0YjhjMzU2ZTVmNTU4ZjYxYzY1YyIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGFhNGI4YzM1NmU1ZjU1OGY2MWM2NWMiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMTIuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMDZUMDk6MTk6MjIuOTE0WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODg5MDcyNjB9.kEGG6O8BLL-d_MZ6Y-Q7I26Xw96t_MzPAKOvFxnI7BE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE0MDEwNDU2NWU4NmMyMmYyNGU3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiZW5yb2xtZW50QGNoZWNrLmNvbSIsImxvZ2luX3R5cGUiOiJlbWFpbCIsImxvZ2luX3NvdXJjZSI6IiIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiRW5yb2xtZW50IiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0YWE0MDEwNDU2NWU4NmMyMmYyNGU3ZSIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGFhNDAxMDQ1NjVlODZjMjJmMjRlN2UiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMTQuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjMtMDctMDlUMDU6MDU6MjAuNDAwMjM2MzE3WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODg5MDQzMjB9.9nD6xfoINFkJhY4r37qUeAq4p89MmDYJrhVJyUv9z8M'
]

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1,
	// vus: 1,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "1s", target: 5000 },
      ],
};


export default function() {
    
    // for (let i = 0; i <100; i++) {
        // let i = Math.floor(Math.random() * 1200) + 1
        let random = Math.floor(Math.random() * 4)
        let userToken = liveClassTokenData[random];
        // let auth_id = liveClassTokenData[i][3];
        // let commentData = commentPayload();        
        // let commentJSON = JSON.stringify({
        //     "body": faker.lorem.sentence()
        // });
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let commentRes = http.get(`${baseUrl}`, {
        headers: headers
    });

    check(commentRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(commentRes.status !== 200){
        // file.appendString(commentFailedPath,`Failed Comment API Response,${commentRes.status},${auth_id},${commentRes.body}\n`)
        console.log(`Comment Failed API Response:, Token No: ${random}, ${commentRes.body}`);
    }
    else if(commentRes.status === 200){
        // file.appendString(commentSuccessPath,`Success Comment API Response,${commentRes.status},${commentRes.timings.duration},${auth_id}\n`)
        // console.log(`Comment Success API Response:, ${commentRes.status}`);
    }

    // }	

}


