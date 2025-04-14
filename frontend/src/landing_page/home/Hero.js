import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");  // Redirect to the /signup page
  };

  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='HeroImage' className='mb-5' />
        <h1 className='mt-5 text-muted'>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button
          className='p-2 btn btn-primary'
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}  // Attach the click handler
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
