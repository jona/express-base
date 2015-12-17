'use strict';

var config = require('config'),
    logger = require('winston'),
    NullTransport = require('winston-null');

if (config.util.getEnv('NODE_ENV') === 'test') {
  logger.add(NullTransport).remove(logger.transports.Console);
}

exports = module.exports = logger;
