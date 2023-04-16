import React from "react";
import "./Sale.css";
import Trucks from '../assets/istockphoto.jpg';

const Sale = () => {
  return (
    <div className="sale">
      <div className="row">
        <div className="col-md-6 card-left">Buy Truck</div>
        <div className="col-md-6 card-right">Buy Truck</div>
      </div>
      <div className="row">
        <div className="col-md-6 card-left">Rent Truck</div>
        <div className="col-md-6 card-right">Rent Truck</div>
      </div>
      <div className="row">
        <div className="col-md-6 card-left">Sale Truck</div>
        <div className="col-md-6 card-right">Sale Truck</div>
      </div>
      <div className="row">
        <div className="col-md-12 trucks">
            <img src={Trucks} alt="trucks" />
        </div>
      </div>
    </div>
  );
};
export default Sale;
