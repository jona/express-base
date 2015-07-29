//
// API routes
//

var config = require('config');

// Specify routes and the version that you wish to use
var routes = [
  // Use name and version of route
  {name: 'route_example', version: '1.0'},
]

exports = module.exports = function(app) {
  routes.forEach(function(c) {
    route = require(config.get('root') + '/api/' + c.version  + '/routes/' + c.name + '.js');
    app.use('/api/' + c.version + '/' + c.name, route);
  });
};
