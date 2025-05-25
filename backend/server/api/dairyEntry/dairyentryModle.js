const mongoose = require("mongoose");


const dairyEntrySchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  
  deliveryPersonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  milkTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MilkType",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  shift: {
    type: String,
    enum: ["Morning", "Evening"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerKl: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
}, { timestamps: true });


const DairyEntry = mongoose.models.DairyEntry || mongoose.model("DairyEntry",dairyEntrySchema)
module.exports = DairyEntry
