const mongoose = require("mongoose")

const monthlySchema = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    totalQuantity:{
        type:Number,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    }
})

const MonthlyBill = mongoose.models.MonthlyBill || mongoose.model("MonthlyBill",monthlySchema)
module.exports = MonthlyBill