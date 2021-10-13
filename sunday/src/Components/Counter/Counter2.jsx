import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Counter2 = () => {
  const [count, setCount] = useState("");
  return (
    <div>
      <h1>Counter:{count}</h1>
      <Button
        style={{ padding: "5px", margin: "20px" }}
        variant="danger"
        onClick={() => count < 10 && setCount(count + 1)}
      >
        +
      </Button>
      <Button variant="warning" onClick={() => setCount(count * 0)}>
        Reset
      </Button>{" "}
      <Button
        style={{ padding: "5px", margin: "20px" }}
        variant="danger"
        onClick={() => count > 0 && setCount(count - 1)}
      >
        -
      </Button>
    </div>
  );
};
