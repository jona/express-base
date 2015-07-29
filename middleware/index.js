//
// Middleware
//
var config = require('config');

var middlewareOrder = [
  // 'MIDDLEWARE_NAME'
]

exports = module.exports = function(app) {
  middlewareOrder.forEach(function (filename) {
    mw = require(config.get('root') + '/middleware/' + filename + '.js');
    app.use(mw);
  });
};
