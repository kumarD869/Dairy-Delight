import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DeliveryDashboard = () => {
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
    { name: "VIEW CUSTOMER", path: "/view/customer" },
    { name: "ADD/VIEW DAILY ENTRY", path: "/add/view/daily/entry" },
    { name: "MANAGE PROFILE", path: "/manage/profile" },
    

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
    backgroundImage: 'url(/assets/img/delivery.png)', // Replace with your image path
    backgroundSize: '100% 100%',
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

export default DeliveryDashboard
