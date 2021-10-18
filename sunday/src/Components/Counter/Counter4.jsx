import React, { useState } from "react";

function Counter4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter=</h1>
      <button onClick={() => setCount(count + 1)}>Decrement{count}</button>
    </div>
  );
}
export default Counter4;
