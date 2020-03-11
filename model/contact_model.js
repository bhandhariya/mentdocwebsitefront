var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  contact:{type:number,required:true},
  message:{type:string,required:true}
});

module.exports = mongoose.model('Contact', BlogSchema);