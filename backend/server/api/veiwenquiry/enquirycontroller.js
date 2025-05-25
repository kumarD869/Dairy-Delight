const mongoose = require("mongoose")
const Enquiry = require("./enquiryModel");

// Create Enquiry
const createEnquiry = async (req, res) => {
  try {
    const validation = [];
    const { name, email, contact, subject, message } = req.body;

    if (!name || typeof name !== "string") validation.push("Name is required and must be a string");
    if (!email || typeof email !== "string") validation.push("Email is required and must be a string");
    if (!contact || typeof contact !== "string") validation.push("Contact is required and must be a string");
    if (!subject || typeof subject !== "string") validation.push("Subject is required and must be a string");
    if (!message || typeof message !== "string") validation.push("Message is required and must be a string");

    if (validation.length > 0) {
      return res.json({
        status: 400,
        success: false,
        message: "Validation error",
        error: validation,
      });
    }

    const enquiry = new Enquiry({ name, email, contact, subject, message });
    await enquiry.save();

    res.json({
      status: 201,
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
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

// Get All Enquiries
const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();

    res.json({
      status: 200,
      success: true,
      message: "Enquiries fetched successfully",
      data: enquiries,
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

// Get Enquiry by ID
const getEnquiryById = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id || typeof id !== "string") {
      return res.json({
        status: 400,
        success: false,
        message: "Validation error",
        error: ["ID is required and must be a string"],
      });
    }

    const enquiry = await Enquiry.findById(id);

    if (!enquiry) {
      return res.json({
        status: 404,
        success: false,
        message: "Enquiry not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Enquiry fetched successfully",
      data: enquiry,
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

// Update Enquiry by ID
const updateEnquiryById = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;

    if (!id || typeof id !== "string") {
      return res.json({
        status: 400,
        success: false,
        message: "Validation error",
        error: ["ID is required and must be a string"],
      });
    }

    const updated = await Enquiry.findByIdAndUpdate(id, updateData, { new: true });

    if (!updated) {
      return res.json({
        status: 404,
        success: false,
        message: "Enquiry not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Enquiry updated successfully",
      data: updated,
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

// Delete Enquiry by ID
const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id || typeof id !== "string") {
      return res.json({
        status: 400,
        success: false,
        message: "Validation error",
        error: ["ID is required and must be a string"],
      });
    }

    const deleted = await Enquiry.findByIdAndDelete(id);

    if (!deleted) {
      return res.json({
        status: 404,
        success: false,
        message: "Enquiry not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Enquiry deleted successfully",
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
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiryById,
  deleteEnquiry,
};