import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AllDeliveryBoy = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch delivery boys on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getalluser");
        if (res.data.success) {
          const filteredUsers = res.data.data.filter(
            (user) => user.userType === "deliveryboy"
          );
          setData(filteredUsers);
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
    { name: "REGISTER USER AND DELIVERY BOY", path: "/adminpanel/sign" },
    { name: "ADD MILK TYPE", path: "/adminpanel/milktypes" },
    { name: "VIEW DAILY ENTRY", path: "/view" },
    { name: "GENERATE BILL", path: "/admin" },
    { name: "GENERATE DAILY SALARY OF DELIVERY PERSON", path: "/adminpanel/generatesalary" },
    { name: "ALL USER", path: "/adminpanel/allusers" },
    { name: "ALL DELIVERIES", path: "/adminpanel/alldeliveres" },
      { name: "VIEW ENQUIRY", path: "/brand" },
  ];
const deleteUser = async(user) => {
    try {
        const res = await axios.post("http://localhost:5000/api/deleteUser",{
          id:user._id
        });
        console.log(res)
        if (res.data.success) {
          toast.success(res.data.message || "Deleted the deliveryboy successfully");
          // const filteredUsers = res.data.data.filter(user => user.userType === "user");
          // setData(filteredUsers);
        } else {
          toast.error(res.data.message || "Failed to delete deliveryboy");
        }
      } catch (err) {
        toast.error("Error deleting deliveryboy");
      }
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
              WELCOME ADMIN
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
        <main className="col-md-10 p-4" style={{ backgroundColor: "#f8f9fa" }}>
          <div style={styles.header}>
            <h2 style={styles.title}>All Delivery Boys</h2>
          </div>

          <div style={{ overflowX: "auto", padding: "0 20px" }}>
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Phone</th>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Dlete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr
                    key={user._id}
                    style={index % 2 === 0 ? styles.trEven : styles.trOdd}
                  >
                    <td style={styles.td}>{user.name}</td>
                    <td style={styles.td}>{user.email}</td>
                    <td style={styles.td}>{user.phone}</td>
                    <td style={styles.td}>
                      <code>{user._id}</code>
                    </td>
                      <td style={styles.td}><button onClick={() => deleteUser(user)} style={{color:'blue',border:'none'}}> Dlete deliveryboy</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#1976d2",
    padding: "20px",
    textAlign: "center",
    color: "white",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  title: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "600px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  thead: {
    backgroundColor: "#1565c0",
    color: "#ffffff",
  },
  th: {
    padding: "14px 18px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "16px",
    borderBottom: "1px solid #ccc",
  },
  trEven: {
    backgroundColor: "#f9f9f9",
  },
  trOdd: {
    backgroundColor: "#ffffff",
  },
  td: {
    padding: "12px 18px",
    fontSize: "15px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    borderBottom: "1px solid #eee",
  },
};

export default AllDeliveryBoy;
