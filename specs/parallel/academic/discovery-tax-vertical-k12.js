import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the stages for the test
export let options = {
    vus: 5000,
    duration: '10s',
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjVjNzk2ZTAwNGNlOGYyZDJkNmU0OTc3IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1Yzc5NmUwMDRjZThmMmQyZDZlNDk3NyIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTAzLjE0Ny4xMDcuNiJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwODI5OTEwNH0.yMTzCi_h0OaZ0xa-AR5gneLvSm2T0tUMIz5QCx9YtCs'
        }

        let res = http.get(`${baseUrl}/discovery-service/api/v1/taxonomies?vertical=k12&segment=101&with_enrolled_products=true&group_by=modality`, {
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




