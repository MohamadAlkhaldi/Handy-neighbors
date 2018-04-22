var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');
var app = express();
var bcrypt = require('bcrypt')
var saltRounds = 10
//----------------------------------------------------------
app.use(express.static(__dirname + '/../react-client/dist'));
//----------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//blabla

app.post('/signin', function (req, res) {
  var username = req.body.username;
  var pass = req.body.password;

  db.Technitian.findOne({username:username},function(err,data){
    if(err){
      console.log(err)
    }
    bcrypt.compare(pass,data.password,function(err,isMatch){
      if(isMatch){
        console.log('access valid',isMatch)
        
      }
      else{
        console.log(err)
      }
      

    })
  });
  
});

app.post('/signup', function (req, res) {
  var data=req.body;
bcrypt.hash(data.password,saltRounds,function(err,hash){
  if(err){
    console.log(err)
  }db.save({
      username:data.username,
      password:hash,
      phonenumber:data.phonenumber,
      longitude: data.longitude,
      laltitude: data.laltitude,
      distance: 0
    },function(err,data){
      if(err){
        console.log(err)
      }
      res.send(data)
    })
    
})
// var hash = bcrypt.hashSync(data.password, saltRounds);
// db.save({username:data.username , password : hash},function(err,data){
//  if(err){
//    console.log(err)
//  }
//  console.log(data)
//  res.redirect("/login")
// })



});
app.get('/signup', function (req, res) {
  var data=req.body;

  
  console.log('wseu')
});


// app.post('/signin', function (req, res) {
//   var data=req.body;
//   db.findOne(data.username,function(err,datares){
//    if(err){
//      res.send(err)
//    }
//    res.redirect('index');
//   })
  
  
// });

// app.get('/signin', function (req, res) {
//   var data=req.body;
//   db.findOne(data.username,function(err,datares){
//    if(err){
//      res.send(err)
//    }
//    res.redirect('index');
//   })
  
  
// });

app.post('/', function (req, res) {

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return Math.floor(d);
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
  // console.log(req.body);
  var user=req.body;
  // var userPos={longitude:4000,laltitude:5000}
  // var closetPos;
  // var minDist=99999999;
  // var locations,distance;
  db.Technitian.find({},'username longitude laltitude distance phonenumber',function(err,techs){
    
  for (var i = 0; i < techs.length; i++) {
      var dis = getDistanceFromLatLonInKm(user.laltitude , user.longitude, techs[i].laltitude, techs[i].longitude)
      techs[i].distance = dis
  }
  function compare(a,b) {
  if (a.distance < b.distance)
    return -1;
  if (a.distance > b.distance)
    return 1;
  return 0;
}

techs.sort(compare);
var arr=[];
for (var i = 0; i < 5; i++) {
  arr.push(techs[i])
}
  // var closetdis=techs[0].distance;
 
  //  for (var i = 0; i < techs.length; i++) {
  //     if(closetdis>techs[i].distance){
  //       closetdis=techs[i].distance;
  //     }
      
  //   } 
    res.send(arr);
  })
  // for (var i = 0; i < 100; i++) {
    
  // }
  
});

// db.Technitian.findOne({username:username},function(err,data){
//     if(err){
//       console.log(err)
//     }
//     bcrypt.compare(pass,data.password,function(err,isMatch){
//       if(isMatch){
//         console.log('access valid',isMatch)
        
//       }
//       else{
//         console.log(err)
//       }
      

//     })
//   });

app.listen(3001, function() {
  console.log('listening on port 3000!');
});

