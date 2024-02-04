import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { sleep,check } from 'k6';
import { conversationPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

let lengthMinus = 15008; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const conversationFailed = './logsCSV/superchat/conversationFailed.csv';
const conversationSuccess = './logsCSV/superchat/conversationSuccess.csv';

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
//let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	iterations: 100,
	vus: 1,
    duration: '30s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "10s", target: 30 },
    //   ],
};


export default function() {
    
    //for (let i = 0; i <length-lengthMinus; i++) {
        let i = __ITER;
        let userToken = userTokenData[i][3];
        let auth_id = userTokenData[i][2];
        let conversationData = conversationPayload();        
        let conversationJSON = JSON.stringify(conversationData);
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let conversationRes = http.post(`${baseUrl}/superchat-service/api/v1/conversations`, conversationJSON, {
        headers: headers
    });

    check(conversationRes, {
		'status is 201': (r) => r.status === 201,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(conversationRes.status !== 201){
        file.appendString(conversationFailed,`Failed Conversation API Response,${conversationRes.status},${auth_id},${conversationRes.body}\n`)
        console.log(`Conversation Failed API Response:, ${conversationRes.body}, ${conversationJSON}`);
    }
    else if(conversationRes.status === 201){
        file.appendString(conversationSuccess,`Success Conversation API Response,${conversationRes.status},${conversationRes.timings.duration},${auth_id},${conversationRes.json().data.id},${userToken}\n`)
        console.log(`Conversation Success API Response:, ${conversationRes.body}`);
    }

    // }	

}


