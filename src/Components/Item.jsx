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

  const handlePlay = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);

    // Update audio volume
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100; // Volume range is 0-1
    }

    if (volume == 0) {
      // Stop the audio
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      // Play the audio
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const audioRef = useRef(null);

  return (
    <>
      <audio ref={audioRef}>
        <source src={soundSrc} type="audio/mpeg" />
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
              value={volume}
              className={
                isLightMode
                  ? "slider slider-light slider-light::-webkit-slider-thumb slider-light::-moz-range-thumb"
                  : "slider"
              }
              id="myRange"
              onChange={handlePlay}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
