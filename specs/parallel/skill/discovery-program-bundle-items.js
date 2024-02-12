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
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjVjNzliNDY5ZThmYTljZjM2MmYyNzBiIiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1Yzc5YjQ2OWU4ZmE5Y2YzNjJmMjcwYiIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS1yb3V0ZXIuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjEwMy4xNDcuMTA3LjYifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTItMjlUMTA6MjU6NDQuNDY2WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MDgzMDAyMzB9.I642MldFZVki0Y99KJ68B4A95kT8_kQ_Wffm--LPIjs'
        }

        let res = http.get(`${baseUrl}/discovery-service/api/v1/products/ghore-boshe-spoken-english/bundle-items`, {
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


