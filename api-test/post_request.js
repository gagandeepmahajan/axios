const axios = require('axios');
const { expect } = require('chai');
const {faker} = require('@faker-js/faker');

describe('post api request test', async () => {

    it('should return post user list', async () => {

        const randomName = faker.person.firstName();
        const title = faker.person.jobTitle();
        const res = await axios.post('https://reqres.in/api/users',
            {
                "name": randomName,
                "job": title
    });
    console.log(res.data);
    expect(res.data.name).equal(randomName);
    expect(res.data.job).equal(title);
});
});