import { useState } from "react";
import Navbar from "./Components/Navbar";
import Case from "./Components/Case";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleChildPlayingState = (newChildState) => {
    setIsPlaying(newChildState);
  };

  const handleChildThemeState = (newChildState) => {
    setIsLightMode(newChildState);
  };

  return (
    <section className="container-body">
      <Navbar
        onChangePlaying={handleChildPlayingState}
        onChangeTheme={handleChildThemeState}
      />
      {console.log(isPlaying)}
      {console.log(isLightMode)}
      <Case />
      <Footer />
    </section>
  );
}

export default App;
