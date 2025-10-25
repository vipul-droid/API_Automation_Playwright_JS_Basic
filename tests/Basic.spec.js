import { test, expect } from '@playwright/test';
import { endPoint } from '../utility/apiEndPoints';
const APIAssertion = require('../utility/assertionUtils')
const testUsers = require('../Data/testData.json')



test.describe("CRUD Operation", () =>{
    const payload = testUsers[0];
    const base_URL = endPoint.BASE_URL;

    testUsers.forEach((payload) =>{
        test("Post API", async ({request})=>{
            const response = await request.post(`${base_URL}/users`, {
                data:payload,
                headers: {
                    "x-api-key" : "reqres-free-v1",
                    "Content-Type": "application/json",
                    "accept" : "application/json"
                }
            })

            const body = await response.json();

            await APIAssertion.postAPIAssertion(response,payload);

        })
    })

    

    test("Get API", async({request})=>{
        const response = await request.get(`${base_URL}/users/2`, {
            headers: {
                "x-api-key" : "reqres-free-v1",
            }
        })

        await APIAssertion.getAPIAssertion(response, payload);
    })

})

