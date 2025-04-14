import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
    googlePlay,
    appStore,
  }) {
  return (
    <div className="container ">
      <div className="row p-5 ">
        <div className="col-4  m-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
            </a>
          </div>
        </div>
        
        <div className="col-6 pb-5 ml-3">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
