import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Case from "./Components/Case";
import Footer from "./Components/Footer";
import "./index.css";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <section className="container-body">
      <Navbar
        isPlaying={isPlaying}
        isLightMode={isLightMode}
        setIsPlaying={setIsPlaying}
        setIsLightMode={setIsLightMode}
      />
      <Case isPlaying={isPlaying} isLightMode={isLightMode} />
      <Footer isPlaying={isPlaying} isLightMode={isLightMode} />
    </section>
  );
}

export default App;
