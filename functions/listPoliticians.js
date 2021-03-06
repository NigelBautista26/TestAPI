const base = require('./base')
const expect = require('chai').expect

class List {

        async listPoliticians () {
            console.log('....................List the last 5 Politicians added.......................')
            let response = await base.baseUrl // Access the API...
            .get(base.apiEndpoint) // send a get request...
            let politicians = []
            for(let i=0; i<5; i++) {
                politicians.push(response.body[i].createdAt)   
                console.log(response.body[i])      
            }
            expect(response.header["content-type"]).to.equal('application/json') // asserts the response content type...
            expect(response.status).to.equal(200) // asserting the status code from the API response while also asserting the correct Content Type...
        } 

    }

module.exports = new List()
