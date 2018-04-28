var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User= require('./Database/modules/User.js');
var News=require('./Database/modules/News.js');
var multer = require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Database Connection
var port = 3005;

mongoose.connect('mongodb://localhost:27017/kshamsDB', ()=>{
	console.log("Database is connected.")
});

var db = mongoose.connection;

//Upload Image

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage }).single('NewsImage');

// newsImage

app.post('/news/image', function (req, res) {
  console.log ("inside /uploads");
    upload(req, res, function (err) {
        if (err) {
            	res.send("ErrorImageUpload")
        }
            	res.send("Correct")
    })
});


//SignUp
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

//Login

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

//addNews
app.post('/news/add', (req, res) => {
	var newNews={
		id: req.body.id,
		text: req.body.text,
		image: req.body.image

	}
  News.create(newNews, function(err, doc){
        if(err) return err;
        else { res.send(doc); }
    });
});





app.listen(port, function() {
  console.log('app listening on port ' + port);
});
