import { expect } from "@playwright/test";

class APIAssertion {

   async postAPIAssertion (response, payload){
      const body = await response.json();

      expect(response.status()).toBe(201)
      expect(body.name).toBe(payload.name)
      expect(body.job).toBe(payload.job)

      expect(body.id).toBeTruthy();
      expect(body.createdAt).toBeTruthy();

   }

   async getAPIAssertion(response, payload){
      const body = await response.json();
      expect(body.data.id).toBeTruthy();
      expect(body.data.email).toBeTruthy();
      expect(body.data.first_name).toBeTruthy();
      expect(body.data.last_name).toBeTruthy();

   }
}

export default new APIAssertion();