const mongoose = require("mongoose");


const enquirySchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true
     },

  email: {
     type: String,
     required: true
     },

  contact: {
     type: String,
     required: true 
    },
  subject: {
     type: String, 
     required: true 
    },

  message: {
     type: String,
      required: true
     },

  status: {
     type: Boolean,
     default: true 
    },

  createdAt: {
     type: Date, 
     default: Date.now 
    }
});

module.exports = mongoose.model("Enquiry", enquirySchema)