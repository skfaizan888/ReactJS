import React from "react";
import { Dashboard } from "./components/Dashboard";
import { AddPatient } from "./components/AddPatient";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <Dashboard />
      <AddPatient />
    </div>
  );
}

export default App;
