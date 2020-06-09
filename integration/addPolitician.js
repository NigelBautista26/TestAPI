const base = require('./base')
const expect = require('chai').expect
const chai = require('chai')
const chaiExclude = require('chai-exclude')
const addPoliticianResponseSchema = require('../schemas/addPoliticianResponse.json')
const addPoliticianData = require('../fixtures/addPoliticianData.json')

chai.use(chaiExclude)

class Add {

    async addPolitician () {
        console.log('.......................Add New Politician.......................')
        let response = await base.baseUrl // Access the API...
        .post(base.apiEndpoint) // send a post request...      
        .send(addPoliticianData[Math.floor(Math.random() * addPoliticianData.length)]) // JSON body...
        console.log(response.body)
        expect(response.status).to.equal(201)  // asserting the status code from the API response while also asserting the correct Content Type...
        expect(response.header["content-type"]).to.equal('application/json') // asserts the response content type...
        expect(response.body).excluding('id').to.deep.equal(addPoliticianResponseSchema) // to assert that the response body from the api is the same as expected, but with an exception of properties that generates random values...
        expect(response.body.id).to.be.a('string') // seperately assert the ID property that generates a random data by asserting its data type...
    } 

}

module.exports = new Add()