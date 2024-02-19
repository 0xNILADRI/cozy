import { useState } from "react";
import Navbar from "./Components/Navbar";
import Case from "./Components/Case";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <section className="container-body">
      <Navbar />
      <Case />
      <Footer />
    </section>
  );
}

export default App;
