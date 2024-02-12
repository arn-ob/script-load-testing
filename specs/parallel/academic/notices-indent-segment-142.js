import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the stages for the test
export let options = {
    vus: 15000,
    duration: '15s',
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net';


export default function () {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDhkZGQzOTFjOTczMTE1YjcyN2I3ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNTIxMjAwNDg4IiwiZW1haWwiOiJ0ZXN0QHRlc3Rlci5jb20iLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiVGVzdCBBZ2FpbiIsImlzX2FjdGl2ZSI6ZmFsc2UsInZlcmlmaWVkIjp0cnVlLCJkZXZpY2VfaWQiOiI2NWM5ZmYyYzMzMWZkYzZmMWI0ZmVlMmYiLCJkZXZpY2UiOnsiZGV2aWNlX2lkIjoiNjVjOWZmMmMzMzFmZGM2ZjFiNGZlZTJmIiwiZGV2aWNlX25hbWUiOiJDaHJvbWUgMTEyLjAuMC4wIiwiZGV2aWNlX3R5cGUiOiJicm93c2VyIiwiZGV2aWNlX29zIjoiSW50ZWwgTWFjIE9TIFggMTBfMTVfNyIsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLXN0YWdlLjEwbWludXRlc2Nob29sLm5ldCIsImlwX2FkZHJlc3MiOiIxNzUuNDEuNDUuMTk1In0sInVzZXJfc3RhdHVzIjoiIiwiZGF0ZV9qb2luZWQiOiIyMDIzLTAxLTMxVDA5OjIyOjI3LjMwN1oiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4NDU2ODc2fQ.9wQ8O63TaYsgj1wZLYh03F6m6Wo5NyJGAx726OqK5J8'
        }

        let res = http.get(`${baseUrl}/notice-service/api/v1/notices?identification_id=142&identification_type=program&page=1&type=notice&limit=2`, {
            headers: headers
        });

        check(res, {
            'status is 200': (r) => r.status === 200,
            'status is 502': (r) => r.status === 502,
            'status is 503': (r) => r.status === 503,
            'status is 500': (r) => r.status === 500,
            'status is 520': (r) => r.status === 520,
            'status is 521': (r) => r.status === 521,
            'status is 522': (r) => r.status === 522,
            'response time < 1000ms': (r) => r.timings.duration < 1000
        });

        if (res.status !== 200) {
            console.log("notice-service/api/v1/notices?identification_id=142 > Status: " + res.status);
        }
       

        sleep(1);
}




