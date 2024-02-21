import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Case from "./Components/Case";
import Footer from "./Components/Footer";
import "./index.css";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const assetsLoaded = useRef(false);

  useEffect(() => {
    const audioFiles = document.getElementsByTagName("audio");
    let loadedCount = 0;

    const checkAllAudioFilesLoaded = () => {
      loadedCount++;
      if (loadedCount === audioFiles.length) {
        setLoading(false);
      }
    };

    Array.from(audioFiles).forEach((audio) => {
      if (audio.readyState >= 2) {
        checkAllAudioFilesLoaded();
      } else {
        audio.addEventListener("canplaythrough", checkAllAudioFilesLoaded);
      }
    });

    return () => {
      Array.from(audioFiles).forEach((audio) => {
        audio.removeEventListener("canplaythrough", checkAllAudioFilesLoaded);
      });
    };
  }, []);

  return (
    <section className="container-body">
      <div
        className={
          isLightMode ? "loader-wrapper loader-light" : "loader-wrapper"
        }
        style={{
          zIndex: loading ? "200" : "-1",
          display: loading ? "flex" : "none",
        }}
      >
        <span className={isLightMode ? "loader bg-col-light" : "loader"}>
          <span
            className={
              isLightMode ? "loader-inner footer-light" : "loader-inner"
            }
          ></span>
        </span>
      </div>

      <Navbar
        isPlaying={isPlaying}
        isLightMode={isLightMode}
        setIsPlaying={setIsPlaying}
        setIsLightMode={setIsLightMode}
      />
      <Case
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isLightMode={isLightMode}
      />
      <Footer isPlaying={isPlaying} isLightMode={isLightMode} />
    </section>
  );
}

export default App;
