const supertest = require('supertest')
const expect = require('chai').expect
const assert = require('chai').assert
const chai = require('chai')
const chaiExclude = require('chai-exclude')
const politicianID = '5d9c99290f069811f4d568ed'
const faker = require('faker/locale/en_GB')

chai.use(chaiExclude)

let randomFullName = faker.name.firstName() + ' ' + faker.name.lastName()
let riskLevel = Math.floor(Math.random() * 6) + 1
let response
let politicians

const responseFixture = {
    "id": "5d966d9c0f069810bebe40b9",
    "message": "Entity created successfully!",
    "ok": true
}
const politicianToAdd = {
    "name": randomFullName,
    "country": "UK",
    "yob": "1968-07-26",
    "position": "Prime Minister",
    "risk": riskLevel
}
const headerToken = {
      'Content-Type': 'application/json'
    }

class Base {

        get baseUrl() { return supertest("http://ec2-34-250-139-60.eu-west-1") }
        get APIEndpoint() { return ".compute.amazonaws.com/peps " }
        get APIEndpointWithID() { return ".compute.amazonaws.com/peps/" + politicianID }

        assertStatusCodeAndContentType (statusCode) {
            expect(response.status).to.equal(statusCode)
            expect('Content-Type', /json/)
        }

        async addPolitician () {
            console.log('.......................Add New Politician.......................')
            response = await this.baseUrl // Access the API...
            .post(this.APIEndpoint) // send a post request...
            .send(politicianToAdd) // JSON body...
            .set(headerToken) // set the header token...
            this.assertStatusCodeAndContentType(201) // asserting the status code from the API response while also asserting the correct Content Type...
            expect(response.body).excluding('id').to.deep.equal(responseFixture) // to assert that the response body from the api is the same as expected, but with an exception of properties that generates random values...
            expect(response.body.id).to.be.a('string') // seperately assert the ID property that generates a random data by asserting its data type...
            console.log(politicianToAdd)
        } 
        async listPoliticians () {
            console.log('....................List the last 5 Politicians added.......................')
            response = await this.baseUrl // Access the API...
            .get(this.APIEndpoint) // send a post request...
            .set(headerToken) // set the header token...
            politicians = []
            for(let i=0; i<5; i++) {
                politicians.push(response.body[i].createdAt)   
                 console.log(response.body[i])      
            }
            this.assertStatusCodeAndContentType(200) // asserting the status code from the API response while also asserting the correct Content Type...
        } 
        async DisplayPoliticianInfo () {
            console.log('............................Display a Politicians information based on ID..............................')
            response = await this.baseUrl // Access the API...
            .get(this.APIEndpointWithID) // send a post request...
            .set(headerToken) // set the header token...
            console.log(response.body)
            this.assertStatusCodeAndContentType(200) // asserting the status code from the API response while also asserting the correct Content Type...
        }
        
    }

module.exports = new Base()