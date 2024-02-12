// import { default as firstScenario } from './login.js';
// import { default as secondScenario } from './enroll.js';

// export const options = {

//   scenarios: {
//     scriptAuthenticatedScenario: {
//       exec: 'myFirstScenario',
//       executor: 'constant-vus',
//       vus: 1,
//       duration: '5s',
//     },
//     scriptUnauthenticatedScenario: {
//       exec: 'mySecondScenario',
//       executor: 'constant-vus',
//       vus: 1,
//       duration: '5s',
//     },
//   },
// };

// export function myFirstScenario() {
//   firstScenario();
// }

// export function mySecondScenario() {
//   secondScenario();
// }

import { default as firstScenario } from './login.js';
import { default as secondScenario } from './enroll.js';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    scriptAuthenticatedScenario: {
      exec: 'myFirstScenario',
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 10,
      maxDuration: '30s',
    //   startVUs: 0,
    //   stages: [
    //     { duration: '5s', target: 1 }, // ramp up to 1 VU
    //     { duration: '5s', target: 1 }, // stay at 1 VU for 5s
    //     { duration: '5s', target: 0 }, // ramp down to 0 VUs
    //   ],
    },
    scriptUnauthenticatedScenario: {
      exec: 'mySecondScenario',
    //   executor: 'ramping-vus',
    executor: 'per-vu-iterations',
    vus: 1,
    iterations: 10,
    maxDuration: '30s',

    //   startVUs: 0,
    //   stages: [
    //     { duration: '30s', target: 0 }, // stay at 0 VUs for 15s
    //     { duration: '5s', target: 1 }, // ramp up to 1 VU
    //     { duration: '5s', target: 1 }, // stay at 1 VU for 5s
    //     { duration: '5s', target: 0 }, // ramp down to 0 VUs
    //   ],
    },
  },
};

export function myFirstScenario() {
  firstScenario();
}

export function mySecondScenario() {
    sleep (30);
  secondScenario();
}
