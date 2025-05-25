import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewEnquiry = () => {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);

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
    { name: "ALL DELEIVERIES", path: "/adminpanel/alldeliveres" },
    { name: "VIEW ENQUIRY", path: "/brand" },
  ];

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getAllEnquiries");
        console.log(res.data.data)
        if (res.data.success) {
          setEnquiries(res.data.data);
        } else {
          toast.error(res.data.message || "Failed to fetch enquiries");
        }
      } catch (err) {
        toast.error("Server error while fetching enquiries");
      }
    };

    fetchEnquiries();
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
                      cursor: "pointer"
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
        <main className="col-md-10 p-4" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-center text-primary mb-4">All Enquiries</h3>

            {enquiries.length === 0 ? (
              <p className="text-center text-muted">No enquiries found.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry._id}>
                        <td>{enquiry.name}</td>
                        <td>{enquiry.email}</td>
                        <td>{enquiry.contact}</td>
                        <td>{enquiry.message}</td>
                        <td>{new Date(enquiry.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewEnquiry;
