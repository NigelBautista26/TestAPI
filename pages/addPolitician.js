const base = require('./../pages/base')
const expect = require('chai').expect
const chai = require('chai')
const chaiExclude = require('chai-exclude')
// const faker = require('faker/locale/en_GB')
const addPoliticianSchema = require('./../schemas/addPolitician.json')
const addPoliticianData = require('./../fixtures/addPoliticianData.json')

chai.use(chaiExclude)
// let randomFullName = faker.name.firstName() + ' ' + faker.name.lastName()
// let riskLevel = Math.floor(Math.random() * 5) + 1
// let yob = faker.date.between('1970', '1985').getFullYear()

// const politicianToAdd = {
//     "name": randomFullName,
//     "country": "UK",
//     "yob": yob,
//     "position": "Prime Minister",
//     "risk": riskLevel
// }

class Add {

    async addPolitician () {
        console.log('.......................Add New Politician.......................')
        let response = await base.baseUrl // Access the API...
        .post(base.apiEndpoint) // send a post request...
        .send(addPoliticianData) // JSON body...
        // .set(headerToken) // set the header token if needed...
        console.log(response.body)
        expect(response.status).to.equal(201)  // asserting the status code from the API response while also asserting the correct Content Type...
        expect(response.header["content-type"]).to.equal('application/json') // asserts the response content type...
        expect(response.body).excluding('id').to.deep.equal(addPoliticianSchema) // to assert that the response body from the api is the same as expected, but with an exception of properties that generates random values...
        expect(response.body.id).to.be.a('string') // seperately assert the ID property that generates a random data by asserting its data type...
    } 

}

module.exports = new Add()