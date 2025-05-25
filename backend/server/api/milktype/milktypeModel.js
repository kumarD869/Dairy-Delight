const mongoose = require('mongoose');

const milkTypeSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        enum:["cow","buffalo","goat"],
      },
      pricePerKl: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      status: {
        type: Boolean,
        default: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  );

  const MilkType = mongoose.models.MilkType || mongoose.model("MilkType",milkTypeSchema)
  
  module.exports = MilkType