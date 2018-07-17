var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User= require('./Database/modules/User.js');
var News=require('./Database/modules/News.js');
var quran=require('./routes/quran');


var multer = require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Database Connection
var port = 3005;

mongoose.connect('mongodb://admin:admin@ds163699.mlab.com:63699/kshamsdb', ()=>{
	console.log("Database is connected.")
});

var db = mongoose.connection;

//useRoutes
app.use('/quran',quran);

//Upload Image

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/osamaths/Documents/Repos/kashams_lldonia/Back-End/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage, limits: {fileSize: 1000000} }).single('NewsImage');

// newsImage

app.post('/news/image', function (req, res) {
  console.log ("inside /uploads");
  console.log (req.file)
    upload(req, res, function (err) {
        if (err)
			res.send("ErrorImageUpload")
		else
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
		dob:req.body.dob
	};
	User.findOne({ username: newUser.username }, (err, user) => {
         if (!user) {

                 User.create(newUser, (err, doc) => {
                         if (err) {
                             res.send({message:err});
                         }
                         res.send(true + doc)
                     }
                 );

         } else {
             res.send({message: 'Username is already exist.'});
         }
     });
 });

//Login
app.post('/user/login', (req, res) => {
	console.log ('loging in...', req.body)
	User.findOne({username:req.body.username}, (err,user) => {
		if (user) {
			if(req.body.password===user.password){
				res.send(true);
			}
			else {
				res.send({message:"password error"});
			}
		} else {
			res.send ({message: "Username '" + req.body.username + "' not found." })
		}

	})
});

//addNews
app.post('/news/add', (req, res) => {
	var newNews={

		text: req.body.text,
		image: req.body.image
  }
  News.create(newNews, function(err, doc){
        if(err) return err;
        else { res.send(doc); }
    });
});

//Delete news
app.delete('/news/delete/:id', (req, res) => {
	var id=req.params.id;
News.findOneAndRemove({_id:id}, (err,user) => {
  if(err){
		console.log(err);
		return res.status(500).send();
	}
return res.status(300).send();
 	})
 });

//Update news
 app.post('/news/update', (req, res) => {
	 News.findOne({_id:req.body._id}, (err,user) => {
    	var newNews={
				text:req.body.text,
				image: req.body.image
			}
			News.update(newNews, function(err, doc){
						if(err) return err;
						else { res.send(doc); }
				});

 	})

});



app.listen(port, function() {
  console.log('app listening on port ' + port);
});
