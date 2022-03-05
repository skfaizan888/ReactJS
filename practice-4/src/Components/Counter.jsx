import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    document.title = `Counter (${count})`;
    alert("My Counter CLick");
  }, [count]);
  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter:{count}
      </Button>
      <Button
        onClick={() => {
          setCounts(counts + 1);
        }}
      >
        Counter:{counts}
      </Button>
    </div>
  );
};
