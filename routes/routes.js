var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Send the static file instead of rendering a view
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

module.exports = router;
