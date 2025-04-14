import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");  // Redirect to the /signup page
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 text-muted">Open a Zerodha Account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>

        <button
          className="p-2 mt-3 btn btn-primary"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}  // Attach the click handler
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
  