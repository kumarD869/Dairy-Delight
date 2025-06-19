
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllUsers = () => {
  const [data, setData] = useState([]);

    // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/getalluser");
        console.log(res)
        if (res.data.success) {
          const filteredUsers = res.data.data.filter(user => user.userType === "user");
          setData(filteredUsers);
        } else {
          toast.error(res.data.message || "Failed to fetch users");
        }
      } catch (err) {
        toast.error("Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async(user) => {
    try {
        const res = await axios.post("http://localhost:5000/api/deleteUser",{
          id:user._id
        });
        console.log(res)
        if (res.data.success) {
          toast.success(res.data.message || "Deleted the user successfully");
          // const filteredUsers = res.data.data.filter(user => user.userType === "user");
          // setData(filteredUsers);
        } else {
          toast.error(res.data.message || "Failed to delete user");
        }
      } catch (err) {
        toast.error("Error deleting users");
      }
  };

  return (
    <>
      <ToastContainer />
      <div style={styles.header}>
        <h2 style={styles.title}>All Users</h2>
      </div>

      <div style={{ overflowX: 'auto', padding: '0 20px' }}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={user._id}
                style={index % 2 === 0 ? styles.trEven : styles.trOdd}
              >
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.phone}</td>
                <td style={styles.td}><code>{user._id}</code></td>
                <td style={styles.td}><button onClick={() => deleteUser(user)} style={{color:'blue',border:'none'}}>Delete User</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const styles = {
  header: {
    backgroundColor: '#1976d2',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    marginBottom: '10px',
  },
  title: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '600px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  thead: {
    backgroundColor: '#1565c0',
    color: '#ffffff',
  },
  th: {
    padding: '14px 18px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '16px',
    borderBottom: '1px solid #ccc',
  },
  trEven: {
    backgroundColor: '#f9f9f9',
  },
  trOdd: {
    backgroundColor: '#ffffff',
  },
  td: {
    padding: '12px 18px',
    fontSize: '15px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    borderBottom: '1px solid #eee',
  },
};

export default AllUsers;






