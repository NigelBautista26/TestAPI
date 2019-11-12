const Base = require('./../pages/base')
const expect = require('chai').expect
const chai = require('chai')
const chaiExclude = require('chai-exclude')
const faker = require('faker/locale/en_GB')

chai.use(chaiExclude)

let randomFullName = faker.name.firstName() + ' ' + faker.name.lastName()
let riskLevel = Math.floor(Math.random() * 5) + 1
let yob = faker.date.between('1970', '1985').getFullYear()

const responseFixture = {
    "message": "Entity created successfully!",
    "ok": true
}
const politicianToAdd = {
    "name": randomFullName,
    "country": "UK",
    "yob": yob,
    "position": "Prime Minister",
    "risk": riskLevel
}
const headerToken = {
    'Content-Type': 'application/json'
}

class Add {

    async addPolitician () {
        console.log('.......................Add New Politician.......................')
        let response = await Base.baseUrl // Access the API...
        .post(Base.APIEndpoint) // send a post request...
        .send(politicianToAdd) // JSON body...
        .set(headerToken) // set the header token...
        expect(response.status).to.equal(201)  // asserting the status code from the API response while also asserting the correct Content Type...
        expect('Content-Type', /json/)
        expect(response.body).excluding('id').to.deep.equal(responseFixture) // to assert that the response body from the api is the same as expected, but with an exception of properties that generates random values...
        expect(response.body.id).to.be.a('string') // seperately assert the ID property that generates a random data by asserting its data type...
        console.log(politicianToAdd)
    } 

}

module.exports = new Add()