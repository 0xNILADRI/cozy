import { useState } from "react";
import playButton from "../assets/play.svg";
import pauseButton from "../assets/pause.svg";
import lightModeButton from "../assets/lightMode.svg";
import darkModeButton from "../assets/darkMode.svg";

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const switchStyle = {
    filter: isLightMode
      ? ""
      : "invert(100%) sepia(100%) saturate(15%) hue-rotate(208deg) brightness(104%) contrast(102%)",
  };

  return (
    <nav className="navBar">
      <div>
        <img
          className="media-logo"
          src={isPlaying ? pauseButton : playButton}
          alt="media control button"
          onClick={() => setIsPlaying(!isPlaying)}
          style={switchStyle}
        />
      </div>
      <div>
        <h1 className="cozy-logo">Cozy</h1>
      </div>
      <div>
        <img
          className="theme-logo"
          src={isLightMode ? darkModeButton : lightModeButton}
          alt="theme change button for UI"
          onClick={() => setIsLightMode(!isLightMode)}
          style={switchStyle}
        />
      </div>
    </nav>
  );
}
export default Navbar;
