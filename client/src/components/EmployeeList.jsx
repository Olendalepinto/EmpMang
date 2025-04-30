import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error('Error fetching employees:', err));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            <strong>{emp.firstname} {emp.lastname}</strong> — {emp.email} — {emp.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;