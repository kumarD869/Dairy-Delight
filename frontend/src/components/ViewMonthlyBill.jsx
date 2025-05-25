import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewMonthlyBill = () => {
  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  const [error, setError] = useState("");

  const customerId = sessionStorage.getItem("userId");

  const navItems = [
    { name: "VIEW PROFILE", path: "/view/user/profile" },
    { name: "VIEW MILK TYPE", path: "/view/milk/type" },
    { name: "VIEW DAILY ENTRY", path: "/view/daily/entry" },
    { name: "VIEW MONTHLY BILL", path: "/view/monthly/bill" },
    { name: "ADD ENQUIRY", path: "/add/enquiry" },
    { name: "MANAGE/PROFILE", path: "/manage" },
  ];

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/log");
  };

  const fetchBills = async () => {
    setError("");
    setBills([]);

    try {
      const res = await axios.post("http://localhost:5000/api/getMonthlyBillsByCustomerId", {
        customerId,
      });

      if (res.data.success) {
        setBills(res.data.data);
      } else {
        setError(res.data.message || "No bills found");
      }
    } catch (err) {
      setError("Error fetching bills");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-2 d-flex flex-column justify-content-between" style={{ backgroundColor: "#fff", padding: "20px", height: "100vh", borderRight: "1px solid #ddd" }}>
          <div>
            <h4 className="text-center mb-4" style={{ color: "purple", fontWeight: "bolder" }}>
              WELCOME USER DASHBOARD
            </h4>
            <ul className="nav flex-column">
              {navItems.map((item) => (
                <li key={item.name} className="mb-3">
                  <button onClick={() => navigate(item.path)} style={{ width: "100%", backgroundColor: "#6A0DAD", color: "white", border: "none", padding: "10px", borderRadius: "5px", fontWeight: "bolder" }}>
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
        <main className="col-md-10 p-4" style={{ background: "#f0f0f0", minHeight: "100vh" }}>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-center mb-4 text-primary">Your Monthly Bills</h3>
            <div className="text-center mb-3">
              <button className="btn btn-success" onClick={fetchBills}>
                Fetch My Bills
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {bills.length > 0 && (
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Total Quantity (L)</th>
                    <th>Total Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((bill) => (
                    <tr key={bill._id}>
                      <td>{bill.month}</td>
                      <td>{bill.year}</td>
                      <td>{bill.totalQuantity}</td>
                      <td>{bill.totalAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewMonthlyBill;
