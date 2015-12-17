process.env.NODE_ENV = 'test';

var nock = require('nock'),
    chai = require('chai'),
    sinon = require('sinon'),
    url = require('url');

global.expect = chai.expect;

var sandbox = sinon.sandbox.create();

beforeEach(function() {
  nock.disableNetConnect();
  nock.enableNetConnect({
    test: function(host) {
      var validHosts = [
        '127.0.0.1'
      ];
      var hostname = host.split(':')[0];

      return validHosts.indexOf(hostname) !== -1;
    }
  });
});

afterEach(function() {
  sandbox.restore();
  nock.cleanAll();
  nock.enableNetConnect();
});

exports.sandbox = sandbox;
