var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  text:{type:String,required:true},
  name:{type:String,required:true},
  title:{type:String,required:true,unique:true},
  image:{type:String,required:true}
});

module.exports = mongoose.model('Testimonial', TestSchema);