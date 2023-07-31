const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const fs = require('fs')
const postResData = require('D:/Personnel/misc/Automation/axios_APITestAutomation_mocha/api-test/response-data/post_response_data.json')

describe('Write data to json file', async () => {

    it('should write data to json file', async () => {

        const randomName = faker.person.firstName();
        const title = faker.person.jobTitle();
        const res = await axios.patch('https://reqres.in/api/users/2',
            {
                "name": randomName
            });
        console.log(res.data);
        expect(res.data.name).equal(randomName);

        postResData.name = res.data.name;

fs.writeFileSync('D:/Personnel/misc/Automation/axios_APITestAutomation_mocha/api-test/response-data/post_response_data.json',JSON.stringify(postResData));
    });
});