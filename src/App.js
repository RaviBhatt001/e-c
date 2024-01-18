import { useState } from "react";
import "./App.css";

function App() {
  const [Color, setColor] = useState("");
  return (
    <div className="app" style={{ backgroundColor: Color, height: 1000 }}>
      <div>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("purple")}>purple</button>
      </div>
    </div>
  );
}

export default App;
