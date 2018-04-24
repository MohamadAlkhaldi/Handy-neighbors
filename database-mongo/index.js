var mongoose = require('mongoose');
mongoose.connect("mongodb://ammarlio:ammarlion123@ds255319.mlab.com:55319/handy-neighbors");

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


  var techSchema = mongoose.Schema({
    username:String,
    password:String,
    phonenumber:Number,
    longitude:String,
    laltitude:String,
    distance:Number,
    services:Array
  })


  var Technitian = mongoose.model('Tecnitian',techSchema)
   
  var save = function(data,callback){
    var user = new Technitian(data)
    user.save(function(err,dataRes){
      if(err){
        callback(err,null)

      }
      callback(null,dataRes)
    })
  }

module.exports.Technitian = Technitian;
module.exports.save = save;




