import { useState } from "react";
import Navbar from "./Components/Navbar";
import Case from "./Components/Case";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="container-body">
      <Navbar />
      <Case />
    </section>
  );
}

export default App;
