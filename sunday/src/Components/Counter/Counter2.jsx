import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";

export const Counter2 = () => {
  const [count, setCount] = useState("");
  return (
    <div>
      <h1>Counter:{count}</h1>
      <Button
        style={{ padding: "5px", margin: "20px" }}
        variant="danger"
        onClick={() => count < 20 && setCount(count + 1)}
      >
        <b>+</b>
      </Button>
      <Row></Row>
      <Button variant="warning" onClick={() => setCount(count * 0)}>
        Reset
      </Button>{" "}
      <Row></Row>
      <Button
        style={{ padding: "5px", margin: "20px" }}
        variant="danger"
        onClick={() => count > 0 && setCount(count - 1)}
      >
        <b>-</b>
      </Button>
    </div>
  );
};
