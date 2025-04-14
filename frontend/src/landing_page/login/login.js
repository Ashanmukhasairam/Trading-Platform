import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // React Router hook for navigation
import './Login.css'; // Import the CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Submitted:", { email, password }); // Debug log

    try {
      // Make sure the URL is correct and accessible
      const response = await axios.post("https://trading-platform-yle5.onrender.com/login", {
        email,
        password,
      }, {
        withCredentials: true,
      });

      console.log("Backend Response:", response); // Debug log for backend response

      if (response.data.token) {
        // Store token in local storage or session storage
        localStorage.setItem("token", response.data.token);
        console.log("Login successful, redirecting...");
        // Redirect to dashboard
        window.location.href = "https://main.d1fdn9xues2nmm.amplifyapp.com"; // ✅ this works
        // This is the route to your dashboard
      }
    } catch (error) {
      console.error("Login Error:", error); // Debug log for error
      setError(
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
