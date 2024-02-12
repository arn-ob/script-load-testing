import http from 'k6/http';
import { sleep,check } from 'k6';


const baseUrl = 'https://stage-api.10minuteschool.net/skillup-service/api/v4/courses/ielts-course/syllabus'


const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzJlZWY1OWI1ZmM1MDRjMGIxMzY3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoic3ViQHN1Yi5zdWIiLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoieW8gbWUiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjQ3ZWViM2ViY2I1ODVjMTVlZTMxY2E4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0N2VlYjNlYmNiNTg1YzE1ZWUzMWNhOCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDExNC4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTE4LjY3LjIyMC4zOCJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMy0wNS0yOFQwNjowNDozNy4zMzNaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY4NjA2NDU1OH0.CCR72HTdE98kx1IFpt20AVCcvnXtBR3WOd-oGgurnEs"

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1000,
	vus: 5000,
    duration: '1s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "5s", target: 5000},
    //   ],
};


export default function() {
    
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp',
        'Authorization': `Bearer ${userToken}`
	}
    let syRes = http.get(`${baseUrl}`, {
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


