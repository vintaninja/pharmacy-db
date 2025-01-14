const mongoose = require('mongoose');
const prescriptionSchema = new mongoose.Schema({
    name:String,
    price:String,
    type:String,
    userId:String,
    company:String
});
module.exports = mongoose.model("prescriptions", prescriptionSchema)