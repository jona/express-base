var setup = require('../../setup'),
    request = require('supertest'),
    app = require('../../../app');

describe('/', function(){

  describe('when request', function() {
    it('should return 200', function(done){
      request(app)
        .get('/api/1.0/route_example')
        .end(function(err, res){
          expect(res.statusCode).to.eql(200);
          done();
        });
    });
  });

});
