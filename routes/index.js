var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/partials/:filename', function (req, res) {
  var filename = req.params.filename;
  if(!filename) return;  // might want to change this
  res.render("partials/" + filename );
});

module.exports = router;
