const axios = require('axios');
const { expect } = require('chai');
const {faker} = require('@faker-js/faker');

describe('put api request test', async () => {

    it('should return put user list', async () => {

        const randomName = faker.person.firstName();
        const title = faker.person.jobTitle();
        const res = await axios.put('https://reqres.in/api/users/2',
            {
                "name": randomName,
                "job": title
    });
    console.log(res.data);
    expect(res.data.name).equal(randomName);
    expect(res.data.job).equal(title);
});
});