import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ViewCustomer = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getalluser");
        console.log(res)
        if (res.data.success) {
          const filteredUsers = res.data.data.filter(user => user.userType === "user");
          setUsers(filteredUsers);
        } else {
          toast.error(res.data.message || "Failed to fetch users");
        }
      } catch (err) {
        toast.error("Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/log");
  };

  const navItems = [
    { name: "VIEW CUSTOMER", path: "/view/customer" },
    { name: "ADD/VIEW DAILY ENTRY", path: "/add/view/daily/entry" },
    { name: "MANAGE PROFILE", path: "/manage/profile" },
  ];

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
            backgroundSize: "cover",
            backgroundPosition: "100% 100%",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            overflowY: "auto",
          }}
        >
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "20px",
            borderRadius: "10px",
            maxHeight: "90vh",
            overflowY: "auto"
          }}>
            <h2 className="text-center" style={{ color: "#6A0DAD", fontWeight: "bold" }}>
              Registered Customers
            </h2>

            <div className="row mt-4">
              {users.map((user, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-primary">{user.name}</h5>
                      <p className="card-text"><strong>Email:</strong> {user.email}</p>
                      <p className="card-text"><strong>Phone:</strong> {user.phone || "N/A"}</p>
                      <p className="card-text"><strong>Address:</strong> {user.address || "N/A"}</p>
                     
                    </div>
                  </div>
                </div>
              ))}
              {users.length === 0 && (
                <div className="col-12 text-center text-muted">No users found.</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewCustomer;
