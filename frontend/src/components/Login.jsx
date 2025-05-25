import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !userType) {
      toast.warn("All fields including user type are required");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/loginuser', {
        email,
        password,
        userType
      });
      console.log(res.data)

      if (res.data.success) {
        toast.success(res.data.message || "Login successful!");
        const { user, token } = res.data;

        console.log(user)
        localStorage.setItem("token", token);
        localStorage.setItem("userType", user.userType);
        sessionStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);



        // Redirect based on userType
        setTimeout(() => {
          if (userType === "admin") {
            navigate('/adminpanel');
          } else if (userType === "deliveryboy") {
            navigate('/deliveryboy');
          } else {
            navigate('/user/dashboard');
          }
        }, 2000);
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err.response?.data);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            style={styles.input}
            required
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="deliveryboy">Delivery Boy</option>
            <option value="user">User</option>
          </select>
          <button type="submit" style={styles.button}>Log In</button>
          <div style={styles.extraOptions}>
            <a href="/forget/password" style={styles.link}>Forgot Password?</a> | 
            <a href="/sign" style={styles.link}> Don't have an account? Sign Up</a>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(/assets/img/background.png)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backdropFilter: 'blur(8px)',
  
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.85)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.98)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
    fontSize: '26px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    marginBottom: '20px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    color: 'black',
  },
  button: {
    padding: '14px',
    fontSize: '18px',
    background: 'linear-gradient(90deg, #A8E063, #F7FF00)',
    border: 'none',
    borderRadius: '8px',
    color: 'black',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  extraOptions: {
    marginTop: '15px',
    fontSize: '14px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    margin: '0 5px',
  },
};

export default Login;

