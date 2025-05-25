const mongoose = require("mongoose")
const  MilkType= require("./milktypeModel")


const createMilkType = async (req, res) => {
  try {
    const validation = [];
    const { name, pricePerKl, description } = req.body;
    console.log(req.body)

    if (!name) validation.push("Name is required");
    if (!pricePerKl) validation.push("Price per KL is required");

    if (validation.length > 0) {
      return res.json({
        status: 400,
        success: false,
        message: "Validation error",
        error: validation,
      });
    }

    const milkType = new MilkType({
      name,
      pricePerKl,
      description,
    });
    // console.log(milkType)

    // await milkType.save();
    // console.log('Saved')
    try {
      const savedMilk = await milkType.save();
      console.log("Milk saved:", savedMilk);
      return res.status(201).json({
        success: true,
        message: "Milk type added successfully",
        data: savedMilk,
      });
    } catch (err) {
      console.error("Error saving milk:", err);
      return res.status(500).json({
        success: false,
        message: "Failed to save milk type",
        error: err.message
      });
    }


    // res.json({
    //   status: 201,
    //   success: true,
    //   message: "Milk type created successfully",
    //   data: milkType,
    // });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const getAllMilkTypes = async (req, res) => {
  try {
    const milkTypes = await MilkType.find();
    res.json({
      status: 200,
      success: true,
      message: "Milk types fetched successfully",
      data: milkTypes,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const getMilkTypeById = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.json({
        status: 400,
        success: false,
        message: "ID is required",
      });
    }

    const milkType = await MilkType.findById(id);
    if (!milkType) {
      return res.json({
        status: 404,
        success: false,
        message: "Milk type not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Milk type fetched successfully",
      data: milkType,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const updateMilkTypeById = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;

    if (!id) {
      return res.json({
        status: 400,
        success: false,
        message: "ID is required",
      });
    }

    const milkType = await MilkType.findByIdAndUpdate(id, updateData, { new: true });

    if (!milkType) {
      return res.json({
        status: 404,
        success: false,
        message: "Milk type not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Milk type updated successfully",
      data: milkType,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const deleteMilkType = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.json({
        status: 400,
        success: false,
        message: "ID is required",
      });
    }

    const milkType = await MilkType.findByIdAndDelete(id);

    if (!milkType) {
      return res.json({
        status: 404,
        success: false,
        message: "Milk type not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Milk type deleted successfully",
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

module.exports = {
  createMilkType,
  getAllMilkTypes,
  getMilkTypeById,
  updateMilkTypeById,
  deleteMilkType,
};