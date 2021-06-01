import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(1);
  };
  return (
    <div className="App">
      <h1>React with typeScript</h1>
    </div>
  );
}

export default App;
