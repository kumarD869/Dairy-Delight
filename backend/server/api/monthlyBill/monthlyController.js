// POST /api/createMonthlyBill

const MonthlyBill = require("./monthlyModel");

const createMonthlyBill = async (req, res) => {
  try {
    const { customerId, month, year, totalQuantity, totalAmount } = req.body;

    if (!customerId || !month || !year || !totalQuantity || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const bill = new MonthlyBill({
      customerId,
      month,
      year,
      totalQuantity,
      totalAmount
    });

    await bill.save();

    res.status(201).json({
      success: true,
      message: "Monthly bill created successfully",
      data: bill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// POST /api/getAllMonthlyBills

const getAllMonthlyBills = async (req, res) => {
  try {
    const bills = await MonthlyBill.find().populate("customerId");
    res.status(200).json({
      success: true,
      data: bills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bills",
      error: error.message
    });
  }
};


// POST /api/getMonthlyBillById

const getMonthlyBillById = async (req, res) => {
  try {
    const { id } = req.body;

    const bill = await MonthlyBill.findById(id).populate("customerId");

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found"
      });
    }

    res.status(200).json({
      success: true,
      data: bill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
// POST /api/updateMonthlyBill

const updateMonthlyBill = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;

    const updatedBill = await MonthlyBill.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedBill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Bill updated successfully",
      data: updatedBill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
// POST /api/deleteMonthlyBill

const deleteMonthlyBill = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedBill = await MonthlyBill.findByIdAndDelete(id);

    if (!deletedBill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Bill deleted successfully",
      data: deletedBill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};



// In controller (e.g. monthlyController.js)
const getMonthlyBillsByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.body;

    const bills = await MonthlyBill.find({ customerId }).populate("customerId");

    if (!bills || bills.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No bills found for this customer"
      });
    }

    res.status(200).json({
      success: true,
      data: bills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

module.exports = {
  createMonthlyBill,
  getAllMonthlyBills,
  getMonthlyBillById,
  updateMonthlyBill,
  deleteMonthlyBill,
  getMonthlyBillsByCustomerId, 
};
