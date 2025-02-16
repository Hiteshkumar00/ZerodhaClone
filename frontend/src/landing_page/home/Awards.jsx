import React from "react";

function Awards() {
  return ( 
    <div className="row mb-5">
      <div className="col-md-6 mb-3 p-5">
        <img style={{width: "90%"}} src="media/images/largestBroker.svg" alt="Awards" />
      </div>
      <div className="col-md-6 p-5">
        <h1 className="mb-3">Largest stock broker in India</h1>
        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
        <div className="row mt-5 mb-3">
          <div className="col-md-6">
            <ul>
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
        </div>
        <img style={{width: "90%"}} src="media/images/pressLogos.png" alt="Press Image" />
      </div>
    </div>
  );
}

export default Awards;