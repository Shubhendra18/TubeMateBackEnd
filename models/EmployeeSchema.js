var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String },
    Address: { type: String },
    Password: { type: String }

});
module.exports=mongoose.model('employee',empSchema);