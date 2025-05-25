const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb is successfully connected")

    }catch(err){
        console.log("mongodb not connected get error",err)
        process.exit(1)
    }
}

module.exports = connectDB