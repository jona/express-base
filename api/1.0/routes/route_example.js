var express = require('express'),
    router = express.Router();

var routes = {
  index: function(req, res, next) {
    return res.json({success: true});
  }
}

router.get('/', routes.index);

exports = module.exports = router;
