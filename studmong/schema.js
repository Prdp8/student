const mongoose = require('mongoose')
const studentschema = new mongoose.Schema({
    studentid:{type:Number},
    studentname:{type:String},
    phone:{type:Number},
    dateofbirth:{type:Date,default:Date.now},
    address:{type:String},
})
module.exports= mongoose.model('Product',studentschema);