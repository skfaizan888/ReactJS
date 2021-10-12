import React, { useState } from "react";

export const Button2 = () => {
  const [name, setName] = useState(" ");
  const [age, setAge] = useState(" ");
  const [message, setMessage] = useState(" ");
  const handleClick = () => {
    document.getElementById("name").innerHTML = `Your Name: ${name}`;
    document.getElementById("age").innerHTML = `Your Age: ${age}`;
    document.getElementById("message").innerHTML = `Your Message: ${message}`;
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Messege"
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={() => handleClick()}>Submit</button>
      <br />
      <h4 id="name">Your Name :</h4>
      <h4 id="age">Your Age :</h4>
      <h4 id="message">Your Message :</h4>
    </div>
  );
};
