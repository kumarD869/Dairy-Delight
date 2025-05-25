import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewUserProfile = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const [user, setUser] = useState(null);

  const navItems = [
    { name: "VIEW PROFILE", path: "/view/user/profile" },
    { name: "VIEW MILK TYPE", path: "/view/milk/type" },
    { name: "VIEW DAILY ENTRY", path: "/view/daily/entry" },
    { name: "VIEW MONTHLY BILL", path: "/view/monthly/bill" },
    { name: "ADD ENQUIRY", path: "/add/enquiry" },
    { name: "MANAGE/PROFILE", path: "/manage" },
  ];

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getuserby", { id: userId });
        if (res.data.success) {
          setUser(res.data.data);
        } else {
          toast.error(res.data.message || "Failed to fetch profile");
        }
      } catch {
        toast.error("Error fetching profile");
      }
    };

    if (userId) {
      fetchUserProfile();
    } else {
      toast.error("Please log in");
      navigate("/log");
    }
  }, [navigate, userId]);

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
            backgroundImage: `url('https:/png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-technology-round-dashboard-image_908915.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            color: '#000'
          }}
        >
          <div style={{ backgroundColor: 'rgba(255,255,255,0.95)', padding: '30px', borderRadius: '10px' }}>
            <h3 className="text-center mb-4" style={{ color: "#6A0DAD", fontWeight: "bold" }}>
              User Profile
            </h3>

            {user ? (
              <div className="row">
                <div className="col-md-6 mb-3">
                  <strong>Name:</strong> {user.name}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Email:</strong> {user.email}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Phone:</strong> {user.phone}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Address:</strong> {user.address}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>User Type:</strong> {user.userType}
                </div>
              </div>
            ) : (
              <div>Loading profile...</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewUserProfile;
