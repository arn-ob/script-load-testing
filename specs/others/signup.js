// Import the necessary k6 and faker libraries
import http from 'k6/http';
import { check } from 'k6';
import { userDataPayload } from '/Users/farhanlabibbrinto/Documents/Load_Test/payload.js'; 
import file from 'k6/x/file';

const userExistsFailedFilePath = './logsCSV/signup/userExistsFailed.csv';
const userExistSuccessFilePath = './logsCSV/signup/userExistSuccess.csv';
const verifyOTPFailedFilePath = './logsCSV/signup/verifyOTPFailed.csv';
const signupFailedFilePath = './logsCSV/signup/signupFailed.csv';
const signupSuccessFilePath = './logsCSV/signup/signupSuccess2.csv';

//Define the stages for the test
export let options = {
	//executor: 'shared-iterations',
	// iterations: 100,
	// vus: 100,
	stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "10s", target: 100 },
		{ duration: "10s", target: 100 },
      ],
};

// Set the base URL of the API
const baseUrl = 'https://stage-api.10minuteschool.net/auth';

export default function() {

	//------------Payload Data----------------//
	
	const userData = userDataPayload();
	const userExistsJSON = JSON.stringify({
		"username": userData.username,
		"loginType": "email",
	});

	const verifyJSON = JSON.stringify({
		"username": userData.username,
		"otp": "1331"
	});

	const signupJSON = JSON.stringify({
		"email": userData.username,
		"name": userData.name,
		"otpToken": userData.otpToken,
		"password": userData.password,
		"type": "email"
	});




//-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
		'user-agent': 'ishakhttp',
	}
//-----------------------User Exist API-----------------------//
	let userExistRes = http.post(`${baseUrl}/v1/userExists`, userExistsJSON, {
		headers: headers
	});

	check(userExistRes, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

	if (userExistRes.status !== 200) {
		file.appendString(userExistsFailedFilePath,`Failed User Exist API Response,${userExistRes.status},${userExistRes.timings.duration},${userExistsJSON},${userExistRes.body}\n`)
		console.log("User Exist Failed API Response: " +userExistRes.status+ userExistRes.body);
	}
	else if(userExistRes.status === 200 && (userExistRes.json().data.exist === false)){
		file.appendString(userExistSuccessFilePath, `Successful User Exist API Response,${userExistRes.status},${userExistRes.body}\n`)
		//-----------------------Verify API-----------------------//
		let verifyOTPres = http.post(`${baseUrl}/v1/verifyOTP`, verifyJSON, {
			headers: headers});
			if(verifyOTPres.status !== 200){
				console.log("Verify OTP Failed API Response: " + verifyOTPres.status + verifyOTPres.timings.duration);
				file.appendString(verifyOTPFailedFilePath,`Failed Verify OTP API Response,${verifyOTPres.status},${verifyOTPres.timings.duration},${verifyOTPres.body}\n`)
			}
			else if(verifyOTPres.json().status === "OK"){
				//-----------------------SignUP API-----------------------//
				let signUpRes = http.post(`${baseUrl}/v1/signup`, signupJSON, {
					headers: headers});
					if(signUpRes.status !== 200){
						console.log("Sign Up API Failed Response: " + signUpRes.status);
						file.appendString(signupFailedFilePath,`Failed Sign Up API Response,${signUpRes.status},${signUpRes.body}\n`)
						console.log("Sign Up API Response: " + signUpRes.status + signUpRes.timings.duration);
					}
					else{
						file.appendString(signupSuccessFilePath,`Successful Sign Up API Response,${signUpRes.status},${signUpRes.json().data.user_info.id},${userData.username},${signUpRes.json().data.token.access_token}\n`)
						console.log("Sign Up API Successful Response: " + signUpRes.status + signUpRes.timings.duration);
					}
			}
	}
}
