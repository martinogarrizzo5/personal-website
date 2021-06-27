// images
import dreamTravelImg from "./dreamTravelImg.png";
import getBoringImg from "./getBoringImg.png";
import simonGameImg from "./simonGameImg.png";
import catClickerImg from "./catClickerImg.png";
import pathFindingImg from "./pathFindingImg.png";
import trackifyImg from "./trackifyImg.png";
import sharelogicsImg from "./sharelogicsImg.png";
import trisImg from "./trisImg.png";

// icons
import { IconType } from "react-icons";
import {
  FaPlaneDeparture,
  FaGamepad,
  FaClipboardList,
  FaCat,
  FaMapPin,
  FaBook,
} from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

type Project = {
  typeIcon: IconType;
  type: string;
  title: string;
  imageUrl: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    typeIcon: FaPlaneDeparture,
    type: "Trip",
    title: "Dream Travel",
    imageUrl: dreamTravelImg,
    description:
      "Find activities and hotels int the most beautiful places in the world and live experiences that you'll never forget.",
    link: "https://dream-travel.herokuapp.com/",
  },
  {
    typeIcon: FaClipboardList,
    type: "Activity",
    title: "Get Boring",
    imageUrl: getBoringImg,
    description:
      "Are you bored? No worries, here you'll find new interesting activities to do every time you need.",
    link: "https://get-boring.herokuapp.com/",
  },
  {
    typeIcon: FaGamepad,
    type: "Fun",
    title: "Simon Game",
    imageUrl: simonGameImg,
    description:
      "Website version of the famous game where you need to remember the sequence of colors. Here you'll test your memory.",
    link: "https://martinogarrizzo5.github.io/SimonGame/",
  },
  {
    typeIcon: FaCat,
    type: "Cats",
    title: "Cat Clicker",
    imageUrl: catClickerImg,
    description:
      "A meaningless website where you can tap on a cat. Tap on it at least 10 times...",
    link: "https://martinogarrizzo5.github.io/catClicker/",
  },
  {
    typeIcon: RiMapPin2Fill,
    type: "Path",
    title: "PathFinder",
    imageUrl: pathFindingImg,
    description: "Use algorithms to find the shortest path between two points.",
    link: "https://martinogarrizzo5.github.io/PathFinding/",
  },
  {
    typeIcon: FaMapPin,
    type: "Position",
    title: "Trackify",
    imageUrl: trackifyImg,
    description:
      "Find the position of your public ip address. Don't worry it's all legal!",
    link: "https://trackify.web.app/",
  },
  {
    typeIcon: FaBook,
    type: "Learning",
    title: "Sharelogics Academy",
    imageUrl: sharelogicsImg,
    description:
      "Want to learn programming but don't know where to start? In my academy you'll get all the knowledge you need to become a skilled coder.",
    link: "https://martin-meneghetti.herokuapp.com/",
  },
  {
    typeIcon: FaGamepad,
    type: "Cringe Fun",
    title: "Tic Tac Toe!",
    imageUrl: trisImg,
    description: "Defeat the death in the ultimate challenge. ⚠️Cringe Alert!",
    link: "https://martinogarrizzo5.github.io/tic-tac-toe/",
  },
];

export default projects;
