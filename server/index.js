var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');
var app = express();
//----------------------------------------------------------
app.use(express.static(__dirname + '/../react-client/dist'));
//----------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.post('/signup', function (req, res) {
//   var data=req.body;
//   db.save({req.body.username, req.body.password},function(err,data){
//   		if(err){
//   			console.log(err)
//   		}
//   		res.send(data);

//   })
  
// });

app.post('/', function (req, res) {
  var data=req.body;
  db.findOne(data.username,function(err,datares){
  	if(err){
  		res.send(err)
  	}
  	res.redirect('index');
  })
 	
  
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

