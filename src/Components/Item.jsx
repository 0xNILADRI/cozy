import React, { useState } from "react";

function Item({ imgSrc, itemName, soundSrc }) {
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);

    // Update audio volume
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100; // Volume range is 0-1
    }
  };

  const handlePlayPause = () => {
    if (volume === 0) {
      // Stop the audio
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      // Play the audio
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  const audioRef = React.useRef(null);

  return (
    <>
      <audio ref={audioRef} src={soundSrc}></audio>
      <div>
        <div>
          <img src={imgSrc} alt={itemName} />
        </div>
        <div>
          <div>{itemName}</div>
          <div className="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              className="slider"
              id="myRange"
              onChange={handleVolumeChange}
            />
            <button onClick={handlePlayPause}>
              {volume === 0 ? "Play" : "Pause"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
