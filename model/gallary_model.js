  
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GallarySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  photoUrl:{type:String,required:true,unique:true}
});

module.exports = mongoose.model('Gallary', GallarySchema);