var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: String,
    lastname: String,
    email:String
},);
// Compile model from schema
module.exports = mongoose.model('ClientModel', ClientSchema );

