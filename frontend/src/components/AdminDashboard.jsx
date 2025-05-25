import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
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
    { name: "REGISTER USER AND DELIVERY BOY", path: "/adminpanel/sign" },
    { name: "ADD MILK TYPE", path: "/adminpanel/milktypes" },
    { name: "VIEW DAILY ENTRY", path: "/view" },
    { name: "GENERATE BILL", path: "/admin" },
    { name: "GENERATE DAILY SALARY OF DELIVERY PERSON", path: "/adminpanel/generatesalary" },
    { name: "ALL USER", path: "/adminpanel/allusers" },
    { name: "ALL DELEIVERIES", path: "/adminpanel/alldeliveres" },
    { name: "VIEW ENQUIRY", path: "/brand" },
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
        <main className="col-md-10 p-4" style={{ backgroundColor: "white" }}>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
