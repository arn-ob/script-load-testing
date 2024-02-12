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
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDhkZGQzOTFjOTczMTE1YjcyN2I3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNTIxMjAwNDg4IiwiZW1haWwiOiJ0ZXN0QHRlc3Rlci5jb20iLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGVzdCBBZ2FpbiIsImlzX2FjdGl2ZSI6ZmFsc2UsInZlcmlmaWVkIjp0cnVlLCJkZXZpY2VfaWQiOiI2NWM5ZmYyYzMzMWZkYzZmMWI0ZmVlMmYiLCJkZXZpY2UiOnsiZGV2aWNlX2lkIjoiNjVjOWZmMmMzMzFmZGM2ZjFiNGZlZTJmIiwiZGV2aWNlX25hbWUiOiJDaHJvbWUgMTEyLjAuMC4wIiwiZGV2aWNlX3R5cGUiOiJicm93c2VyIiwiZGV2aWNlX29zIjoiSW50ZWwgTWFjIE9TIFggMTBfMTVfNyIsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLXN0YWdlLjEwbWludXRlc2Nob29sLm5ldCIsImlwX2FkZHJlc3MiOiIxNzUuNDEuNDUuMTk1In0sInVzZXJfc3RhdHVzIjoiIiwiZGF0ZV9qb2luZWQiOiIyMDIzLTAxLTMxVDA5OjIyOjI3LjMwN1oiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4NDU2ODc2fQ.9wQ8O63TaYsgj1wZLYh03F6m6Wo5NyJGAx726OqK5J8'
        }

        let res = http.get(`${baseUrl}/k12-course-service/api/v2/routine?start_at=2024-01-31%2000%3A00%3A00&end_at=2024-02-29%2000%3A00%3A00`, {
            headers: headers
        });

        check(res, {
            'status is 200': (r) => r.status === 200,
            'status is 502': (r) => r.status === 502,
            'status is 503': (r) => r.status === 503,
            'status is 500': (r) => r.status === 500,
            'status is 520': (r) => r.status === 520,
            'response time < 600ms': (r) => r.timings.duration < 600,
        });

        if (res.status !== 200) {
            console.log("k12-course/api/v2/routine > Status: " + res.status);
        }
       

        sleep(1);
}




