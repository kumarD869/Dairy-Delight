const mongoose = require("mongoose");
const Salary = require("./salaryModel"); 

// Create salary
const createSalary = async (req, res) => {
    try {
        const validation = [];
        const { deliveryPersonId, date, totalDeliveries, salaryAmount } = req.body;

        // Validation
        if (!deliveryPersonId) {
            validation.push("deliveryPersonId is required");
        }
        if (!date) {
            validation.push("date is required");
        }
        if (!totalDeliveries) {
            validation.push("totalDeliveries is required");
        }
        if (!salaryAmount) {
            validation.push("salaryAmount is required");
        }

        if (validation.length > 0) {
            return res.json({
                status: 400,
                success: false,
                message: "Validation error",
                error: validation
            });
        }
         const sal=totalDeliveries*salaryAmount
        const salary = new Salary({
            deliveryPersonId,
            date,
            totalDeliveries,
            salaryAmount:sal
        });

        await salary.save();

        res.json({
            status: 201,
            success: true,
            message: "Salary created successfully",
            data: salary
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

// Get all salaries
const getAllSalaries = async (req, res) => {
    try {
        const salaries = await Salary.find().populate("deliveryPersonId")

        res.json({
            status: 200,
            success: true,
            message: "Salaries fetched successfully",
            data: salaries
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

// Get salary by ID
const getSalaryById = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.json({
                status: 400,
                success: false,
                message: "id is required"
            });
        }

        const salary = await Salary.findById(id).populate("deliveryPersonId", "name");

        if (!salary) {
            return res.json({
                status: 404,
                success: false,
                message: "Salary not found"
            });
        }

        res.json({
            status: 200,
            success: true,
            message: "Salary fetched successfully",
            data: salary
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

// Update salary by ID
const updateSalaryById = async (req, res) => {
    try {
        const { id, ...updateData } = req.body;

        if (!id) {
            return res.json({
                status: 400,
                success: false,
                message: "id is required"
            });
        }

        const salary = await Salary.findByIdAndUpdate(id, updateData, { new: true }).populate("deliveryPersonId", "name");

        if (!salary) {
            return res.json({
                status: 404,
                success: false,
                message: "Salary not found"
            });
        }

        res.json({
            status: 200,
            success: true,
            message: "Salary updated successfully",
            data: salary
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

// Delete salary by ID
const deleteSalary = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.json({
                status: 400,
                success: false,
                message: "id is required"
            });
        }

        const salary = await Salary.findByIdAndDelete(id);

        if (!salary) {
            return res.json({
                status: 404,
                success: false,
                message: "Salary not found"
            });
        }

        res.json({
            status: 200,
            success: true,
            message: "Salary deleted successfully"
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



// Get salary by ID
const getSalaryByBoyId = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.json({
                status: 400,
                success: false,
                message: "id is required"
            });
        }

        const salary = await Salary.find({deliveryPersonId:id}).populate("deliveryPersonId", "name");

        if (!salary) {
            return res.json({
                status: 404,
                success: false,
                message: "Salary not found"
            });
        }

        res.json({
            status: 200,
            success: true,
            message: "Salary fetched successfully",
            data: salary
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

module.exports = { createSalary, getAllSalaries, getSalaryById, updateSalaryById, deleteSalary,getSalaryByBoyId };
