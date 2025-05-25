const User = require("../api/user/userModel")
const bcrypt  = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const seedAdmin = async(req,res) =>{
    try{
        const admin = await User.findOne({email:"admin@gmail.com"})
        const hashedPassword = await bcrypt.hash("123456",10)
         if(!admin){
            const admins = new User({
                name:"admin",
                email:"admin@gmail.com",
                password:hashedPassword,
                address:"india",
                phone:"8743764576",
                userType:"admin"

            })
         await admins.save()
         console.log("admin is created successfully")
         }
         console.log("admin is already exist")

    }catch(err){
       console.log("admin in not created due to error:",err)
    }
}

const loginAdmin = async(req,res) =>{
    try{
        const {email,password,userType} = req.body 
        const admin = await User.findOne({email})
        console.log(admin)
        console.log(password)
        console.log(userType)
        if(!admin){
            return res.json({
                status:404,
                success:false,
                message:"email is not found"
            })
        }
        if(userType !== admin.userType){
            return res.json({
                status:404,
                success:false,
                message:"user type is mismatch"
            })
        }

        const isMatch = await bcrypt.compare(password,admin.password)
        if(!isMatch){
            return res.json({
                status:404,
                success:false,
                message:"password is not match"
            })
        }

        // generate token
        // 1. payload in which we send the user information like user_id , username ,userpassword, userType
        // 2. SECRET_KEY
        // 3. EXPIRES HOW MANY DAY VALID OF TOKEN

        const token = jwt.sign(
            {id:admin._id,password:admin.password,userType:admin.userType},
            process.env.SECRET_KEY,
            {expiresIn:"1d"}
        )

        console.log(token)
        res.json({
            status:200,
            success:true,
            message:"admin login successfully",
            token
        })



    }catch(err){
       res.json({
        status:500,
        success:false,
        message:"internal server error",
        error:err.message
       })
    }
}

module.exports = {seedAdmin,loginAdmin}