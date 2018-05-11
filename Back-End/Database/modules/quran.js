var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuranSchema = new Schema({

  surah: String,
  page:Number,
  owner:[{
    type : Schema.Types.ObjectId,
    ref : 'amira'
}]
});


const Quran= mongoose.model('quran', QuranSchema);
module.exports =Quran;
