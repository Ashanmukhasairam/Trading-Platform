import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row  text-center">
        <h1 className="fs-2  ">People.</h1>
      </div>

      <div className="row p-5" style={{ lineHeight: "1.8" }}>
        <div className="col-2 "> </div>
        <div className="col-4 " >
          <img src="media/images/nithinKamath.jpg" className="mx-auto d-block mb-3" style={{borderRadius:'100%',width:'60%',alignContent:'center'}}></img>
          <h4 className="text-center text-muted">nithin kamath</h4>
          <h5 className="text-center text-muted">Founder, CEO</h5>
        </div>

        <div className="col-6 ">
          <p className="m-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="m-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="m-3">Playing basketball is his zen.</p>

          <p className="m-3">
            {" "}
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              HomePage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Twitter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
