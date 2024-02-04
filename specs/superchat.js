import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { messagePayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';
import file from 'k6/x/file';

let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const superchatFailedPath = './logsCSV/superchat/superchatFailed.csv';
const superchatSuccessPath = './logsCSV/superchat/superchatSuccess.csv';

// const csvData = open('../loginSuccess.csv');
// const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;
const csvData2 = open('../logsCSV/superchat/conversationSuccess.csv');
const conversationData = papaparse.parse(csvData2).data;


export let options = {
	iterations: 99,
	vus: 1,
    duration: '10s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "1s", target: 5 },
    //   ],
};


export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        // let i = Math.floor(Math.random() * 39) + 1
        let i = __ITER;

        let userToken = conversationData[i][5];
        let auth_id = conversationData[i][3];
        let con_id = conversationData[i][4];
        let messageJSON = JSON.stringify({
            "body": faker.lorem.sentence(),
            "conversation_id": con_id,
            "thread_id": "59",
            "session": {
              "name": "The Never Ending Class for Class 10 Physics",
              "identification_type": "live_class",
              "identification_id": "q2O6W532X8"
            },
            "attachments": []
          })
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let superchatRes = http.post(`${baseUrl}/superchat-service/api/v1/messages`, messageJSON, {
        headers: headers
    });

    check(superchatRes, {
		'status is 201': (r) => r.status === 201,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(superchatRes.status !== 201){
        file.appendString(superchatFailedPath,`Failed Superchat API Response,${superchatRes.status},${auth_id},${superchatRes.body}\n`)
        console.log(`Superchat Failed API Response:, ${superchatRes.body}, ${messageJSON}`);

    }
    else if(superchatRes.status === 201){
        file.appendString(superchatSuccessPath,`Success Superchat API Response,${superchatRes.status},${auth_id},${superchatRes.json().data.sender_member_id}\n`)
        console.log(`Superchat Success API Response:, ${superchatRes.body}, ${messageJSON}`);
    }

    // sleep(1)

    // }	

}
