// images
import dreamTravelImg from "./images/dreamTravelImg.png";
import getBoringImg from "./images/getBoringImg.png";
import simonGameImg from "./images/simonGameImg.png";
import pathFindingImg from "./images/pathFindingImg.jpg";
import trisImg from "./images/glow-tris.jpg";
import favorityImg from "./images/favorityImg.jpeg";
import dryTeaImg from "./images/dryTea.png";
import netflixImg from "./images/netflixImg.png";
import earlyImg from "./images/earlyImg.jpg";
import miniChessImg from "./images/mini-chess.jpg";
import theNightDreamerImg from "./images/theNightDreamerImg.jpeg";
import castelturismoImg from "./images/castelturismo.png";

// icons
import { IconType } from "react-icons";
import {
  FaPlaneDeparture,
  FaGamepad,
  FaClipboardList,
  FaStickyNote,
  FaCocktail,
  FaShoppingBag,
  FaBrain,
} from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiMapPin2Fill } from "react-icons/ri";

type Project = {
  typeIcon: IconType;
  type: string;
  title: string;
  imageUrl: string;
  description: string;
  link: string;
  isComingSoon?: boolean;
  sourceCodeLink?: string;
  isMobileApp?: boolean;
  storeLink?: string;
};

const projects: Project[] = [
  {
    typeIcon: FaShoppingBag,
    type: "Buy Until You Drop",
    title: "The Night Dreamer Shop",
    imageUrl: theNightDreamerImg,
    description:
      "An online store where you can buy everything you have ever wanted. All this, under the darkness of the night.",
    link: "https://the-night-dreamer.vercel.app/",
  },
  {
    typeIcon: FaPlaneDeparture,
    type: "Trip",
    title: "Dream Travel",
    imageUrl: dreamTravelImg,
    description:
      "Find activities and hotels into the most beautiful places in the world and live experiences that you'll never forget.",
    link: "https://dream-travel.herokuapp.com/",
    isComingSoon: true,
  },
  {
    typeIcon: FaBrain,
    type: "Culture",
    title: "Castelturismo",
    imageUrl: castelturismoImg,
    description:
      "Guide for tourism in Castelfranco Veneto among mansions and historic buildings.",
    link: "",
    sourceCodeLink: "https://github.com/martinogarrizzo5/castelturismo",
    isMobileApp: true,
  },
  {
    typeIcon: FaCocktail,
    type: "Party",
    title: "Dry Tea",
    imageUrl: dryTeaImg,
    description:
      "Doing a party tonight? You'll certainly need only the best cocktails. Don't worry Dry Tea is the solution.",
    link: "https://drytea.web.app",
    sourceCodeLink: "https://github.com/martinogarrizzo5/dry-tea",
  },

  {
    typeIcon: FaStickyNote,
    type: "Notes",
    title: "Favority",
    imageUrl: favorityImg,
    description:
      "Never use handwritten notes anymore! Favority is the solution to store all your notes and ideas in a beautiful workspace.",
    link: "https://love-favority.web.app",
  },
  {
    typeIcon: FaBrain,
    type: "Brain Skills",
    title: "Mini Chess",
    imageUrl: miniChessImg,
    description:
      "In Mini Chess You will face with a lot of situations to the test your skills in checkmating the enemy king.",
    link: "https://martinogarrizzo5.github.io/mini-chess/",
    sourceCodeLink: "https://github.com/martinogarrizzo5/mini-chess",
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
    typeIcon: FaShoppingBag,
    type: "Buy Until You Drop",
    title: "Early",
    imageUrl: earlyImg,
    description:
      "Have you ever seen a product that you want but unfortunately with a bad price? What if you could track the price and buy at the best time? Well, I have an exclusive app only for you!",
    link: "https://love-favority.web.app",
    isComingSoon: true,
  },
  {
    typeIcon: BsCollectionPlayFill,
    type: "Series and Films",
    title: "Netflix Clone",
    imageUrl: netflixImg,
    description:
      "Netflix Frontend Clone. A React project that all frontend developers should try to do!",
    link: "https://netflix-clone-martin.web.app/",
  },
  {
    typeIcon: FaGamepad,
    type: "Fun",
    title: "Tic Tac Toe!",
    imageUrl: trisImg,
    description: "A simple game...fancy and glow.",
    link: "https://martinogarrizzo5.github.io/tic-tac-toe/",
    sourceCodeLink: "https://github.com/martinogarrizzo5/tic-tac-toe",
  },
  {
    typeIcon: FaGamepad,
    type: "Fun",
    title: "Simon Game",
    imageUrl: simonGameImg,
    description:
      "Website version of the famous game where you need to remember the sequence of colors. Here you'll test your memory.",
    link: "https://martinogarrizzo5.github.io/SimonGame/",
    sourceCodeLink: "https://github.com/martinogarrizzo5/SimonGame",
  },
  {
    typeIcon: RiMapPin2Fill,
    type: "Path",
    title: "PathFinder",
    imageUrl: pathFindingImg,
    description: "Use algorithms to find the shortest path between two points.",
    link: "https://martinogarrizzo5.github.io/PathFinding/",
    sourceCodeLink: "https://github.com/martinogarrizzo5/PathFinding",
  },
];

export default projects;
