import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
// import { commentPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const commentFailedPath = './logsCSV/superchat/commentFailed.csv';
const commentSuccessPath = './logsCSV/superchat/commentSuccess.csv';

// const csvData = open('../loginSuccess.csv');
// const userTokenData = papaparse.parse(csvData).data;
const csvData2 = open('../logsCSV/liveClass/sessionSuccess.csv');
const liveClassTokenData = papaparse.parse(csvData2).data;
//let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1,
	// vus: 1,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "20s", target: 2000 },
      ],
};


export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        let i = Math.floor(Math.random() * 98) + 1
        let userToken = liveClassTokenData[i][4];
        let auth_id = liveClassTokenData[i][3];
        // let commentData = commentPayload();        
        let commentJSON = JSON.stringify({
            // "type": "comment",
            // "sender_type": "student",
            "body": faker.lorem.sentence(),
            // "attachments": [],
            // "sender_id": auth_id,
            // "live_class_id": "R36Vv7Gze6",
            // "publish_channel_name": "stage_message.R36Vv7Gze6"
        });
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let commentRes = http.post(`${baseUrl}/liveclass-service/api/v4/live-class/85Mwy1qSdF/messages`, commentJSON, {
        headers: headers
    });

    check(commentRes, {
		'status is 201': (r) => r.status === 201,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(commentRes.status !== 201){
        file.appendString(commentFailedPath,`Failed Comment API Response,${commentRes.status},${auth_id},${commentRes.body},${i}\n`)
        console.log(`Comment Failed API Response:, ${commentRes.body}, ${commentJSON}`);
    }
    else if(commentRes.json().status === 201){
        file.appendString(commentSuccessPath,`Success Comment API Response,${commentRes.status},${commentRes.timings.duration},${auth_id},${commentJSON}\n`)
        console.log(`Comment Success API Response:, ${commentRes.body}`);
    }

    // }	

}


