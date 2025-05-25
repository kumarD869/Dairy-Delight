import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEnquiry = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/log");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    setSuccessMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/createEnquiry", form);
       console.log(res.data)
      if (res.data.success) {
        setSuccessMessage("Enquiry submitted successfully!");
        setForm({
          name: "",
          email: "",
          contact: "",
          subject: "",
          message: ""
        });
      } else {
        setError(res.data.message || "Submission failed");
      }
    } catch (err) {
      setError("Server error while submitting enquiry");
    }
  };

  const navItems = [
    { name: "VIEW PROFILE", path: "/view/user/profile" },
    { name: "VIEW MILK TYPE", path: "/view/milk/type" },
    { name: "VIEW DAILY ENTRY", path: "/view/daily/entry" },
    { name: "VIEW MONTHLY BILL", path: "/view/monthly/bill" },
    { name: "ADD ENQUIRY", path: "/add/enquiry" },
    { name: "MANAGE/PROFILE", path: "/manage" }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "#FFFFFF",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd"
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
        <main
          className="col-md-10 p-4"
          style={{
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-technology-round-dashboard-image_908915.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            color: "#000"
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.9)", padding: "20px", borderRadius: "8px" }}>
            <h3 className="text-center mb-4" style={{ color: "#6A0DAD", fontWeight: "bold" }}>
              Submit Enquiry
            </h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="4"
                  required
                />
              </div>
              <div className="col-12">
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit Enquiry
                </button>
              </div>
            </div>

            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddEnquiry;
