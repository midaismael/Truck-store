import React from "react";
import manTruck from "../assets/truck-222.jpeg";
import manWithTruck from "../assets/truck-44.jpeg";
import womenTruck from "../assets/truck-11.jpeg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="container featured">
      <div className="row">
        <div className="col-md-6 header">
          <h1>BROKER</h1>
          <h2>
            Choose a <span>Broker</span> with Experience. <br />
            Get over <span>55,000</span> brokers information.
          </h2>
          <button>Read More</button>
        </div>
        <div className="col-md-6">
          <img className="pic-man-1" src={manTruck} alt="man-truck" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img className="pic-man-2" src={manWithTruck} alt="man-truck" />
        </div>
        <div className="col-md-6 header">
          <h1>Carriers</h1>
          <h2>
            Finding <span>Carriers</span> shouldn’t be hard. <br />
            We have over <span>250k</span> carriers in our platform..
          </h2>
          <button>Read More</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 header">
          <h1>Shippers</h1>
          <h2>
            Looking for <span>shippers</span> ,Get Access over{" "}
            <span>65,000</span> shippers list.
          </h2>
          <button>Read More</button>
        </div>
        <div className="col-md-6">
          <img className="pic-man-1" src={manTruck} alt="man-truck" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img className="pic-man-2" src={womenTruck} alt="man-truck" />
        </div>
        <div className="col-md-6 header">
          <h1>Hire</h1>
          <h2>
            <span>Hire</span> truck driver.
          </h2>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
