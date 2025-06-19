import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const GetStarted = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "", email: "", password: "", phone: "", address: "", userType: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, phone, address, userType } = formData;

        if (!name || !email || !password || !phone || !address || !userType) {
            toast.warn("All fields are required");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/createuser", formData);

            if (!res.data.success || res.data.message?.toLowerCase().includes("already exist")) {
                toast.error("User already exists");
                return;
            }

            toast.success(res.data.message || "User created successfully");
            // setTimeout(() => navigate("/log"), 2000);
        } catch (err) {
            console.error("Error:", err.response?.data);
            toast.error(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div style={containerStyle}>
            

 const navItems = [

            
            <div style={overlayStyle}></div>
            <div style={cardStyle}>
                <h2 style={{ color: "#333", marginBottom: "20px", textAlign: "center" }}>Register Now</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                    <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                    <input name="phone" type="tel" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
                    <input name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required style={inputStyle} />
                    <div style={{ position: "relative" }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, paddingRight: "80px" }}
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} style={toggleStyle}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <select name="userType" value={formData.userType} onChange={handleChange} required style={{ ...inputStyle, color: formData.userType ? "black" : "gray" }}>
                        <option value="">Select Role</option>
                        <option value="deliveryboy">Delivery Boy</option>
                        <option value="user">User</option>
                    </select>
                    <button type="submit" style={submitStyle}>Sign Up</button>
                    <button type="button" onClick={() => navigate("/")} style={submitStyle}>Back</button>
                    <p style={{ marginTop: "15px", textAlign: "center", color: "#666" }}>
                        Already have an account? <Link to="/log" style={{ color: "red", fontWeight: "bold" }}>Login</Link>
                    </p>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
};

// 🌄 Background Image with Dark Overlay
const containerStyle = {
    minHeight: "100vh",
    backgroundImage: "url('/assets/img/background.png')", // Place image in public/assets/img
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    position: "relative",
};

const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
};

// 🧾 Form Card Style
const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "30px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
    padding: "40px",
    zIndex: 2,
    position: "relative",
};

const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
};

const submitStyle = {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(90deg, rgb(2, 2, 2), rgba(222, 255, 77, 0.9))",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
};

const toggleStyle = {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer",
};

export default GetStarted;

