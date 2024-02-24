import React, { useState, useRef } from "react";

function Item({
  isPlaying,
  setIsPlaying,
  isLightMode,
  imgSrc,
  itemName,
  soundSrc,
}) {
  const [volume, setVolume] = useState(0);
  const audioRef = useRef(null);

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);

    if (newVolume === 0) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    audioRef.current.volume = newVolume / 100;
  };

  const handleEnded = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} onEnded={handleEnded}>
        <source src={soundSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="cards-individual-container">
        <div className="cards-individual-image">
          <img
            src={imgSrc}
            alt={itemName}
            className={
              isLightMode ? "individual-image-light" : "individual-image"
            }
          />
        </div>
        <div className="cards-individual-slider">
          <div className={isLightMode ? "item-name col-light" : "item-name"}>
            {itemName}
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              className={
                isLightMode
                  ? "slider slider-light slider-light::-webkit-slider-thumb slider-light::-moz-range-thumb"
                  : "slider"
              }
              id="myRange"
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
