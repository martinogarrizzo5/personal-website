import { SiJavascript, SiDart, SiPython, SiCss3 } from "react-icons/si";
import { IconType } from "react-icons";

type Skill = {
  icon: IconType;
  language: string;
  technologies: string;
};

const skills: Skill[] = [
  {
    icon: SiCss3,
    language: "CSS",
    technologies: "Sass, Tailwindcss",
  },
  {
    icon: SiJavascript,
    language: "Javascript",
    technologies: "Next.js, MERN Stack, Typescript",
  },
  {
    icon: SiDart,
    language: "Dart",
    technologies: "Flutter",
  },
  {
    icon: SiPython,
    language: "Python",
    technologies: "Algorithms, Data Structures",
  },
];

export default skills;
