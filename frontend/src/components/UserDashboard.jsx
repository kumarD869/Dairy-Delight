import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // Optional authentication check
  // useEffect(() => {
  //   const authenticate = sessionStorage.getItem("auth");
  //   if (!authenticate) {
  //     navigate("/login");
  //   }
  // }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/log");
  };

  const navItems = [
    { name: "VIEW PROFILE", path: "/view/user/profile" },
    { name: "VIEW MILK TYPE", path: "/view/milk/type" },
    { name: "VIEW DAILY ENTRY", path: "/view/daily/entry" },
    { name: "VIEW MONTHLY BILL", path: "/view/monthly/bill" },
 
    { name: "ADD ENQUIRY", path: "/add/enquiry" },
    { name: "MANAGE/PROFILE", path: "/manage" },

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
    backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-technology-round-dashboard-image_908915.jpg')`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: '#000' // Optional: Ensure text remains visible
  }}
>

</main>

    </div>
    </div>
  );
};

export default UserDashboard;
