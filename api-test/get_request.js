const axios = require('axios');
const { expect } = require('chai');

describe('get api request test', async () => {

    it('should return user list', async () => {

    const res = await axios.get('https://reqres.in/api/users?page=2');
    console.log(res.data);
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
    });

});
