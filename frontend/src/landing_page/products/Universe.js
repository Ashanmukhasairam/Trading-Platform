import React, { memo } from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="pt-5 pb-3">The Zerodha Universe</h1>
        <h5>
          Extend your trading and investment experience even further with our
          partner platforms
        </h5>
        <div className="mx-5 text-center pr-5">
        <div className="row mx-5 text-center pr-5 pt-5">
          <div className="col-4 mr-5 p-5 ">
            <img src="media/images/smallcaseLogo.png" alt="smallcase" />
            <p className="small-text text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/images/streakLogo.png" style={{width:"70%"}} alt="smallcase" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/images/smallcaseLogo.png" alt="smallcase" />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mx-5">
          <div className="col-4 mr-5 p-5 ">
            <img src="media/images/GoldenpiLogo.png" alt="smallcase" />
            <p className="small-text text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/images/dittoLogo.png" style={{width:"60%"}}alt="smallcase" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/images/smallcaseLogo.png" alt="smallcase" />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%", margin: "0 auto"}}>
                Signup Now
               </button>
      </div>
     
    </div>
  );
}

export default Universe;
