import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const CounterUsestate = () => {
  const [items, setItems] = useState([]);
  const additem = () => {
    setItems([
      ...items,
      { id: items.length, number: Math.floor(Math.random() * 20) + 1 },
    ]);
  };

  return (
    <div>
      <h3>
        <u>UseState With Array</u>
      </h3>
      <Button onClick={additem}> ADD ITEM </Button>
      {items.map((num) => (
        <li>{num.number}</li>
      ))}
    </div>
  );
};
