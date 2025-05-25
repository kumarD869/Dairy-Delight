const mongoose = require("mongoose")
const User = require("./userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendMail  = require("../../config/mailer")

const createUser = async(req,res) =>{
    try{
        const validation  = []
        const {name,email,password,phone,address,userType} = req.body

        if(!name || typeof name !== "string"){
            validation.push("name is required and type must be string")
        }
        if(!password || typeof password !== "string"){
            validation.push("password is required and type must be string")
        }
        if(!email || typeof email !== "string"){
            validation.push("email is required and must be string")
        } 
         if(!phone || typeof phone !== "string"){
            validation.push("phone is required and type must be string")
        }
        if(!address || typeof address !== "string"){
            validation.push("address is required and must be string")
        }
        if(!userType || typeof userType !== "string"){
            validation.push("userType is required and type must be string")
        }
        if (!["admin","user","deliveryboy"].includes(userType)){
            validation.push("invalid user")
        }
        

       


        if(validation.length >0){
            return res.json({
                status:400,
                success:false,
                message:"validation error",
                error:validation
            })
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.json({
                status:404,
                success:false,
                message:"user ftfg already exist"
            })
        }   
        //hashing password 

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const userId =await User.countDocuments()
        console.log(userId)
        const newUser = userId+1
        const user = new User({
            autoId:newUser,
            name,
            email,
            password:hashedPassword,
            phone,
            address,
            userType,
          
        })

        await user.save()

        res.json({
            status:201,
            success:true,
            message:"user is created successfully",
            data:user
        })

    }
    catch(err){
         res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
         })
    }
}

const getAllUser = async(req,res) =>{
    try{

        const user = await User.find()
        res.json({
            status:200,
            success:true,
            message:"user is fetch successfully",
            data:user
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
const getUserById=async(req,res)=>{
    try{
        const{id}=req.body
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }
    const user=await User.findById(id)
    if(!user){
        return res.json({
            status:403,
            success:false,
            message:"id is not vaild or db is empety"

        })
    }
  res.json({
            status:200,
            success:true,
            message:"user is get successfuly",
            data:user
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
const updateUserById = async(req,res) =>{
    try{
        const{id,...data} = req.body
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const user = await User.findByIdAndUpdate(
            id,
            data,
            {new:true}
        )
        if(!user){
            return res.json({
                status:403,
                success:false,
                message:"id is not found"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"user is update successfully",
            data:user
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
const deleteUser = async(req,res) =>{
    try{

        const {id} = req.body 
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"user delete successfully"
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
const loginUser = async(req,res) =>{
    try{
        const validation = []
        const{email,password,userType} =req.body
        console.log(email)
        console.log(password)
        console.log(userType)
        if(!email){
            validation.push("email is required")
        }
        if(!password){
            validation.push("password is required")
        }
        if(!userType){
            validation.push("user type is require")
        }
        if(validation>0 ){
            return res .json({
                status:400,
                success:false,
                message:"validation error",
                error:validation
            })
        }
        const user= await User.findOne({email})
        console.log(user)
        
        if(!user){
            return res .json({
                status:403,
                success:false,
                message:"user is not found"
            })
        }
        if(user.userType !== userType){
            return res.json({
                status:403,
                success:false,
                message:"user is not match"
            })
        }
        const isMatch = await bcrypt. compare(password,user.password)
        console.log(isMatch)
        if(!isMatch){
            return res .json({
                status:403,
                success:false,
                message:"password is not correct"
            })
        }
        //generate a token
        const token = jwt .sign(
            {id:user._id,userType:user.userType},
            process.env.SECRET_KEY,
            {expiresIn:"1d"}

        )
        console.log(token)
        res.json({
            status:200,
            success:true,
            message:"Login suceesfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                userType:user.userType,
                email:user.email
            }
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


const SendOtp = async(req,res) =>{
  try{
    const {email} = req.body
    const user = await User.findOne({email})
    if(!user){
      return res.json({
        status:400,
        success:false,
        message:"user not found"
      })
    }

    const otp = Math.floor(100000+Math.random()*900000).toString()
    const expiry = Date.now() + 5 * 60 * 1000 // 5 minute
    user.otp = otp
    user.otpExpiry = expiry
    await user.save()
    const subject = "you otp code"
    const message = ` your otp code is ${otp}.it is expire with in 5 minute`
    const result = await sendMail(email,subject,message)
    console.log(otp)
    res.json({
      status:200,
      success:true,
      message:"successfully",
      data:result
    })
  }catch(err){
    res.json({
      status:500,
      success:false,
      message:"internal server error"
    })
  }
}


const verifyOtp = async(req,res) =>{
  try{
    const {email,otp,newPassword} = req.body 
    const user = await User.findOne({email})
    if(!user || user.otp !== otp || Date.now() >user.otpExpiry){
      return res.json({
        status:400,
        success:false,
        message:"invalid or expired otp"
      })
    }
    
    user.password = await bcrypt.hash(newPassword,10);
    user.otp = null 
    user.otpExpiry = null 
    await user.save()
    res.json({
      message:"password reset successfully"
    })

  }catch(err){
     res.json({
      message:"password is not reset"
     })
  }
}



module.exports = {createUser,getAllUser,getUserById,updateUserById,deleteUser,loginUser,SendOtp,verifyOtp}