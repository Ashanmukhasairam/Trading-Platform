import React from "react";

function Hero() {
  return (
    <div className="container text-center border-bottom  p-5 mt-5">
      <h1 className=" ">Zerodha Products</h1>
      <h5 className="text-muted mb-3">Sleek, modern, and intuitive trading platforms</h5>
      <p className="text-muted mb-5" >
      Check out our investment <a href="/" style={{textDecoration:'none'}}> offerings→</a> 
      </p>
    </div>
  );
}

export default Hero;
