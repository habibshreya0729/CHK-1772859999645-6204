const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({

ticketId: {
    type: String,
    unique: true,
    required: true
},

name: String,

department: String,

description: String,

location: String,

latitude: Number,

longitude: Number,

image: String,

priority: String,

status: {
    type: String,
    default: "Pending"
},

date: {
    type: Date,
    default: Date.now
}

});

module.exports = mongoose.model("Complaint", ComplaintSchema);