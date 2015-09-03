var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.send('render sem view por get');
});

router.post('/', function(req, res){
  var name = req.body.name;
  res.send('render sem view por post. Name: ' + name);
});

router.get('/find/:text', function(req, res){
  var text = req.params.text;
  res.send('param get url: ' + text);
});

module.exports = router;
