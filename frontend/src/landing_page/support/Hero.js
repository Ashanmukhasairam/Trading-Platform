import React from "react";

function Hero() {
  return (
    <div className="container-fluid pt-3 pb-5 " id="supportHero">
      <div className="mx-5 px-5 pb-5" >
        <div className=" pt-3 mx-5  " id="supportWrapper">
          <h5>Support portal</h5>
          <a href="/">Track Tickets</a>
        </div>
        <div className=" row  mt-5 mx-5 " id="supportHeroWrapper">
          <div className="col-8 px-5">
            <h4 className="mb-5">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input className="mb-3" placeholder="Eg.how do I activate F&O" />
            <br />
            <a href="" className="px-2">
              Track account opening{" "}
            </a>
            <a href="" className="px-2">
              Track segment activation{" "}
            </a>
            <a href="" className="px-2">
              Intraday margins{" "}
            </a>
            <br />
            <a href="" className="mx-2 pt-3">
              Kite user manual
            </a>
          </div>
          <div className="col-4 mt-5 ">
            <h5 style={{ fontSize: "120%" }}>Featured</h5>
            <a href="" style={{ fontSize: "90%" }}>
              1. Surveillance measure on scrips - March 2025{" "}
            </a>
            <br />
            <a href="" style={{ fontSize: "90%" }}>
              2.Current Takeovers and Delisting – March 2025{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
