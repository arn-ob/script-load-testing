import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the stages for the test
export let options = {
    vus: 20000,
    duration: '10s',
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk'
        }

        let res = http.get(`${baseUrl}/notice-service/api/v1/notices?identification_id=101&identification_type=segments&page=1&type=notice&limit=1`, {
            headers: headers
        });

        check(res, {
            'status is 200': (r) => r.status === 200,
            'status is 502': (r) => r.status === 502,
            'status is 503': (r) => r.status === 503,
            'status is 500': (r) => r.status === 500,
            'status is 520': (r) => r.status === 520,
            'response time > 200ms': (r) => r.timings.duration > 100,
        });

        if (res.status !== 200) {
            console.log("Login Failed API Response: " + res.status);
        }
       

        sleep(1);
}


