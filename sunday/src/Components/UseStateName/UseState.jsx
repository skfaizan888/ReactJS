import { React, useState } from "react";

export const UseSate = () => {
  const [data, setData] = useState({ name: "", age: "", city: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) => setData({ ...data, city: e.target.value })}
      />

      <h4>Name:{data.name}</h4>
      <h4>Age:{data.age}</h4>
      <h4>city:{data.city}</h4>
    </div>
  );
};
