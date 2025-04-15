import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"; // React Router hooks
import './Login.css'; // Import the CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Flash message logic
  useEffect(() => {
    if (location.state?.successMessage) {
      setFlashMessage(location.state.successMessage);

      // Remove flash after 3 seconds
      const timer = setTimeout(() => setFlashMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Submitted:", { email, password }); // Debug log

    try {
      const response = await axios.post(
        "https://trading-platform-yle5.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );

      console.log("Backend Response:", response); // Debug log

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Login successful, redirecting...");
        window.location.href = "https://main.d1fdn9xues2nmm.amplifyapp.com/holdings";
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.response ? error.response.data.message : "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {flashMessage && (
          <div className="flash-message">
            {flashMessage}
          </div>
        )}

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
