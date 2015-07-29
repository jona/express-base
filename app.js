var express = require('express'),
    app = express();

// require default initializer
require('./initialize/setup')(app);

// require errors should go last
require('./initialize/errors')(app);

exports = module.exports = app;
