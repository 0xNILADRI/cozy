// importing logos
import birdImg from "./assets/images/birds.svg";
import boatImg from "./assets/images/boat.svg";
import cityImg from "./assets/images/city.svg";
import coffeeShopImg from "./assets/images/coffee-shop.svg";
import firePlaceImg from "./assets/images/fireplace.svg";
import pinkNoiseImg from "./assets/images/pink-noise.svg";
import rainImg from "./assets/images/rain.svg";
import stormImg from "./assets/images/storm.svg";
import streamImg from "./assets/images/stream.svg";
import summerNightImg from "./assets/images/summer-night.svg";
import trainImg from "./assets/images/train.svg";
import wavesImg from "./assets/images/waves.svg";
import whiteNoiseImg from "./assets/images/white-noise.svg";
import windImg from "./assets/images/wind.svg";

// importing sound clips
import birdSound from "./assets/sounds/birds.ogg";
import boatSound from "./assets/sounds/boat.ogg";
import citySound from "./assets/sounds/city.ogg";
import coffeeShopSound from "./assets/sounds/coffee-shop.ogg";
import firePlaceSound from "./assets/sounds/fireplace.ogg";
import pinkNoiseSound from "./assets/sounds/pink-noise.ogg";
import rainSound from "./assets/sounds/rain.ogg";
import stormSound from "./assets/sounds/storm.ogg";
import streamSound from "./assets/sounds/stream.ogg";
import summerNightSound from "./assets/sounds/summer-night.ogg";
import trainSound from "./assets/sounds/train.ogg";
import wavesSound from "./assets/sounds/waves.ogg";
import whiteNoiseSound from "./assets/sounds/white-noise.ogg";
import windSound from "./assets/sounds/wind.ogg";

export const data = [
  {
    nature: [
      { key: 1, rain: { imageLogo: rainImg, soundSource: rainSound } },
      { key: 2, storm: { imageLogo: stormImg, soundSource: stormSound } },
      { key: 3, wind: { imageLogo: windImg, soundSource: windSound } },
      { key: 4, waves: { imageLogo: wavesImg, soundSource: wavesSound } },
      { key: 5, stream: { imageLogo: streamImg, soundSource: streamSound } },
      { key: 6, birds: { imageLogo: birdImg, soundSource: birdSound } },
      {
        key: 7,
        summerNight: {
          imageLogo: summerNightImg,
          soundSource: summerNightSound,
        },
      },
    ],
  },
  {
    travel: [
      { key: 1, train: { imageLogo: trainImg, soundSource: trainSound } },
      { key: 2, boat: { imageLogo: boatImg, soundSource: boatSound } },
      { key: 3, city: { imageLogo: cityImg, soundSource: citySound } },
    ],
  },
  {
    interiors: [
      {
        key: 1,
        coffeeShop: { imageLogo: coffeeShopImg, soundSource: coffeeShopSound },
      },
      {
        key: 2,
        firePlace: { imageLogo: firePlaceImg, soundSource: firePlaceSound },
      },
    ],
  },
  {
    noise: [
      {
        key: 1,
        pinkNoise: { imageLogo: pinkNoiseImg, soundSource: pinkNoiseSound },
      },
      {
        key: 2,
        whiteNoise: { imageLogo: whiteNoiseImg, soundSource: whiteNoiseSound },
      },
    ],
  },
];
