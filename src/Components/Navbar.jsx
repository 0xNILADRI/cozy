import { useEffect } from "react";
import playButton from "../assets/play.svg";
import pauseButton from "../assets/pause.svg";
import lightModeButton from "../assets/lightMode.svg";
import darkModeButton from "../assets/darkMode.svg";
import logoDarkMode from "../assets/cozy-dark-theme.png";
import logoLightMode from "../assets/cozy-light-theme.png";

function Navbar({ isPlaying, isLightMode, setIsPlaying, setIsLightMode }) {
  useEffect(() => {
    const root = document.getElementById("root");
    const body = document.body;
    root.style.backgroundColor = isLightMode ? "#f5f5dc" : "#242424";
    body.style.backgroundColor = isLightMode ? "#f5f5dc" : "#242424";
  }, [isLightMode]);

  const handlePlaying = (event) => {
    setIsPlaying(!isPlaying);
  };

  const handleTheme = (event) => {
    setIsLightMode(!isLightMode);
  };

  const switchStyle = {
    filter: isLightMode
      ? "invert(0%) sepia(0%) saturate(7469%) hue-rotate(213deg) brightness(104%) contrast(107%)"
      : "invert(100%) sepia(100%) saturate(15%) hue-rotate(208deg) brightness(104%) contrast(102%)",
  };

  return (
    <nav className={isLightMode ? "navBar bg-col-light col-light" : "navBar"}>
      <div>
        <img
          className="media-logo"
          src={isPlaying ? pauseButton : playButton}
          alt="media control button"
          onClick={handlePlaying}
          style={switchStyle}
        />
      </div>
      <div>
        <div>
          <img
            src={isLightMode ? logoLightMode : logoDarkMode}
            alt="main logo website"
            className="nav-logo"
          />
        </div>
      </div>
      <div>
        <img
          className="theme-logo"
          src={isLightMode ? darkModeButton : lightModeButton}
          alt="theme change button for UI"
          onClick={handleTheme}
          style={switchStyle}
        />
      </div>
    </nav>
  );
}
export default Navbar;
