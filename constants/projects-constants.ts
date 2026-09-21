import { type Transition } from "motion/react";

import { type Project } from "@/types/portfolio-types";

const deploymentTags = [
  { id: 1, name: "Deployment", path: "/assets/logos/linux.svg" },
  { id: 2, name: "Production", path: "/assets/logos/nginx.svg" },
];

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "YaPay Client Website Deployment",
    category: "Professional Experience · YaMarkets",
    description: "Client website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: ["Worked on deploying and supporting the client website.", "Contributed to production website operations and deployment activities.", "Supported website availability and maintenance."],
    href: "https://yapay.me/",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: deploymentTags,
  },
  {
    id: 2,
    title: "YAGC Client Website Deployment",
    category: "Professional Experience · YaMarkets",
    description: "Client website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: ["Worked on deploying and supporting the client website.", "Contributed to production website operations and deployment activities.", "Supported website availability and maintenance."],
    href: "https://www.yagc.io/",
    logo: "",
    image: "",
    accent: "from-royal/40 to-lavender/10",
    tags: deploymentTags,
  },
  {
    id: 3,
    title: "NXG Markets Website Deployment",
    category: "Professional Experience · YaMarkets",
    description: "Client trading website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: ["Worked on deploying and supporting the client website.", "Contributed to production website operations and deployment activities.", "Supported website availability and maintenance."],
    href: "https://www.nxgmarkets.com/",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: deploymentTags,
  },
  {
    id: 4,
    title: "YaOptions Website Deployment",
    category: "Professional Experience · YaMarkets",
    description: "Client options trading website deployment and production support completed during my professional experience at YaMarkets.",
    subDescription: ["Worked on deploying and supporting the client website.", "Contributed to production website operations and deployment activities.", "Supported website availability and maintenance."],
    href: "https://yaoptions.com/",
    logo: "",
    image: "",
    accent: "from-sand/40 to-coral/10",
    tags: deploymentTags,
  },
  {
    id: 5,
    title: "YaMarkets Website Deployment",
    category: "Professional Experience · YaMarkets",
    description: "YaMarkets website deployment and production support completed during my professional experience.",
    subDescription: ["Worked on deploying and supporting the website.", "Contributed to production website operations and deployment activities.", "Supported website availability and maintenance."],
    href: "https://yamarketsltd.com/",
    logo: "",
    image: "/images/yamarkets.png",
    accent: "from-lavender/40 to-sand/10",
    tags: deploymentTags,
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };

export const PREVIEW_WINDOW = 1;
