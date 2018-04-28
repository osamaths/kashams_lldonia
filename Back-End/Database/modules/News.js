var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
	idImage: Number,
	text: String,
	image:String
 });

module.exports = mongoose.model('News', NewsSchema);
