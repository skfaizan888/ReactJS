import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Nav } from "../Nav/Nav";
import Mainpage from "../mainpage/Mainpage";
import Service from "../Servic/Service";
import Technologypage from "../Technology/Technologypage";
import Aboutus from "../AboutUs/Aboutus";
import Contactpage from "../Contact Us/Contactpage";

export const Homepage = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          {/* <Route path="/" element={<Mainpage />}></Route> */}
          <Route path="/service" element={<Service />}></Route>
          <Route path="/technology" element={<Technologypage />}></Route>
          <Route path="/About" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contactpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
