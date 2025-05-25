const mongoose = require("mongoose")
const  DairyEntry= require("./dairyentryModle")
const milkType = require("../milktype/milktypeModel")
const User = require("../user/userModel")


const createDairyEntry = async (req, res) => {
  try {
    const { customerId, deliveryPersonId, milkTypeId, date, shift, quantity, pricePerKl } = req.body;

    if (!customerId || !deliveryPersonId || !milkTypeId || !date || !shift || !quantity || !pricePerKl) {
      return res.json({
        status: 400,
        success: false,
        message: "All fields are required",
      });
    }

    const totalPrice = quantity * pricePerKl;

    const entry = new DairyEntry({
      customerId,
      deliveryPersonId,
      milkTypeId,
      date,
      shift,
      quantity,
      pricePerKl,
      totalPrice,
    });

    await entry.save();

    res.json({
      status: 201,
      success: true,
      message: "Dairy entry created successfully",
      data: entry,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  };  
  }
  
  const getAllDairyEntries = async (req, res) => {
    try {
      
      const entries = await DairyEntry.find().populate("customerId").populate("deliveryPersonId").populate("milkTypeId")
    res.json({
      status: 200,
      success: true,
      message: "Dairy entries fetched successfully",
      data: entries,
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
const getDairyEntryById = async (req, res) => {
    try {
      const { id } = req.body;
      if (!id) return res.json({
         status: 400, 
         success: false, 
         message: "ID is required" 
        });
  
      const entry = await DairyEntry.findById(id).populate("customerId").populate("deliveryPersonId").populate("milkTypeId")
      if (!entry) return res.json({ 
        status: 404,
        success: false,
        message: "Entry not found"
     });
  
      res.json({ 
        status: 200, 
        success: true, 
        message: "Entry fetched", 
        data: entry 
    });
    } catch (err) {
      res.json({ 
        status: 500, 
        success: false, 
        message: "Internal server error", 
        error: err.message });
    }
  };
  
  const updateDairyEntryById = async (req, res) => {
    try {
      const { id, ...updateData } = req.body;
      if (!id) return res.json({ 
        status: 400, 
        success: false, 
        message: "ID is required" 
    });
  
      if (updateData.quantity && updateData.pricePerKl) {
        updateData.totalPrice = updateData.quantity * updateData.pricePerKl;
    }

    const updated = await DairyEntry.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.json({ 
        status: 404, 
        success: false, 
        message: "Entry not found" 
    });

    res.json({ 
        status: 200, 
        success: true, 
        message: "Updated successfully", 
        data: updated 
    });
  } catch (err) {
    res.json({ 
        status: 500, 
        success: false, 
        message: "Internal server error", 
        error: err.message 
    });
  }
};

const deleteDairyEntry = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.json({ 
        status: 400, 
        success: false, 
        message: "ID is required" });

    const deleted = await DairyEntry.findByIdAndDelete(id);
    if (!deleted) return res.json({ 
        status: 404, 
        success: false, 
        message: "Entry not found" 
    });

    res.json({ 
        status: 200, 
        success: true, 
        message: "Deleted successfully" });
  } catch (err) {
    res.json({ 
        status: 500, 
        success: false, 
        message: "Internal server error", 
        error: err.message });
  }
};




module.exports = {
  createDairyEntry,
  getAllDairyEntries,
  getDairyEntryById,
  updateDairyEntryById,
  deleteDairyEntry,
};