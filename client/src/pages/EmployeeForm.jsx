import { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    job: "",
    dateOfJoining: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/employee/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Employee added successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        job: "",
        dateOfJoining: "",
        image: "",
      });
    } else {
      alert("Error: Internal Server Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input type="text" name="job" value={formData.job} onChange={handleChange} placeholder="Job Title" required />
      <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
