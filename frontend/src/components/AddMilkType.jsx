import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddMilkType() {
  const [milkTypes, setMilkTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  const fetchMilkTypes = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/getAllMilkTypes');
      if (res.data.success) {
        toast.success(res.data.message || "Fetched milk types successfully!");
        setMilkTypes(res.data.data);
      } else {
        toast.error(res.data.message || "Failed to fetch milk types");
      }
    } catch (error) {
      toast.error("Network Error while fetching milk types");
    }
  };

  useEffect(() => {
    fetchMilkTypes();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addMilk = async (e) => {
    e.preventDefault();
    const { name, price, description } = formData;
    try {
      const res = await axios.post('http://localhost:5000/api/createMilkType', {
        name,
        pricePerKl: parseFloat(price),
        description
      });
      if (res.data.success) {
        toast.success(res.data.message || "Milk type added successfully!");
        setFormData({ name: '', price: '', description: '' });
        fetchMilkTypes();
      } else {
        toast.error(res.data.message || "Failed to add milk type");
      }
    } catch (error) {
      toast.error("Network Error while adding milk type");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f8f9fa' }}>
      <ToastContainer />

      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#6a0dad', fontWeight: 'bold' }}>Milk Type Management</h2>
        <p style={{ color: '#555' }}>Add new milk types and view existing ones below.</p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <form onSubmit={addMilk} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          backgroundColor: '#fff',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <select
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          >
            <option value="">Select milk type</option>
            <option value="cow">Cow</option>
            <option value="buffalo">Buffalo</option>
            <option value="goat">Goat</option>
          </select>

          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='Price per litre'
            required
            min="0"
            step="0.01"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />

          <input
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Description'
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />

          <button type='submit' style={{
            backgroundColor: '#6a0dad',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            ➕ Add Milk Type
          </button>
        </form>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {milkTypes.map((milk, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '260px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
            textAlign: 'left',
            borderLeft: '5px solid #6a0dad'
          }}>
            <h4 style={{ marginBottom: '10px', color: '#6a0dad' }}>{milk.name.toUpperCase()}</h4>
            <p><strong>Price:</strong> ₹{milk.pricePerKl} per litre</p>
            <p><strong>Description:</strong> {milk.description || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddMilkType;
