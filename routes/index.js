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

router.get('/list', function(req, res) {
  var db = req.db;
  var collection = db.get('fruit');
  collection.find({},{},function(e,docs){
      res.render('list', {
          "list" : docs
      });
  });
});

router.get('/new', function(req, res) {
    res.render('new', { title: 'Add New Fruit' });
});

router.post('/addfruit', function(req, res) {
    var db = req.db;

    var fruitName = req.body.name;
    var fruitColor = req.body.color;

    var collection = db.get('fruit');

    collection.insert({
        "name" : fruitName,
        "color" : fruitColor
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("list");
        }
    });
});

router.delete('/delete/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('fruit');
    var fruitToDelete = req.params.id;
    collection.remove({ '_id' : fruitToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;
