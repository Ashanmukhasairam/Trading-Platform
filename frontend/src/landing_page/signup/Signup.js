import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onClose = () => {
    window.location.href = "/";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://trading-platform-yle5.onrender.com/signup', form, {
        withCredentials: true,
      });
      console.log("Signup success:", response.data);
      onClose();
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-modal">
      <div className="signup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
