import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";

interface isState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<isState["people"]>([]);

  return (
    <div className="App">
      <h1>React with typeScript</h1>
      <Lists people={people} />
    </div>
  );
}

export default App;
