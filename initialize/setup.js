var express = require('express'),
    favicon = require('serve-favicon'),
    expressWinston = require('express-winston'),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    config = require('config'),
    logger = require('../lib/logger'),
    session = require('express-session');

function setup(app) {
  // setup sessions
  require('../initialize/sessions')(app);

  if(config.util.getEnv('NODE_ENV') != 'test'){
    app.use(favicon(config.get('root') + '/public/favicon.ico'));
  }

  // Use express winston logger
  if (['test','development'].indexOf(config.util.getEnv('NODE_ENV')) != -1) {
    app.use(expressWinston.logger({
      winstonInstance: logger,
      ignoreRoute: function (req, res) {
        return false;
      }
    }));
  }

  // Use body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Compress all requests
  app.use(compress());

  // Use public directory for static files
  app.use(express.static(config.get('root') + '/public'));

  // Method override
  app.use(methodOverride());

  // Require middleware
  // /middleware/index.js contains a list of all middleware
  // This will include all middleware found in the index.js file
  require(config.get('root') + '/middleware/index.js')(app);

  // Require models
  // /app/models/index.js contains a list of all models
  // This will include all models found in the index.js file
  require(config.get('root') + '/models/index.js')(app);

  // Require controllers
  // /app/controllers/index.js contains a list of all controllers
  // This will include all controllers found in the index.js file
  require(config.get('root') + '/api/index.js')(app);

  //
  // Configure logger error handling
  //
  if (['test','development'].indexOf(config.util.getEnv('NODE_ENV')) != -1) {
    app.use(expressWinston.errorLogger({
      winstonInstance: logger
    }));
  }
};

exports = module.exports = setup;
