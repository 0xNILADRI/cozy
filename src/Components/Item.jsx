import React, { useState, useRef, useEffect } from "react";

let audioContext;
let gainNode;

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

  useEffect(() => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioContext.createGain();
      gainNode.connect(audioContext.destination);
    }
    audioRef.current.volume = volume / 100; // Update the volume of the audio element
    gainNode.gain.value = volume / 100; // Update the gain node volume
  }, [volume]);

  const setVolumeWithCheck = (newVolume) => {
    if (newVolume === 0) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }

    gainNode.gain.value = newVolume / 100;
    setVolume(newVolume);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeWithCheck(newVolume);
  };

  // useEffect(() => {
  //   if (!audioContext) {
  //     audioContext = new (window.AudioContext || window.webkitAudioContext)();
  //     gainNode = audioContext.createGain();
  //     gainNode.connect(audioContext.destination);
  //   }
  // }, [volume]);

  // const setVolumeWithCheck = (newVolume) => {
  //   if (newVolume === 0) {
  //     audioRef.current.pause();
  //     setIsPlaying(false);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }

  //   gainNode.gain.value = newVolume;
  //   setVolume(newVolume);
  // };

  // const handleVolumeChange = (event) => {
  //   const newVolume = parseFloat(event.target.value);
  //   setVolumeWithCheck(newVolume);
  // };

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
              defaultValue="1"
              className={
                isLightMode
                  ? "slider slider-light slider-light::-webkit-slider-thumb slider-light::-webkit-slider-runnable-track slider-light::-moz-range-thumb"
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
