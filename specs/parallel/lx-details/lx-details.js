import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the stages for the test
export let options = {
    vus: 1000,
    duration: '1s',
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc3YzFhMmMxYTFlNDYxM2YzOGY2YiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNzExMzE0MTQ3IiwiZW1haWwiOiJmb3ZvbWVzODgwQGRqcGljaC5jb20iLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGFzbmlhIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY1YzlmZTRkMzMxZmRjNmYxYjRmZWUyZCIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NWM5ZmU0ZDMzMWZkYzZmMWI0ZmVlMmQiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSAxMjEuMC4wLjAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiJJbnRlbCBNYWMgT1MgWCAxMF8xNV83Iiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAtc3RhZ2UuMTBtaW51dGVzY2hvb2wubmV0IiwiaXBfYWRkcmVzcyI6IjE3NS40MS40NS4xOTUifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMDZUMDk6MTk6MjIuOTE0WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MDg0NTY2NTN9.ewC9VRQdxKxwWvEg6YkkJx_K8QfFAiI2Oqd7f9YzMek'
        }

        let res = http.get(`${baseUrl}/catalog-service/api/v2/products/web-design/lx-details?meta_keys=certificate%2Cabout%2Cpointers%2Croutine&with_instructors=true`, {
            headers: headers
        });

        check(res, {
            '200': (r) => r.status === 200,
            '502': (r) => r.status === 502,
            '503': (r) => r.status === 503,
            '500': (r) => r.status === 500,
            '520': (r) => r.status === 520,
            '521': (r) => r.status === 521,
            '522': (r) => r.status === 522,
            'response time > 200ms': (r) => r.timings.duration > 100,
        });

        if (res.status !== 200) {
            console.log("catalog-service/api/v2/products/english-for-professionals-course/lx-details > Status : " + res.status);
        }

        sleep(1);
}


