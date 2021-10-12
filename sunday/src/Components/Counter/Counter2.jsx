import React, { useState } from "react";

export const Counter2 = () => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={() => count < 10 && setCounter(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(count * 0)}>Reset</button>
      <button onClick={() => count > 0 && setCounter(count - 1)}>
        Decrement
      </button>
    </div>
  );
};
