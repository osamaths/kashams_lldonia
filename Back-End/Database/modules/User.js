var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  gender: String,
  username: String,
  email:String,
  password:String,
  year:Number

});

module.exports = mongoose.model('User', UserSchema);
