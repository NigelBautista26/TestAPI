const base = require('./base')
const expect = require('chai').expect
const searchPoliticianData = require('../fixtures/searchPoliticianData.json')


class Search {

        async searchPoliticianInfo () {
            console.log('............................Search a Politicians information based on ID..............................')
            let response = await base.baseUrl // Access the API...
            .get(base.apiEndpointWithID) // send a get request...
            expect(response.status).to.equal(200) // asserting the status code from the API response while also asserting the correct Content Type...
            expect(response.body).to.deep.equal(searchPoliticianData)
            console.log(response.body)
            expect(response.header["content-type"]).to.equal('application/json') // asserts the response content type...
        }

    }

module.exports = new Search()
