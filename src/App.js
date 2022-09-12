import "./App.css";
import React from "react";
import Homepage from "./components/mainComp/Homepage";
import Navbar from "./components/mainComp/Nav";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
