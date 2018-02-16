const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
require('dotenv').config();

chai.use(chaiHttp);

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE || !process.env.API_URL
    || !process.env.AUTH0_CLIENT_ID_1 || !process.env.AUTH0_CLIENT_SECRET_1
    || !process.env.AUTH0_CLIENT_ID_2 || !process.env.AUTH0_CLIENT_SECRET_2
    || !process.env.AUTH0_CLIENT_ID_3 || !process.env.AUTH0_CLIENT_SECRET_3
    || !process.env.AUTH0_CLIENT_ID_4 || !process.env.AUTH0_CLIENT_SECRET_4) {
  throw 'Make sure you have set the variables in your .env file'
}

const apiURL = process.env.API_URL;

const getToken = function(clientId, clientSecret) {
  tokenRequestBody = {
    'client_id': clientId,
    'client_secret': clientSecret,
    'audience': process.env.AUTH0_AUDIENCE,
    'grant_type': 'client_credentials'
  }

  return chai.request('https://' + process.env.AUTH0_DOMAIN)
    .post('/oauth/token')
    .set('Content-Type', 'application/json')
    .send(tokenRequestBody)
}

describe('Request without authorization header field', function() {
  it('GET /api/public return 200 OK', function(done) {
    chai.request(apiURL)
    .get('/api/public')
    .end(function(err, res) {
      res.should.have.to.be.json;
      res.should.have.status(404);
    });
  });
});
