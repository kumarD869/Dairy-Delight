import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddViewDailyEntry = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [milkTypes, setMilkTypes] = useState([]);
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    customerId: "",
    milkTypeId: "",
    date: "",
    shift: "Morning",
    quantity: "",
    pricePerKl: "",
  });

  const deliveryPersonId = sessionStorage.getItem("userId");

  const navItems = [
    { name: "VIEW CUSTOMER", path: "/view/customer" },
    { name: "ADD/VIEW DAILY ENTRY", path: "/add/view/daily/entry" },
    { name: "MANAGE PROFILE", path: "/manage/profile" },
  ];

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getalluser");
        const users = res.data.data.filter((u) => u.userType === "user");
        setCustomers(users);
      } catch {
        toast.error("Failed to fetch customers");
      }
    };

    const fetchMilkTypes = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getAllMilkTypes");
        setMilkTypes(res.data.data);
      } catch {
        toast.error("Failed to fetch milk types");
      }
    };

    fetchCustomers();
    fetchMilkTypes();
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/getAllDairyEntries");
      setEntries(res.data.data || []);
    } catch {
      toast.error("Failed to fetch entries");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        deliveryPersonId,
        pricePerKl: parseFloat(formData.pricePerKl),
        quantity: parseFloat(formData.quantity),
      };

      const res = await axios.post("http://localhost:5000/api/createDairyEntry", data);
      if (res.data.success) {
        toast.success("Dairy entry added");
        setFormData({
          customerId: "",
          milkTypeId: "",
          date: "",
          shift: "Morning",
          quantity: "",
          pricePerKl: "",
        });
        fetchEntries(); // Refresh table
      } else {
        toast.error(res.data.message || "Failed to add entry");
      }
    } catch {
      toast.error("Error submitting dairy entry");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/log");
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "#FFFFFF",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "purple", fontWeight: "bolder" }}>
              WELCOME DELIVERY PERSON DASHBOARD
            </h4>
            <ul className="nav flex-column">
              {navItems.map((item) => (
                <li key={item.name} className="mb-3">
                  <button
                    onClick={() => navigate(item.path)}
                    style={{
                      width: "100%",
                      backgroundColor: "#6A0DAD",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "5px",
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-warning w-100 mt-3" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>

        {/* Main Content */}
        <main
          className="col-md-10 p-4"
          style={{
            backgroundImage: 'url(/assets/img/background.jpg)',
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <div style={{ background: "rgba(255, 255, 255, 0.77)", padding: "20px", borderRadius: "8px" }}>
            <h3 className="text-center" style={{ color: "#6A0DAD", fontWeight: "bold" }}>Add Daily Entry</h3>
            <form onSubmit={handleSubmit} className="row g-3 mt-4">
              <div className="col-md-4">
                <label className="form-label">Customer</label>
                <select className="form-select" name="customerId" value={formData.customerId} onChange={handleChange} required>
                  <option value="">Select Customer</option>
                  {customers.map((cust) => (
                    <option key={cust._id} value={cust._id}>{cust.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Milk Type</label>
                <select className="form-select" name="milkTypeId" value={formData.milkTypeId} onChange={handleChange} required>
                  <option value="">Select Milk Type</option>
                  {milkTypes.map((milk) => (
                    <option key={milk._id} value={milk._id}>{milk.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Shift</label>
                <select className="form-select" name="shift" value={formData.shift} onChange={handleChange}>
                  <option value="Morning">Morning</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Quantity (Litres)</label>
                <input type="number" className="form-control" name="quantity" value={formData.quantity} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Price per Litre</label>
                <input type="number" className="form-control" name="pricePerKl" value={formData.pricePerKl} onChange={handleChange} required />
              </div>
              <div className="col-12">
                <button className="btn btn-success w-100" type="submit">Submit Entry</button>
              </div>
            </form>

            {/* Daily Entries Table */}
            {entries.length > 0 && (
              <div className="mt-5">
                <h4 className="text-center mb-3" style={{ color: "#333" }}>Daily Entries</h4>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Milk Type</th>
                        <th>Date</th>
                        <th>Shift</th>
                        <th>Quantity (L)</th>
                        <th>Price/Litre</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, index) => (
                        <tr key={entry._id}>
                          <td>{index + 1}</td>
                          <td>{entry.customerId?.name || "N/A"}</td>
                          <td>{entry.milkTypeId?.name || "N/A"}</td>
                          <td>{new Date(entry.date).toLocaleDateString()}</td>
                          <td>{entry.shift}</td>
                          <td>{entry.quantity}</td>
                          <td>₹{entry.pricePerKl}</td>
                          <td>₹{entry.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddViewDailyEntry;
