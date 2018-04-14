
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User= require('./User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var port = 8080;
mongoose.connect('mongodb://localhost:27017/feef', ()=>{
	console.log("Database is connected.");
});
var db = mongoose.connection;



app.post('/create/newuser', (req, res) => {
	var newUser={
		id: req.body.id,
		name: req.body.name,
		gender: req.body.gender
		
	}

	User.create(newUser, function(err, doc){
        if(err) return err;
        else { res.send(doc); }
    }); 
});



app.listen(port, function() {
  console.log('app listening on port ' + port);
});