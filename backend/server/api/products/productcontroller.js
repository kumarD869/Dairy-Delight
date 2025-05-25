const mongoose = require("mongoose")
const Products = require("./productModel")
const creatproduct = async(req,res) =>{
    try{
        const validation  = []
             const { name, image, category, quantity, price } = req.body
        
                // Validation
                if (!name) {
                    validation.push("name is required a")
                }
                if (!image ) {
                    validation.push("image must be a string")
                }
                if (!category) {
                    validation.push("category is required ")
                }
           
                if (!quantity) {
                    validation.push("quantity is required")
                }
                if (!price) {
                    validation.push("price is required ")
                }
        
                if (validation.length > 0) {
                    return res.json({
                        status: 400,
                        success: false,
                        message: "Validation error",
                        error: validation
                    })
                }
        
                const product = new Products({
                    name,
                    image,
                    category,
                    quantity,
                    price
                })
        
                await product.save()
        
                res.json({
                    status: 201,
                    success: true,
                    message: "Product created successfully",
                    data: product
                })
        
            } catch (err) {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })
            }
        }
        const getAllProducts = async (req, res) => {
            try {
                const products = await Products.find()
        
                res.json({
                    status: 200,
                    success: true,
                    message: "Products fetched successfully",
                    data: products
                })
            } 
            catch (err) {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })
            }
        }
        const getProductById = async (req, res) => {
            try {
                const { id } = req.body
                if (!id) {
                    return res.json({
                        status: 400,
                        success: false,
                        message: "id is required"
                    })
                }
        
                const product = await Products.findById(id)
                if (!product) {
                    return res.json({
                        status: 404,
                        success: false,
                        message: "Product not found"
                    })
                }
        
                res.json({
                    status: 200,
                    success: true,
                    message: "Product fetched successfully",
                    data: product
                })
            } catch (err) {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })
            }
        }
        const updateProductById = async (req, res) => {
            try {
                const { id, ...updateData } = req.body
        
                if (!id) {
                    return res.json({
                        status: 400,
                        success: false,
                        message: "id is required"
                    })
                }
        
                const product = await Products.findByIdAndUpdate(id, updateData, { new: true })
        
                if (!product) {
                    return res.json({
                        status: 404,
                        success: false,
                        message: "Product not found"
                    })
                }
        
                res.json({
                    status: 200,
                    success: true,
                    message: "Product updated successfully",
                    data: product
                })
        
            } catch (err) {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })
            }
        }
       
        const deleteProduct = async(req,res) =>{
            try{
        
                const { id } = req.body 
                if(!id){
                    return res.json({
                        status:400,
                        success:false,
                        message:"id is required"
                    
                  })      
                }
                const Product = await Products.findByIdAndDelete(id)
                if(!Product){
                    return res.json({
                        status:404,
                        success:false,
                        message:"Product not found"
                    })
                }
        
                res.json({
                    status:200,
                    success:true,
                    message:"product delete successfully"
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
             
        // const deleteProduct = async (req, res) => {
        //     try {
        //         const { id } = req.body
        
        //         if (!id) {
        //             return res.json({
        //                 status: 400,
        //                 success: false,
        //                 message: "id is required"
        //             })
        //         }
        
        //         const product = await Products.findByIdAndDelete(id)
        
        //         if (!product) {
        //             return res.json({
        //                 status: 404,
        //                 success: false,
        //                 message: "Product not found"
        //             })
        //         }
        
        //         res.json({
        //             status: 200,
        //             success: true,
        //             message: "Product deleted successfully"
        //         })
        //     } catch (err) {
        //         res.json({
        //             status: 500,
        //             success: false,
        //             message: "Internal server error",
        //             error: err.message
        //         })
        //     }
        // }
        
        module.exports = {creatproduct,getAllProducts,getProductById,updateProductById,deleteProduct}