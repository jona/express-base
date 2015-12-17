'use strict';

var config = require('config'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    appName = 'APP_NAME';

exports = module.exports = {
  root: rootPath,
  app: {
    name: appName
  },
  port: 0,
  redis: {
    host: '',
    port: 0
  }
};
