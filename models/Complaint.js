const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({

name:String,

department:String,

description:String,

priority:String,

status:{
type:String,
default:"Pending"
},

date:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Complaint", ComplaintSchema);