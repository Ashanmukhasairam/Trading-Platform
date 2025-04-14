import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {       
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-7 ml-5">
          <img src={imageURL} ></img>
        </div>
     

        <div className="col-4 ml-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} className="mx-5"style={{textDecoration:'none'}} >Try Demo </a>
            <a href={learnMore} style={{textDecoration:'none'}}>Learn More</a>
          </div>
          <div>
            <a className="mx-2"href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />  
            </a>
            <a href={appStore}> 
              <img src="media/images/appstoreBadge.svg" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
