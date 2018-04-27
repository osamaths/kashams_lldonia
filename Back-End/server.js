
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User= require('./User');
var News=require('./News');
var profile=require('./profile');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('./profile',profile);


var port = 3005;

mongoose.connect('mongodb://localhost:27017/kshamsDB', ()=>{
	console.log("Database is connected.")
});

var db = mongoose.connection;

app.post('/user/signup', (req, res) => {
	var newUser={
		gender: req.body.gender,
		username: req.body.username,
		email: req.body.email,
		password:req.body.password,
		year:req.body.year
		
	}

	User.create(newUser, function(err, doc){
        if(err) return err;
        else { res.send(doc); }
    }); 
});



app.post('/user/login', (req, res) => {
	User.findOne({username:req.body.username}, (err,user) => {
		if(req.body.password===user.password){
			res.send("OpenHomePage")
		}
		else {
			res.send("password error")
		}
	})
});





 
app.listen(port, function() {
  console.log('app listening on port ' + port);
});