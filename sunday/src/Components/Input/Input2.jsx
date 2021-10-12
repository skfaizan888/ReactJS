import React, { useState } from "react";

export const Input2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(" ");
  const [message, setMessage] = useState(" ");
  return (
    <div>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Your Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <h4>Your Name :{name}</h4>
      <h4>Your Age :{age}</h4>
      <h4>Your Message :{message}</h4>
    </div>
  );
};
