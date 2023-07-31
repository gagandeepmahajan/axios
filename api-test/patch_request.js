const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');

describe('patch api request test', async () => {

    it('should return patch user list', async () => {

        const randomName = faker.person.firstName();
        const title = faker.person.jobTitle();
        const res = await axios.patch('https://reqres.in/api/users/2',
            {
                "name": randomName
            });
        console.log(res.data);
        expect(res.data.name).equal(randomName);
    });
});