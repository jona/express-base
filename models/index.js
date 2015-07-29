//
// Models
//
//

var config = require('config');

var models = [];

exports = module.exports = function(app) {
  models.forEach(function (filename) {
    model= require(config.get('root') + '/models/' + filename + '.js');
    app.use(model);
  });
};
