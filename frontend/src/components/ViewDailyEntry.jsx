import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewDailyEntry = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

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

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getAllDairyEntries");
        if (res.data.success) {
          setEntries(res.data.data || []);
        } else {
          toast.error("Failed to fetch entries");
        }
      } catch (err) {
        toast.error("Error loading entries");
      }
    };

    fetchEntries();
  }, []);

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
              WELCOME USER DASHBOARD
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
           
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            color: "#000",
          }}
        >
          <div style={{ backgroundColor: "rgba(255,255,255,0.95)", padding: "20px", borderRadius: "10px" }}>
            <h3 className="text-center mb-4" style={{ color: "#6A0DAD", fontWeight: "bold" }}>
              Daily Dairy Entries
            </h3>

            {entries.length > 0 ? (
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Milk Type</th>
                    <th>Shift</th>
                    <th>Quantity (L)</th>
                    <th>Price/L</th>
                    <th>Total Price</th>
                    <th>Delivered By</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, index) => (
                    <tr key={entry._id}>
                      <td>{index + 1}</td>
                      <td>{new Date(entry.date).toLocaleDateString()}</td>
                      <td>{entry.customerId?.name || "N/A"}</td>
                      <td>{entry.milkTypeId?.name || "N/A"}</td>
                      <td>{entry.shift}</td>
                      <td>{entry.quantity}</td>
                      <td>₹{entry.pricePerKl}</td>
                      <td>₹{entry.totalPrice}</td>
                      <td>{entry.deliveryPersonId?.name || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No entries available.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewDailyEntry;
