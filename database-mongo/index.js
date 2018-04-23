var mongoose = require('mongoose');
mongoose.connect("mongodb://ammarlio:ammarlion123@ds115131.mlab.com:15131/ammar");

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// var userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   phonenumber:Number,
//   email:String
// });

var techSchema = mongoose.Schema({
  username:String,
  password:String,
  phonenumber:Number,
  longitude:String,
  laltitude:String,
  distance:Number,
  services:Array
})

// var User = mongoose.model('User', userSchema);
var Technitian = mongoose.model('Tecnitian',techSchema)
// var selectAll = function(callback) {
//   User.find({}, function(err, Users) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, Users);
//     }
//   });
// };
// var noor = new User({username:'noor',password:'noor',phonenumber:12345678})
//    noor.save(function(err){
//     if(err){
//     console.log(err)

//     }
//   })



// var x = 0  
var save = function(data,callback){
  var user = new Technitian(data)
  user.save(function(err,dataRes){
    if(err){
      callback(err,null)

    }
    callback(null,dataRes)
  })
}

// module.exports.selectAll = selectAll;
module.exports.Technitian = Technitian;
module.exports.save = save;




