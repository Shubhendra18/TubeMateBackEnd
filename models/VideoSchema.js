var mongoose = require('mongoose');
var VideoSchema = new mongoose.Schema({
    Title: { type: String },
    Path: { type: String },
    Des: { type: String },
});
module.exports=mongoose.model('VideoCollection',VideoSchema);