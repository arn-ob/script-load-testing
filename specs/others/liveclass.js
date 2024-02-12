import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { check } from 'k6';
import { sessions } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

// let lengthMinus = 1; //define loop length

const baseUrl = 'https://stage-api.10minuteschool.net';

const sessionFailedFilePath = './logsCSV/liveClass/sessionFailed.csv';
// file.writeString(sessionFailedFilePath,'New Run\n')
const sessionSuccessFilePath = './logsCSV/liveClass/sessionSuccess.csv';
// file.writeString(sessionSuccessFilePath,'New Run\n')

const studentConfigFailedFilePath = './logsCSV/liveClass/studentConfigFailed.csv';
// file.writeString(studentConfigFailedFilePath,'New Run\n')
const studentConfigSuccessFilePath = './logsCSV/liveClass/studentConfigSuccess.csv';
// file.writeString(studentConfigSuccessFilePath,'New Run\n')

const pingFailedFilePath = './logsCSV/liveClass/pingFailed.csv';
// file.writeString(pingFailedFilePath,'New Run\n')
const pingSuccessFilePath = './logsCSV/liveClass/pingSuccess.csv';
// file.writeString(pingSuccessFilePath,'New Run\n')

const csvData = open('../loginSuccess.csv');
const userTokenData = papaparse.parse(csvData).data;
let length = userTokenData.length;

export let options = {
	//executor: 'shared-iterations',
	iterations: 100,
	vus: 1,
    duration: '80s',
    // stages: [
    //     // Ramp up to 1 VUs for 5 second
    //     { duration: "30s", target: 300 },
    //   ],
};

export default function() {
    
    // for (let i = 0; i <length-lengthMinus; i++) {
        // let i = Math.floor(Math.random() * 2000) + 1
        let i = __ITER;
        let userToken = userTokenData[i][3];
        let user_id = userTokenData[i][2];
        let sessionData = sessions();
        let sessionJSON = JSON.stringify(sessionData);
        //-----------------------Headers-----------------------//
        let headers = {
            'Content-Type': 'application/json',
            'authority': 'stage-api.10minuteschool.net',
            'Authorization': `Bearer ${userToken}`
        }

        let sessionRes = http.post(`${baseUrl}/liveclass-service/api/v3/live-class/sessions`, sessionJSON, {
            headers: headers
        });

        check(sessionRes, {
            'status is 201': (r) => r.status === 201,
            'response time < 200ms': (r) => r.timings.duration < 200
        });

        // let liveClassToken = sessionRes.json().data.liveclass_user_token

        if(sessionRes.status !== 201){
            file.appendString(sessionFailedFilePath,`Failed Session API Response,${sessionRes.status},${sessionJSON},${sessionRes.body}\n`)
            console.log("Session Failed API Response: " + sessionRes.body)
            console.log(userToken);
            console.log(sessionJSON);
        }
        else if(sessionRes.status === 201){
            file.appendString(sessionSuccessFilePath, `Successful Session API Response,${sessionRes.status},${sessionRes.timings.duration},${user_id},${sessionRes.json().data.liveclass_user_token}\n`)
            console.log("Session Success API Response: " + sessionRes.body);

            let headerStudentConfig = {
                'Content-Type': 'application/json',
                'authority': 'stage-api.10minuteschool.net',
                'Authorization': `Bearer ${sessionRes.json().data.liveclass_user_token}`
        }
            let studentConfigRes = http.get(`${baseUrl}/liveclass-service/api/v3/live-class/${sessionData.liveclass_id}/student-join-config`, {
                headers: headerStudentConfig
            });

            if(studentConfigRes.status !== 200){
                file.appendString(studentConfigFailedFilePath,`Failed Student Config API Response,${studentConfigRes.status},${sessionJSON},${studentConfigRes.body}\n`)
                console.log("Student Config Failed API Response: " + studentConfigRes.body)
            }
            else if(studentConfigRes.status === 200){
                file.appendString(studentConfigSuccessFilePath, `Successful Student Config API Response,${studentConfigRes.status},${studentConfigRes.timings.duration}\n`)
                console.log("Student Config Success API Response: " + studentConfigRes.body);

                let headerPing= {
                    'Content-Type': 'application/json',
                    'authority': 'stage-api.10minuteschool.net',
                    'Authorization': `Bearer ${userToken}`
                }
                let pingJson = JSON.stringify({
                    "liveclass_id": sessionData.liveclass_id,
                    "user_id": user_id,
                    "platform": "web",
	                "source": "web"
                })

                let pingRes = http.post(`${baseUrl}/liveclass-user-activity-service/api/v1/user-activity/ping`, pingJson, {
                    headers: headerPing
                });

                if(pingRes.status !== 200){
                    file.appendString(pingFailedFilePath,`Failed Ping API Response,${pingRes.status},${pingJson},${pingRes.body}\n`)
                    console.log("Ping Failed API Response: " + pingRes.body)
                }
                else if(pingRes.status === 200){
                    file.appendString(pingSuccessFilePath, `Successful Ping API Response,${pingRes.status},${pingRes.timings.duration},${pingRes.json().data.is_class_live}\n`)
                }
            }
        }	
    // }

}
