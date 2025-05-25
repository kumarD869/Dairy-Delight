const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
deliveryPersonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalDeliveries: {
    type: Number,
    required: true,
  },
  salaryAmount: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Salary", salarySchema);