import http from 'k6/http';
import { sleep,check } from 'k6';


const baseUrl = 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products';
// const baseUrl = 'https://stage-api.10minuteschool.net/catalog-service/api/v2/products'



let liveClassTokenData = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk0ZGE2MTk4NmI2OGJhNjI1MWI4MyIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiVHlzaGF3bjQ2QHlhaG9vLmNvbSIsImxvZ2luX3R5cGUiOiJlbWFpbCIsImxvZ2luX3NvdXJjZSI6IjEwbWluc2Nob29sIiwibG9naW5fdGFyZ2V0IjoiIiwibG9naW5fYXMiOjAsIm5hbWUiOiJNYXJ0aW5hIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0YmY5Mjg3ODI1NTYwY2I3ODQzNmI2OCIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGJmOTI4NzgyNTU2MGNiNzg0MzZiNjgiLCJkZXZpY2VfbmFtZSI6ImlzaGFraHR0cCAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiIiLCJvcmlnaW4iOiJ1bmtub3duIiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjMtMDMtMjFUMDY6MjQ6MzguOTQ5WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2OTAzMDUyODd9.Tq0X1qXA1Vm13X8QCsHMgSKeDZ-95erBkbvp0aKbFq8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk0ZGE3MTk4NmI2OGJhNjI1MWI4OCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiVHdpbGFfR2VyaG9sZDIwQGdtYWlsLmNvbSIsImxvZ2luX3R5cGUiOiJlbWFpbCIsImxvZ2luX3NvdXJjZSI6IjEwbWluc2Nob29sIiwibG9naW5fdGFyZ2V0IjoiIiwibG9naW5fYXMiOjAsIm5hbWUiOiJEdXN0eSIsImlzX2FjdGl2ZSI6ZmFsc2UsInZlcmlmaWVkIjp0cnVlLCJkZXZpY2VfaWQiOiI2NGJmOTI4NzgyNTU2MGNiNzg0MzZiNmEiLCJkZXZpY2UiOnsiZGV2aWNlX2lkIjoiNjRiZjkyODc4MjU1NjBjYjc4NDM2YjZhIiwiZGV2aWNlX25hbWUiOiJpc2hha2h0dHAgIiwiZGV2aWNlX3R5cGUiOiJicm93c2VyIiwiZGV2aWNlX29zIjoiIiwib3JpZ2luIjoidW5rbm93biIsImlwX2FkZHJlc3MiOiIxMTguNjcuMjIwLjM4In0sInVzZXJfc3RhdHVzIjoiIiwiZGF0ZV9qb2luZWQiOiIyMDIzLTAzLTIxVDA2OjI0OjM5LjE2MVoiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwMzA1Mjg3fQ.-q4AxxmsH7z3lZTXQ0UOLp4oi44Jfbnmdi_jWBaz5dA',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk0ZGE3MTk4NmI2OGJhNjI1MWI4YiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiU2FnZTY3QGdtYWlsLmNvbSIsImxvZ2luX3R5cGUiOiJlbWFpbCIsImxvZ2luX3NvdXJjZSI6IjEwbWluc2Nob29sIiwibG9naW5fdGFyZ2V0IjoiIiwibG9naW5fYXMiOjAsIm5hbWUiOiJEZXZvbiIsImlzX2FjdGl2ZSI6ZmFsc2UsInZlcmlmaWVkIjp0cnVlLCJkZXZpY2VfaWQiOiI2NGJmOTI4OGU5ZTY3ZDIyZTllOWVlMDAiLCJkZXZpY2UiOnsiZGV2aWNlX2lkIjoiNjRiZjkyODhlOWU2N2QyMmU5ZTllZTAwIiwiZGV2aWNlX25hbWUiOiJpc2hha2h0dHAgIiwiZGV2aWNlX3R5cGUiOiJicm93c2VyIiwiZGV2aWNlX29zIjoiIiwib3JpZ2luIjoidW5rbm93biIsImlwX2FkZHJlc3MiOiIxMTguNjcuMjIwLjM4In0sInVzZXJfc3RhdHVzIjoiIiwiZGF0ZV9qb2luZWQiOiIyMDIzLTAzLTIxVDA2OjI0OjM5LjU1OVoiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwMzA1Mjg4fQ.M9reyD3g7-WPxtKraYppHQenHhK0L3kXJ67Irg2VOq0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk0ZGE3MTk4NmI2OGJhNjI1MWI4YyIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiTHVlMzlAeWFob28uY29tIiwibG9naW5fdHlwZSI6ImVtYWlsIiwibG9naW5fc291cmNlIjoiMTBtaW5zY2hvb2wiLCJsb2dpbl90YXJnZXQiOiIiLCJsb2dpbl9hcyI6MCwibmFtZSI6IlZpbmNlbnpvIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0YmY5Mjg4ZTllNjdkMjJlOWU5ZWUwMiIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGJmOTI4OGU5ZTY3ZDIyZTllOWVlMDIiLCJkZXZpY2VfbmFtZSI6ImlzaGFraHR0cCAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiIiLCJvcmlnaW4iOiJ1bmtub3duIiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjMtMDMtMjFUMDY6MjQ6MzkuNjQ4WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2OTAzMDUyODh9.C9p6zW7y0jCjdOXC4W8BT-JT9hlWyN_sqhCxVqxPC9A',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk0ZGE3MTk4NmI2OGJhNjI1MWI4ZCIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiRWxpYW5lNzhAaG90bWFpbC5jb20iLCJsb2dpbl90eXBlIjoiZW1haWwiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJpIiwiaXNfYWN0aXZlIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImRldmljZV9pZCI6IjY0YmY5Mjg4ODI1NTYwY2I3ODQzNmI2YyIsImRldmljZSI6eyJkZXZpY2VfaWQiOiI2NGJmOTI4ODgyNTU2MGNiNzg0MzZiNmMiLCJkZXZpY2VfbmFtZSI6ImlzaGFraHR0cCAiLCJkZXZpY2VfdHlwZSI6ImJyb3dzZXIiLCJkZXZpY2Vfb3MiOiIiLCJvcmlnaW4iOiJ1bmtub3duIiwiaXBfYWRkcmVzcyI6IjExOC42Ny4yMjAuMzgifSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjMtMDMtMjFUMDY6MjQ6MzkuNjVaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY5MDMwNTI4OH0.s_JFcOMVT4NmkbnyHxL7uxT2S83_qU896XiJrCNMreE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk0ZGE4MTk4NmI2OGJhNjI1MWI5OSIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6IiIsImVtYWlsIjoiUmFtaXJvNTRAZ21haWwuY29tIiwibG9naW5fdHlwZSI6ImVtYWlsIiwibG9naW5fc291cmNlIjoiMTBtaW5zY2hvb2wiLCJsb2dpbl90YXJnZXQiOiIiLCJsb2dpbl9hcyI6MCwibmFtZSI6IkNyaXN0b3BoZXIiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjRiZjkyODhlOWU2N2QyMmU5ZTllZTA0IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY0YmY5Mjg4ZTllNjdkMjJlOWU5ZWUwNCIsImRldmljZV9uYW1lIjoiaXNoYWtodHRwICIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IiIsIm9yaWdpbiI6InVua25vd24iLCJpcF9hZGRyZXNzIjoiMTE4LjY3LjIyMC4zOCJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMy0wMy0yMVQwNjoyNDo0MC4yNVoiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwMzA1Mjg4fQ.XAtkJMkcx0AnjBJVQDyEbm_7GhLoKfT-j3-ylc9ovhQ'
]

