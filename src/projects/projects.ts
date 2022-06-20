// images
import dreamTravelImg from "./dreamTravelImg.png";
import getBoringImg from "./getBoringImg.png";
import simonGameImg from "./simonGameImg.png";
import pathFindingImg from "./pathFindingImg.jpg";
import sharelogicsImg from "./sharelogicsImg.png";
import trisImg from "./glow-tris.jpg";
import favorityImg from "./favorityImg.jpeg";
import dryTeaImg from "./dryTea.png";
import netflixImg from "./netflixImg.png";
import earlyImg from "./earlyImg.jpg";
import miniChessImg from "./mini-chess.jpg";
import theNightDreamerImg from "./theNightDreamerImg.jpeg";
import castelturismoImg from "./castelturismo.png";

// icons
import { IconType } from "react-icons";
import {
  FaPlaneDeparture,
  FaGamepad,
  FaClipboardList,
  FaBook,
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
  },
  {
    typeIcon: FaCocktail,
    type: "Party",
    title: "Dry Tea",
    imageUrl: dryTeaImg,
    description:
      "Doing a party tonight? You'll certainly need only the best cocktails. Don't worry Dry Tea is the solution.",
    link: "https://drytea.web.app",
  },
  {
    typeIcon: FaBrain,
    type: "Culture",
    title: "Castelturismo",
    imageUrl: castelturismoImg,
    description:
      "Guide for tourism in Castelfranco Veneto among the mansions and historic buildings.",
    link: "",
    isComingSoon: true,
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
    typeIcon: RiMapPin2Fill,
    type: "Path",
    title: "PathFinder",
    imageUrl: pathFindingImg,
    description: "Use algorithms to find the shortest path between two points.",
    link: "https://martinogarrizzo5.github.io/PathFinding/",
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
];

export default projects;
