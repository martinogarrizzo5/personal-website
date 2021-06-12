// images
import dreamTravelImg from "./dreamTravelImg.png";
import getBoringImg from "./getBoringImg.png";
import simonGameImg from "./simonGameImg.png";
// icons
import { FaPlaneDeparture, FaGamepad, FaClipboardList } from "react-icons/fa";

const projects = [
  {
    typeIcon: FaPlaneDeparture,
    type: "Trip",
    title: "Dream Travel",
    imageUrl: dreamTravelImg,
    description:
      "Find activities and hotels int the most beautiful places in the world and live experiences that you'll never forget.",
    link: "",
  },
  {
    typeIcon: FaClipboardList,
    type: "Activity",
    title: "Get Boring",
    imageUrl: getBoringImg,
    description:
      "Are you bored? No worries, here you'll find new interesting activities to do every time you need.",
    link: "",
  },
  {
    typeIcon: FaGamepad,
    type: "Fun",
    title: "Simon Game",
    imageUrl: simonGameImg,
    description:
      "Website version of the famous game where you need to remember the sequence of colors. Here you'll test your memory.",
    link: "",
  },
];

export default projects;
