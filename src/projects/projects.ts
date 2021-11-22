// images
import dreamTravelImg from "./dreamTravelImg.png";
import getBoringImg from "./getBoringImg.png";
import simonGameImg from "./simonGameImg.png";
import catClickerImg from "./catClickerImg.png";
import pathFindingImg from "./pathFindingImg.jpg";
import trackifyImg from "./trackifyImg.png";
import sharelogicsImg from "./sharelogicsImg.png";
import trisImg from "./glow-tris.jpg";
import lifeGymImg from "./lifeGymImg.jpeg";
import favorityImg from "./favorityImg.jpeg";
import dryTeaImg from "./dryTea.png";
import netflixImg from "./netflixImg.png";
import earlyImg from "./earlyImg.jpg";

// icons
import { IconType } from "react-icons";
import {
  FaPlaneDeparture,
  FaGamepad,
  FaClipboardList,
  FaCat,
  FaMapPin,
  FaBook,
  FaStickyNote,
  FaCocktail,
  FaShoppingBag,
} from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiMapPin2Fill } from "react-icons/ri";
import { GiMuscleUp } from "react-icons/gi";

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
    typeIcon: FaPlaneDeparture,
    type: "Trip",
    title: "Dream Travel",
    imageUrl: dreamTravelImg,
    description:
      "Find activities and hotels int the most beautiful places in the world and live experiences that you'll never forget.",
    link: "https://dream-travel.herokuapp.com/",
  },
  {
    typeIcon: FaCocktail,
    type: "Party",
    title: "Dry Tea",
    imageUrl: dryTeaImg,
    description:
      "Doing a party tonight? You'll certainly need only the best cocktails. Don't worry Dry Tea is the solution",
    link: "https://drytea.web.app",
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
    typeIcon: GiMuscleUp,
    type: "Big As Danny Lazzarin",
    title: "Life Gym",
    imageUrl: lifeGymImg,
    description: "Website made for my favorite gym in Romania.",
    link: "https://life-gym.web.app/",
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
    type: "Glow Lights",
    title: "Tic Tac Toe!",
    imageUrl: trisImg,
    description: "A simple game...fancy and glow.",
    link: "https://martinogarrizzo5.github.io/tic-tac-toe/",
  },
];

export default projects;
