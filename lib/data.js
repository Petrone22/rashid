import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import form from "@/public/form.png";
import enigma from "@/public/enigma.png";
import musika from "@/public/musika.png";
import oldPortfolio from "@/public/old-portfolio.png";
import space from "@/public/space-explorer.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
];

export const projectsData = [
  {
    title: "Musika",
    description:
      "A music player meant to explore my varied music taste and expand the listener's horizons musically.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: musika,
    link: "https://petrone22.github.io/music-explorer/",
    ghLink: "https://github.com/Petrone22/music-explorer",
  },
  {
    title: "The Enigma Machine",
    description:
      "A perfect replica of the Enigma Machine used in WWII to encrypt messages based on mechanical rotation.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: enigma,
    link: "https://petrone22.github.io/the-enigma-machine/",
    ghLink: "https://github.com/Petrone22/the-enigma-machine",
  },
  {
    title: "Space Explorer",
    description:
      "A documentation website for an imaginary space exploration mission.",
    tags: ["React", "CSS"],
    imageUrl: space,
    link: "https://petrone22.github.io/Space-exploration-guide/",
    ghLink: "https://github.com/Petrone22/Space-exploration-guide",
  },
  {
    title: "Deprecated Portfolio",
    description:
      "My previous Portfolio project, made with multiple state of the art techniques and libraries!",
    tags: ["React", "TailWind CSS", "Three.JS", "R3F"],
    imageUrl: oldPortfolio,
    link: "https://petrone22.github.io/new-portfolio/",
    ghLink: "https://github.com/Petrone22/new-portfolio",
  },

  {
    title: "Multi Step Form",
    description:
      "A beautiful-looking multi step form made to demonstrate the effect of flexbox.",
    tags: ["React", "CSS"],
    imageUrl: form,
    link: "https://petrone22.github.io/multi-step-form/",
    ghLink: "https://github.com/Petrone22/multi-step-form",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];
