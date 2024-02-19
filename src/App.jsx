import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="container-body">
      <Navbar></Navbar>
      <h1>Cozy</h1>
    </section>
  );
}

export default App;
