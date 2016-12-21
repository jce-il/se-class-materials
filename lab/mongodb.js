var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/exdb", function (err, db) {
    if(err){ return console.log("Error: "+ err);}
    console.log("Connected to db!");

    var collection = db.collection("user");

    app.get("/", function (req, res) {
        insertDb(db, function () {
           db.close();
        });
    });

    app.get("/users", function (req, res) {
        var a = collection.find().toArray(function (err, result) {
           console.log("Find Uesrs " +result);
            res.end("Find succeed!");
        });
    });

    var insertDb = function(db, callback){
      var users = [{ "name":"John", "age":31, "city":"New York" },{ "name":"Kyle", "age": "21", "city":"New York" },{ "name":"Jason", "age":60, "city":"Jerusalem" },{ "name":"Yoni", "age":26, "city":"Tel Aviv" },{ "name":"Mor", "age":27, "city":"New York" },{ "name":"Gal", "age":20, "city":"Tel Aviv" },{ "name":"Avi", "age":30, "city":"Shanghai" },{ "name":"Avi", "age":80, "city":"Seoul" },{ "name":"John", "age":12, "city":"New York" },{ "name":"Tal", "age":25, "city":"Tokyo" },{ "name":"Adam", "age":31, "city":"Seoul" },{ "name":"Sia", "age":29, "city":"New York" },{ "name":"Karolina", "age":27, "city":"Jerusalem" },{ "name":"Eden", "age":20, "city":"Jerusalem" },{ "name":"David", "age":31, "city":"New York" },{ "name":"Shira", "age":29, "city":"Tokyo" },{ "name":"Zara", "age":60, "city":"New York" },{ "name":"Dana", "age":88, "city":"Tokyo" }];
        collection.insertMany(users, function (err, result) {
            if(err){ return console.log("Error to insert: "+ err);}
            console.log("insert to db! ");
        })
    };
});

app.listen(8080);