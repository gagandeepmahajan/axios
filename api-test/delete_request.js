const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');

describe('delete api request test', async () => {

    it('should return delete user list', async () => {

        const res = await axios.delete('https://reqres.in/api/users/2');
        console.log(res.data);
        expect(res.status).equal(204);
    });
    it('should return delete user list', async () => {

        const res = await axios.delete('https://reqres.in/api/users/2');
        console.log(res.data);
        expect(res.status).equal(200);
    });

    // it.skip('should return delete user list to check skip', async () => {

    //     const res = await axios.delete('https://reqres.in/api/users/2');
    //     console.log(res.data);
    //     expect(res.status).equal(204);
    // });

    //to check to single test only

    // it.only('should return delete user list to check only', async () => {

    //     const res = await axios.delete('https://reqres.in/api/users/2');
    //     console.log(res.data);
    //     expect(res.status).equal(204);
    // });
});