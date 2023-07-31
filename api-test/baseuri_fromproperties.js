const axios = require('axios');
const { expect } = require('chai');
const propertiesReader = require('properties-reader');
var properties = propertiesReader('config/env.properties');

describe('get api request test reading properties file', async () => {

    it.only('should return user list using properties file', async () => {

    const res = await axios.get(properties.get('baseuri') + '/users?page=2');
    console.log(res.data);
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
    });

});
