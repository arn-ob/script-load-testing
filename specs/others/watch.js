import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { orderPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

const baseUrl = 'https://stage-api.10minuteschool.com/tracker-service/api/v1/watches'

// const purchasedFailedFilePath = './logsCSV/order/orderFailed.csv';
// file.writeString(purchasedFailedFilePath,'New Run\n')
// const purchasedSuccessFilePath = './logsCSV/order/orderSuccess.csv';
// file.writeString(purchasedFailedFilePath,'New Run\n')

// const csvData = open('../loginSuccess.csv');
// const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;

const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzJlZWY1OWI1ZmM1MDRjMGIxMzY3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoic3ViQHN1Yi5zdWIiLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoieW8gbWUiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjQ3ZDc3NGI5MjBhYmZiNGMzNGI0NjAzIiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0N2Q3NzRiOTIwYWJmYjRjMzRiNDYwMyIsImRldmljZV9uYW1lIjoiQ2hyb21lIDExNC4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTE4LjY3LjIyMC4zOCJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMy0wNS0yOFQwNjowNDozNy4zMzNaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY4NTk2OTMzOX0.uDRhd_Vy05NMNnr8fcDK49xhBJDChjG3srEyYvo-8c0"

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1000,
	// vus: 10,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "30s", target: 5000},
      ],
};


export default function() {

    let watchJSON = JSON.stringify({
        "action": "playing",
        "end": 10,
        "identification_id": "50",
        "identification_type": "course",
        "meta": {},
        "platform": "skills",
        "start": 0,
        "video_id": "5P0IqNFU",
        "video_total_time": 93
      })
    

    //for (let i = 0; i <length-lengthMinus; i++) {
        // let i = Math.floor(Math.random() * 1000) + 1
        // // let i = 1
        // let userToken = userTokenData[i][3];

        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp',
        'Authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let syRes = http.get(`${baseUrl}`, watchJSON, {
        headers: headers
    });

    check(syRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(syRes.status !== 200){
        // file.appendString(purchasedFailedFilePath,`Failed Login API Response,${orderRes.status},${auth_id},${orderJSON},${orderRes.body}\n`)
        console.log("Syl Failed API Response: " + syRes.body);
        //console.log(`VU: ${__VU} -  ITER: ${__ITER}`)
    }
    // else if(orderRes.status === 200){
    //     // file.appendString(purchasedSuccessFilePath, `Successful Login API Response,${orderRes.status},${auth_id},${orderRes.timings.duration},OrderID:${orderRes.json().data.order_info.id},${orderRes.json().data.order_info.invoice_id}\n`)
        
    //     console.log("Login Success API Response: " + orderRes.body);
    // }

    // sleep(1)
    // i++;

    // }	

}


