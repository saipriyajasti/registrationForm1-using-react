import React, { useState } from 'react';
import './Formstyle.css';

export default function Form() {
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    let isValid = true;

 
    if (!formData.username) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    }

  
    setFormErrors(errors);

 
    if (isValid) {
      setSuccessMessage('Registration successful!');
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    }
  };

   
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>

        <button type="submit">Register</button>

        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
}
