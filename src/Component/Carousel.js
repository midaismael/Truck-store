import React from "react";
import "./Carousel.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import womanTruck from "../assets/truck-1.jpeg";

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousal-section">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 wom-img"
            src={womanTruck}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              New drivers, Hire driver , Shipper , brokers, Carries, Commercial
              insurance , Smei rucks Auctions ,Dispatching job ,dispatch
              training course , Learner permit course , become owner operator.
              buy truck, sell truck , rent truck , buy trailer, sell trailer ,
              rent trailer , Academy.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 wom-img"
            src={womanTruck}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>New drivers, Hire driver , Shipper , brokers, Carries, Commercial
              insurance , Smei rucks Auctions ,Dispatching job ,dispatch
              training course , Learner permit course , become owner operator.
              buy truck, sell truck , rent truck , buy trailer, sell trailer ,
              rent trailer , Academy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 wom-img"
            src={womanTruck}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
            New drivers, Hire driver , Shipper , brokers, Carries, Commercial
              insurance , Smei rucks Auctions ,Dispatching job ,dispatch
              training course , Learner permit course , become owner operator.
              buy truck, sell truck , rent truck , buy trailer, sell trailer ,
              rent trailer , Academy.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Carousels;
