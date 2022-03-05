import React from "react";
import "./Techonlogye.css";
import { DataImg } from "../../Service/DataImg";

import { TechonolgyItem } from "./TechonolgyItem";

const Technologypage = () => {
  return (
    <div>
      <div content-image>
        <img src="https://wallpaperaccess.com/full/4142231.jpg" alt="" />
      </div>
      <div className="content-Heading">
        <p>Technologies we expertise in</p>
      </div>
      <div className="Content-cardd-Id">
        {DataImg.map((item) => (
          <TechonolgyItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Technologypage;
