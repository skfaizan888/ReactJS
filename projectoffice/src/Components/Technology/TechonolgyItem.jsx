import React from "react";
import { Card } from "react-bootstrap";
import "./Techonlogye.css";

export const TechonolgyItem = ({ item }) => {
  return (
    <div className="content-img-card">
      <Card>
        <Card.Img className="content-image" variant="top" src={item.img} />
      </Card>
    </div>
  );
};
