const base = require('./../pages/base')
const expect = require('chai').expect

class Display {

        async DisplayPoliticianInfo () {
            console.log('............................Display a Politicians information based on ID..............................')
            let response = await base.baseUrl // Access the API...
            .get(base.APIEndpointWithID) // send a post request...
            // .set(headerToken) // set the header token...
            console.log(response.body)
            expect(response.status).to.equal(200) // asserting the status code from the API response while also asserting the correct Content Type...
        }

    }

module.exports = new Display()
