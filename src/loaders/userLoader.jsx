import TwitchIcon from "../assets/svgs/TwitchIcon.jsx";
import InstagramIcon from "../assets/svgs/InstagramIcon.jsx";
import XIcon from "../assets/svgs/XIcon.jsx";
import popovic from "../assets/images/popovic.jpg";
import tasher from "../assets/images/tasher.jpg";
import aiony from "../assets/images/aiony.jpg";
import album from "../assets/images/album.jpg";
import andrik from "../assets/images/andrik.jpg";
import chouette from "../assets/images/chouette.jpg";
import hossein from "../assets/images/hossein.jpg";
import howard from "../assets/images/howard.jpg";
import ismail from "../assets/images/ismail.jpg";
import kinga from "../assets/images/kinga.jpg";
import kosinska from "../assets/images/kosinska.jpg";
import maltsev from "../assets/images/maltsev.jpg";
import nathan from "../assets/images/nathan.jpg";
import preez from "../assets/images/preez.jpg";
import priscilla from "../assets/images/priscilla.jpg";
import shutter from "../assets/images/shutter.jpg";
import slonski from "../assets/images/slonski.jpg";
import spratt from "../assets/images/spratt.jpg";

const userData = {
  id: "gracelyra",
  username: "Grace Lyra",
  desc: "Streamer & internet girl♡",
  avatarImage: popovic,
  bgImage: tasher,
  socialMedia: [
    { platform: "twitch", icon: <TwitchIcon />, url: "https://www.twitch.tv/gracelyra" },
    { platform: "instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/gracelyraa/" },
    { platform: "x", icon: <XIcon />, url: "https://x.com/gracelyra666" },
  ],
  wishlist: {
    "Dress Me Up": [
      {
        id: "wl0",
        title: "Low Back Cinema Jumpsuit",
        brand: "Valentino Garavani",
        price: 252.62,
        img: aiony,
      },
      { id: "wl1", title: "Sequin Embellished Mini Dress", brand: "Balmain", price: 189.99, img: album },
      { id: "wl2", title: "Floral Print Silk Scarf", brand: "Gucci", price: 85.5, img: andrik },
      { id: "wl3", title: "Oversized Wool Blend Coat", brand: "Prada", price: 375.25, img: chouette },
      {
        id: "wl4",
        title: "Leather Ankle Boots with Buckle Detail",
        brand: "Saint Laurent",
        price: 210.75,
        img: hossein,
      },
      { id: "wl5", title: "Striped Cotton Oxford Shirt", brand: "Ralph Lauren", price: 68, img: howard },
      { id: "wl6", title: "Cashmere Blend Crewneck Sweater", brand: "Burberry", price: 145.5, img: ismail },
    ],
    "Stream Stuff": [
      { id: "wl7", title: "Denim Jacket with Frayed Hem", brand: "Levi's", price: 92.25, img: kinga },
      {
        id: "wl8",
        title: "Pleated Midi Skirt in Floral Print",
        brand: "Michael Kors",
        price: 79.99,
        img: kosinska,
      },
      { id: "wl9", title: "Leather Tote Bag with Chain Strap", brand: "Chanel", price: 450, img: maltsev },
    ],
    "Stream Content": [
      {
        id: "wl10",
        title: "Suede Pointed Toe Pumps",
        brand: "Christian Louboutin",
        price: 285.99,
        img: nathan,
      },
      { id: "wl11", title: "Silk Tie with Geometric Pattern", brand: "Hermès", price: 110, img: preez },
    ],
    Shoes: [
      {
        id: "wl12",
        title: "Down Padded Parka with Fur Trim",
        brand: "Moncler",
        price: 520.5,
        img: priscilla,
      },
      { id: "wl13", title: "Knit Beanie with Pom Pom", brand: "The North Face", price: 42.75, img: shutter },
      { id: "wl14", title: "Wide Leg Linen Pants", brand: "Eileen Fisher", price: 88, img: slonski },
    ],
    "Self Care": [
      {
        id: "wl15",
        title: "Canvas Backpack with Leather Details",
        brand: "Herschel Supply Co.",
        price: 55.25,
        img: spratt,
      },
    ],
  },
};

export function userLoader({ params }) {
  return params.userId === "gracelyra" ? userData : null;
}
