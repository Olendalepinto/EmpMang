import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    job: '',
    dateOfJoining: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', formData);
      alert('Employee added successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        job: '',
        dateOfJoining: '',
        image: ''
      });
    } catch (err) {
      console.error(err);
      alert('Error adding employee');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Add New Employee</h2>
      {Object.keys(formData).map((key) => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <label>{key}</label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
