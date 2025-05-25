const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
        },
        category:{
            type:String,
            enum:['Non-veg','Veg'],
            default:'Veg'
        },
        quantity:{
            type:Number,
            required:null
        },
        price:{
            type:String,
            required:true
        }
    }
)
// module.exports=new mongoose.model("Product",productSchema)

const Product = mongoose.models.Product || mongoose.model("Product",productSchema)
module.exports = Product