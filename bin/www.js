var config = require('config'),
    app = require('../app');

app.set('port', config.get('port'));

var server = app.listen(app.get('port'), function() {
  console.log(config.get('app.name') + ' now listening on port ' + server.address().port);
});
