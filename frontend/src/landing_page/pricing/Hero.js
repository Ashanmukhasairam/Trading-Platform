import React from "react";

function Hero() {
  return (
    <div className="container text-center  p-5 mt-5">
      <h1 className="text-muted">Charges</h1>
      <h5 className="text-muted pb-5 mb-5">List of all charges and taxes.</h5>
      <div className="row">
        <div className="col-4">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="equity"
            style={{ width:"70%"}}
          />
          <h2 className="pb-3 text-muted">Free equity delivery</h2>
          <p className="text-muted">
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="https://zerodha.com/static/images/other-trades.svg"
            alt="equity"
            style={{ width:"70%"}}
          />
          <h2 className="pb-3 text-muted">Free equity delivery</h2>
          <p className="text-muted">
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="equity"
            style={{ width:"70%"}}
          />
          <h2 className="pb-3 text-muted">Free equity delivery</h2>
          <p className="text-muted">
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
