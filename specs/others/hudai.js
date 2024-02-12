// Import the necessary k6 and faker libraries
import http from 'k6/http';
import { check } from 'k6';
import file from 'k6/x/file';

//define filepath
const failedResponseFilePath = ''
const successResponseFilePath = ''

const baseUrl = 'https://fakestoreapi.com/products';

export let options = {
	iterations: 5,
	vus: 1,
    duration: '6s',
};

export function setup() {
    //clear all the previous data
    file.clearFile(path)

    //Write string to file
    file.writeString(path, 'First line.\n');

  }

export default function() {

    let i = __ITER;
    let headers = {
            'Content-Type': 'application/json',
            'user-agent': 'ishakhttp',
        }

        let getProduct = http.get(`${baseUrl}/${i}`, {
            headers: headers
        });

        check(getProduct, {
            'status is 200': (r) => r.status === 200,
            'response time < 200ms': (r) => r.timings.duration < 200
        });

        if (getProduct.status !== 200) {
            file.appendString(failedResponseFilePath,`Failed User Exist API Response,${getProduct.status},${getProduct.timings.duration},${userExistsJSON},${getProduct.body}\n`)
            console.log("User Exist Failed API Response: "+ getProduct.status + getProduct.timings.duration +  + getProduct.body);
        }
        else if(getProduct.json().data.exist === true){
            file.appendString(successResponseFilePath, `Successful User Exist API Response,${getProduct.status},${getProduct.timings.duration},${getProduct.body}\n`)
            
        }

}