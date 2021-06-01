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
  const [people, setPeople] = useState<isState["people"]>([
    {
      name: "debasis",
      url: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      age: 24,
      note: "this is note",
    },
  ]);

  return (
    <div className="App">
      <h1>React with typeScript</h1>
      <Lists people={people} />
    </div>
  );
}

export default App;
