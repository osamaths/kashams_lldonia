var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AmiraSchema = new Schema({

  name: String,
  year:Number,
  people:[{
    type : Schema.Types.ObjectId,
    ref : 'quran'
}]
});


const Amira= mongoose.model('amira', AmiraSchema);
module.exports=Amira;
