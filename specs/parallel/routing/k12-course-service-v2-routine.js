import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the stages for the test
export let options = {
    vus: 1000,
    duration: '10s',
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDhkZGQzOTFjOTczMTE1YjcyN2I3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNTIxMjAwNDg4IiwiZW1haWwiOiJ0ZXN0QHRlc3Rlci5jb20iLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGVzdCBBZ2FpbiIsImlzX2FjdGl2ZSI6ZmFsc2UsInZlcmlmaWVkIjp0cnVlLCJkZXZpY2VfaWQiOiI2NWMzNTE4YjY0NTEwNWU3OWRhYTkyYjciLCJkZXZpY2UiOnsiZGV2aWNlX2lkIjoiNjVjMzUxOGI2NDUxMDVlNzlkYWE5MmI3IiwiZGV2aWNlX25hbWUiOiJDaHJvbWUgMTIxLjAuMC4wIiwiZGV2aWNlX3R5cGUiOiJicm93c2VyIiwiZGV2aWNlX29zIjoiSW50ZWwgTWFjIE9TIFggMTBfMTVfNyIsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLXN0YWdlLjEwbWludXRlc2Nob29sLm5ldCIsImlwX2FkZHJlc3MiOiIxNzUuNDEuNDUuMTk1In0sInVzZXJfc3RhdHVzIjoiIiwiZGF0ZV9qb2luZWQiOiIyMDIzLTAxLTMxVDA5OjIyOjI3LjMwN1oiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MDE5MjExfQ.8iRJ9WEPiMD_GR7kmGxavb4mkn66WSmlz9zsCsUrgxk'
        }

        let res = http.get(`${baseUrl}/k12-course-service/api/v2/routine?start_at=2024-01-31%2000%3A00%3A00&end_at=2024-02-29%2000%3A00%3A00&catalog_product_id=10282`, {
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

        // if (res.status !== 200) {
        //     console.log("Login Failed API Response: " + res.status);
        // }
       

        sleep(1);
}




