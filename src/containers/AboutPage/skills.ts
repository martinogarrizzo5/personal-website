import { SiJavascript, SiDart, SiPython, SiCss3 } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
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
    icon: MdDesignServices,
    language: "Web / App Design",
    technologies: "Figma",
  },
];

export default skills;
