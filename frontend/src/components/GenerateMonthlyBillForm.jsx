import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const GenerateMonthlyBillForm = () => {
  const [form, setForm] = useState({
    customerId: "",
    month: "",
    year: "",
    totalQuantity: "",
    totalAmount: "",
  });

  const [users, setUsers] = useState([]);

  // Fetch all users to select customer
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getalluser");
        console.log(res)
        if (res.data.success) {
          const customers = res.data.data.filter(user => user.userType === "user");
          setUsers(customers);
        } else {
          toast.error("Failed to fetch users");
        }
      } catch (error) {
        toast.error("Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/createbill", form);
      console.log(res)
      if (res.data.success) {
        toast.success("Monthly bill generated successfully!");
        setForm({ customerId: "", month: "", year: "", totalQuantity: "", totalAmount: "" });
      } else {
        toast.error(res.data.message || "Failed to generate bill");
      }
    } catch (err) {
      toast.error("Server error while creating bill");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <ToastContainer />
      <h3 className="text-center text-primary mb-4">Generate Monthly Bill</h3>

      <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Customer</label>
          <select
            className="form-select"
            name="customerId"
            value={form.customerId}
            onChange={handleChange}
            required
          >
            <option value="">Select Customer</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Month (1–12)</label>
          <input
            type="number"
            name="month"
            className="form-control"
            value={form.month}
            onChange={handleChange}
            required
            min="1"
            max="12"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Year</label>
          <input
            type="number"
            name="year"
            className="form-control"
            value={form.year}
            onChange={handleChange}
            required
            min="2000"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Total Quantity (Liters)</label>
          <input
            type="number"
            name="totalQuantity"
            className="form-control"
            value={form.totalQuantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Total Amount (₹)</label>
          <input
            type="number"
            name="totalAmount"
            className="form-control"
            value={form.totalAmount}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Generate Bill
        </button>
      </form>
    </div>
  );
};

export default GenerateMonthlyBillForm;
