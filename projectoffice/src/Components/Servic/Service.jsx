import React from "react";
import { Data } from "../../Service/Data";
import "./ServiceItm.css";
import { ServiceItem } from "./ServiceItem";

const Service = () => {
  return (
    <div className="service-main">
      <div className="padding"></div>
      <div className="ser-our">
        <p>Our Services</p>
      </div>
      <div>
        {Data.map((item) => (
          <ServiceItem img={item.img} title={item.title} parag={item.parag} />
        ))}
      </div>
    </div>
  );
};

export default Service;
