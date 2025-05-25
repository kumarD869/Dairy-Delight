import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageDeliveryPersonProfile = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    userType: "",
  });

  const navItems = [
     { name: "VIEW CUSTOMER", path: "/view/customer" },
    { name: "ADD/VIEW DAILY ENTRY", path: "/add/view/daily/entry" },
    { name: "MANAGE PROFILE", path: "/manage/profile" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getuserby", { id: userId });
        console.log(res)
        const user = res.data.data;
        if (user.userType === "deliveryboy") {
          setUserData({
            id: user._id,
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
            userType: user.userType,
          });
        } else {
          toast.error("You are not authorized to update this profile.");
        //   navigate("/log");
        }
      } catch (err) {
        toast.error("Failed to fetch profile.");
      }
    };

    if (userId) {
      fetchUser();
    } else {
      navigate("/log");
    }
  }, [userId, navigate]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/updateUserById", userData);
      if (res.data.success) {
        toast.success("Profile updated successfully.");
      } else {
        toast.error(res.data.message || "Failed to update profile.");
      }
    } catch {
      toast.error("Error updating profile.");
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
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-technology-round-dashboard-image_908915.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            color: "#000",
          }}
        >
          <div
            className="container"
            style={{ backgroundColor: "rgba(255,255,255,0.95)", padding: "30px", borderRadius: "10px" }}
          >
            <h3 className="text-center mb-4" style={{ color: "#6A0DAD", fontWeight: "bold" }}>
              Manage Delivery Person Profile
            </h3>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={userData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={userData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={userData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success w-100">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageDeliveryPersonProfile;
