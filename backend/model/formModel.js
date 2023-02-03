const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    rollNo: Number,
    section: String,
    depart: String,
    contact:Number

})
const formModel = mongoose.model('form', formSchema);
module.exports = formModel;