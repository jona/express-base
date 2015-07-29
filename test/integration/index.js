var nock = require('nock'),
  config = require('config'),
  setup = require('../setup'),
  request = require('supertest'),
  express = require('express'),
  authFixtures = require('../fixtures/auth_fixture'),
  app = require('../../app');

describe('/', function(){

  describe('when request', function() {
    it('should return 200', function(done){
      nock(process.env.AUTH_HOST)
        .filteringPath(function(path){
          return '/';
        })
        .get("/")
        .reply(200, authFixtures.validateTokenResponse);

      request(app)
        .get('/')
        .end(function(err, res){
          expect(res.statusCode).to.eql(200);
          done();
        });
    });
  });

});
