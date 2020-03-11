var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  text:{type:String,required:true},
  title:{type:String,required:true},
  image:{type:String,required:true}
});

module.exports = mongoose.model('Blog', BlogSchema);