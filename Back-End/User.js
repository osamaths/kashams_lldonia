var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  gender: Boolean,
  username: String,
  email:String,
  password:String,
  year:Number
});

module.exports = mongoose.model('User', UserSchema);