let slug = [
    // 'negotiation-skills',
    // 'fmcg-retail-management',
    // 'robotics-for-beginners',
    // 'mobile-photography',
    // 'hsc-english-crash-course',
    // 'ocd-by-l',
    // 'hsc-24',
    'communication-secrets',
    'communication-secrets',
    'communication-secrets',
    'communication-secrets',
    'communication-secrets',
    'communication-secrets',
    'communication-secrets',
    // 'wedding-photography',
    // 'bundle-for-catalog',
    // 'graphic-design-with-mobile',
    // 'personal-fitness',
    // '44th-bcs-final-model-test',
    // 'ielts-mock-solutions',
    // 'adobe-illustrator',
    // 'microsoft-word-course'
]

export let options = {
	//executor: 'shared-iterations',
	// iterations: 1,
	// vus: 1,
    // duration: '20s',
    stages: [
        // Ramp up to 1 VUs for 5 second
        { 
            duration: "1s",
            target: 5000,
            gracefulStop: "60s"
        },
      ],
};


export default function() {
    
        let random = Math.floor(Math.random() * 5)
        let userToken = liveClassTokenData[random];
        let slugURL = slug[random];
        //-----------------------Headers-----------------------//
	let headers = {
		'Content-Type': 'application/json',
        'X-TENMS-SOURCE-LANG': 'bn',
        'authorization': `Bearer ${userToken}`
	}
    //-----------------------Order API-----------------------//
    let pdpResponse = http.get(`${baseUrl}/${slugURL}/variants`, {
        headers: headers
    });

    check(pdpResponse, {
		'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200
	});

    if(pdpResponse.status !== 200){
        // file.appendString(commentFailedPath,`Failed Comment API Response,${pdpResponse.status},${auth_id},${pdpResponse.body}\n`)
        console.log(`Comment Failed API Response:, Slug: ${slugURL}, ${pdpResponse.body}`);
    }
    else if(pdpResponse.status === 200){
        // file.appendString(commentSuccessPath,`Success Comment API Response,${pdpResponse.status},${pdpResponse.timings.duration},${auth_id}\n`)
        // console.log(`Comment Success API Response:, ${pdpResponse.status}`);
        console.log(`Comment Success API Duration:, ${pdpResponse.timings.duration}, Slug: ${slugURL}`);
    }

    // }	

}


