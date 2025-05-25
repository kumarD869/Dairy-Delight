import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const GenerateSalaryBill = () => {
  const [form, setForm] = useState({
    deliveryPersonId: '',
    date: '',
    salaryAmount: '',
    totalDeliveries: '',
  });

  const [deliveryPersons, setDeliveryPersons] = useState([]);
  const [bill, setBill] = useState(null);

  // Fetch delivery persons on mount
  useEffect(() => {
  const fetchDeliveryBoys = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/getalluser');
      if (res.data.success) {
        // Filter deliveryboys on frontend
        const deliveryBoys = res.data.data.filter(user => user.userType === "deliveryboy");
        setDeliveryPersons(deliveryBoys);
      } else {
        toast.error(res.data.message || "Failed to fetch users");
      }
    } catch (err) {
      toast.error("Server error while fetching users");
    }
  };

  fetchDeliveryBoys();
}, []);



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/createSalary', form);
      if (res.data.success) {
        toast.success('Salary bill generated successfully!');
        setBill(res.data.data);
      } else {
        toast.error(res.data.message || 'Failed to generate bill');
      }
    } catch (err) {
      toast.error('Network error while creating salary bill');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ToastContainer />
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Generate Salary Bill</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="deliveryPersonId" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Delivery Person
          </label>
          <select
            name="deliveryPersonId"
            value={form.deliveryPersonId}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option value="">-- Select Delivery Person --</option>
            {deliveryPersons.map((person) => (
              <option key={person._id} value={person._id}>
                {person.name} ({person.email})
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="date" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="totalDeliveries" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Total Deliveries
          </label>
          <input
            type="number"
            name="totalDeliveries"
            value={form.totalDeliveries}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="salaryAmount" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Salary Amount (₹)
          </label>
          <input
            type="number"
            name="salaryAmount"
            value={form.salaryAmount}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Generate Bill
        </button>
      </form>

      {bill && (
        <div
          style={{
            maxWidth: '500px',
            margin: '30px auto',
            padding: '20px',
            border: '2px dashed #28a745',
            borderRadius: '10px',
            backgroundColor: '#eaffea',
            textAlign: 'left'
          }}
        >
          <h3 style={{ textAlign: 'center', color: '#28a745' }}>Salary Bill</h3>
          <p><strong>Delivery Person:</strong> {bill.deliveryPersonId?.name || bill.deliveryPersonId}</p>
          <p><strong>Date:</strong> {new Date(bill.date).toLocaleDateString()}</p>
          <p><strong>Total Deliveries:</strong> {bill.totalDeliveries}</p>
          <p><strong>Salary Amount:</strong> ₹{bill.salaryAmount}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateSalaryBill;
