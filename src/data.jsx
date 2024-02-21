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
import birdSound from "./assets/sounds/birds.mp3";
import boatSound from "./assets/sounds/boat.mp3";
import citySound from "./assets/sounds/city.mp3";
import coffeeShopSound from "./assets/sounds/coffee-shop.mp3";
import firePlaceSound from "./assets/sounds/fireplace.mp3";
import pinkNoiseSound from "./assets/sounds/pink-noise.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import stormSound from "./assets/sounds/storm.mp3";
import streamSound from "./assets/sounds/stream.mp3";
import summerNightSound from "./assets/sounds/summer-night.mp3";
import trainSound from "./assets/sounds/train.mp3";
import wavesSound from "./assets/sounds/waves.mp3";
import whiteNoiseSound from "./assets/sounds/white-noise.mp3";
import windSound from "./assets/sounds/wind.mp3";

// import footer icons
import footerOneImage from "./assets/footer-icons/linkedin.svg";
import footerTwoImage from "./assets/footer-icons/twitter.svg";
import footerThreeImage from "./assets/footer-icons/discord.svg";
import footerFourImage from "./assets/footer-icons/telegram.svg";

export const data = [
  {
    id: 1,
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
    id: 2,
    travel: [
      { key: 1, train: { imageLogo: trainImg, soundSource: trainSound } },
      { key: 2, boat: { imageLogo: boatImg, soundSource: boatSound } },
      { key: 3, city: { imageLogo: cityImg, soundSource: citySound } },
    ],
  },
  {
    id: 3,
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
    id: 4,
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

export const footerIconLinks = [
  {
    key: 1,
    href: "https://www.linkedin.com/in/0xniladri/",
    classname: "linkedin",
    sourceImage: footerOneImage,
    altText: "linkedin logo",
  },
  {
    key: 2,
    href: "https://twitter.com/0xNILADRI",
    classname: "twitter",
    sourceImage: footerTwoImage,
    altText: "twitter logo",
  },
  {
    key: 3,
    href: "https://discord.com/channels/@me/nil1406#0717",
    classname: "discord",
    sourceImage: footerThreeImage,
    altText: "discord logo",
  },
  {
    key: 4,
    href: "tg://user?id=325142979",
    classname: "telegram",
    sourceImage: footerFourImage,
    altText: "telegram logo",
  },
];
