import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
// import { commentPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


// let lengthMinus = 15008; //define loop length

const liveClassTokenData = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI2MzdiMmRhNzA2NDdlYzkxNmE3MiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNTIxMjAwNDgzIiwiZW1haWwiOiJ0YXNuaWExQDEwbWludXRlc2Nob29sLmNvbSIsImxvZ2luX3R5cGUiOiJwaG9uZSIsImxvZ2luX3NvdXJjZSI6IjEwbWluc2Nob29sIiwibG9naW5fdGFyZ2V0IjoiIiwibG9naW5fYXMiOjAsIm5hbWUiOiJ0ZXN0IHVzZXIgIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0Yjc2ZWU0NTNlZjQ3NTM0NDgyODM0NyIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGI3NmVlNDUzZWY0NzUzNDQ4MjgzNDciLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMTQuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMDlUMDg6MjM6MjMuNjcxWiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODk3NjgyNzZ9._Havrrm06JN0zruCP39qEinyQDwsydhgyp-9AQXCY30',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc3YzFhMmMxYTFlNDYxM2YzOGY2YiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNzExMzE0MTQ3IiwiZW1haWwiOiJmb3ZvbWVzODgwQGRqcGljaC5jb20iLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGFzbmlhIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0Yjc2ZjFlMmVjN2M2NDI0Y2NhZGJlMCIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGI3NmYxZTJlYzdjNjQyNGNjYWRiZTAiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMTIuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMDZUMDk6MTk6MjIuOTE0WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODk3NjgzMzR9.zh5KRyFd-Kk0tqXw-ETkNP1Fq4oa8I33NmTgnne66BI',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDhkZGQzOTFjOTczMTE1YjcyN2I3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoidGVzdEB0ZXN0ZXIuY29tIiwibG9naW5fdHlwZSI6ImVtYWlsIiwibG9naW5fc291cmNlIjoiMTBtaW5zY2hvb2wiLCJsb2dpbl90YXJnZXQiOiIiLCJsb2dpbl9hcyI6MCwibmFtZSI6IlRlc3QgQWdhaW4iLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjRiNzZmNGY1M2VmNDc1MzQ0ODI4MzQ5IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0Yjc2ZjRmNTNlZjQ3NTM0NDgyODM0OSIsImRldmljZV9uYW1lIjoiaW5zb21uaWEgMjAyMy4zLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiIiLCJvcmlnaW4iOiJ1bmtub3duIiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjMtMDEtMzFUMDk6MjI6MjcuMzA3WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODk3NjgzODN9.9KmY9fhIVXV5TU37ghyE5j6jB5OQMbFjoUU8HXQEtC8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTFmMGFlNWRiOGE5NmIxMDk0ZGMyNCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoidGVzdEBza2lsbHMuY29tIiwibG9naW5fdHlwZSI6ImVtYWlsIiwibG9naW5fc291cmNlIjoiMTBtaW5zY2hvb2wiLCJsb2dpbl90YXJnZXQiOiIiLCJsb2dpbl9hcyI6MCwibmFtZSI6IlRlc3QgY2VydGlmaWNhdGUiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjRiNzZmNjQ1M2VmNDc1MzQ0ODI4MzRiIiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0Yjc2ZjY0NTNlZjQ3NTM0NDgyODM0YiIsImRldmljZV9uYW1lIjoiQ2hyb21lIDExMi4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTE4LjY3LjIyMC4zOCJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMy0wNS0wM1QwNToyNzoxMC4wNTdaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY4OTc2ODQwNH0.zs8HF63wPytT8tso-H3qxh_qUPq2ZnFZq-fcx6pqqpI'
  ];
const baseUrl= "https://stage-api.10minuteschool.net/skillup-service/api/v3/premium/content/courses/enrolled"

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1,
	// vus: 1,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "1s", target: 3000 },
      ],
};


export default function() {
    
    // for (let i = 0; i <100; i++) {
        // let i = Math.floor(Math.random() * 1200) + 1
        let userToken = liveClassTokenData[Math.floor(Math.random() * 4)];
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
        console.log(`Comment Failed API Response:, ${commentRes.body}`);
    }
    else if(commentRes.status === 200){
        // file.appendString(commentSuccessPath,`Success Comment API Response,${commentRes.status},${commentRes.timings.duration},${auth_id}\n`)
        // console.log(`Comment Success API Response:, ${commentRes.status}`);
    }

    // }	

}


