import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewMilkType = () => {
  const navigate = useNavigate();
  const [milkTypes, setMilkTypes] = useState([]);

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
    const fetchMilkTypes = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getAllMilkTypes");
        console.log(res.data.data)
        if (res.data.success) {
          setMilkTypes(res.data.data);
        } else {
          toast.error(res.data.message || "Failed to fetch milk types");
        }
      } catch (err) {
        toast.error("Error fetching milk types");
      }
    };

    fetchMilkTypes();
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
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-technology-round-dashboard-image_908915.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            color: "#000",
          }}
        >
          <div style={{ backgroundColor: "rgba(255,255,255,0.95)", padding: "30px", borderRadius: "10px" }}>
            <h3 className="text-center mb-4" style={{ color: "#6A0DAD", fontWeight: "bold" }}>
              Available Milk Types
            </h3>

            {milkTypes.length > 0 ? (
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price per Litre</th>
                  </tr>
                </thead>
                <tbody>
                  {milkTypes.map((milk, index) => (
                    <tr key={milk._id}>
                      <td>{index + 1}</td>
                      <td>{milk.name}</td>
                      <td>₹{milk.pricePerKl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No milk types found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewMilkType;
