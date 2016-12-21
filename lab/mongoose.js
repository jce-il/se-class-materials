var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/exdb");
console.log("bd connected!");
var userSchema = {
   name: String,
   age: Number,
   city: String
}

var User = mongoose.model('User', userSchema, 'users');

var newUser = User({
   name: "Adi",
   age: 20,
   city: "New York"
});

app.get('/', function (req, res) {
   res.send("Go to /saveUser!!");
});
app.get('/saveUser', function (req, res) {
   newUser.save(function (err) {
      if(err) {console.log("Error: "+ err);}
      console.log("User created!");
      res.send("User created! Go to /find!!");
   });
});
app.get('/find', function (req, res) {
   User.find({name: "Adi"}, function (err, result) {
      if(err) {console.log("Error: "+ err);}
      console.log("User find!");
      res.send("User: "+result);
   });
});
app.listen(8080);
