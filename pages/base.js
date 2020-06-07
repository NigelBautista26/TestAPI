const supertest = require('supertest')

const politicianID = '5d9c99290f069811f4d568ed'

class Base {

        get baseUrl() { return supertest("http://ec2-34-250-139-60.eu-west-1") }
        get apiEndpoint() { return ".compute.amazonaws.com/peps" }
        get apiEndpointWithID() { return ".compute.amazonaws.com/peps/" + politicianID }
        
    }

module.exports = new Base()
