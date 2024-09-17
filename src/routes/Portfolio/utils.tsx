import { Code, User, Briefcase, Mail, Cpu, Gamepad, Monitor } from "lucide-react";
import { Experience, Project } from "./types";
//import { LockIcon, Briefcase, Code, Mail, Cpu, Menu, Moon, Sun } from "lucide-react";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

export const headerMenu2 = ["About", "Projects", "Experience", "Education", "Skills"];
export const headerMenu = [
  { text: "About", icon: User },
  { text: "Projects", icon: Code },
  { text: "Experience", icon: Briefcase },
  { text: "Education", icon: User },
  { text: "Skills", icon: Cpu },
  { text: "Contact", icon: Mail },
];

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Git",
  "Remix",
  "Next.js",
  "Web scraping",
  "WebSocket",
  "Storybook",
  "Tailwind",
  "CSS",
  "HTML",
];

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "SwagCharm",
    url: "https://www.swagcharm.com/",
    location: "New York, United States · Remote",
    description: [
      "Researching, designing, managing software programs",
      "Testing and evaluating new programs",
      "Modifying software to fix errors, improve its performance",
      "Deploying software tools, processes and metrics",
      "Directing software programming and documentation development",
      "Writing and implementing code",
      "Preparing reports on programming project specifications, activities, or status",
      "Consulting with engineering staff to evaluate software-hardware interfaces and develop specifications and performance requirements",
    ],
  },
  {
    title: "Backend Programming Tutor (NodeJS)",
    url: "https://www.coderhouse.com/",
    company: "Coderhouse",
    location: "Latin America · Remote",
    description: [
      "Tutoring students in backend programming using NodeJS",
      "Assisting with code reviews and problem-solving",
      "Providing guidance on best practices and industry standards",
    ],
  },
  {
    title: "Full-Stack Teaching Assistant",
    url: "https://www.soyhenry.com/",
    company: "SoyHenry",
    location: "Latin America · Remote",
    description: [
      "Coordinate a group of students to achieve integration to the study group",
      "Guide students in the first steps of the course",
      "Assist to solve exercises and promote group collaboration (Pair Programming)",
      "Propose ideas to improve the Bootcamp processes",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Tarkov Analyzer",
    description: "Videogame: Escape From Tarkov, inventory items detector",
    icon: <Monitor className="w-6 h-6" />,
    githubUrl: "https://github.com/BarberoPablo/tarkov-analyzer",
    deployedUrl: "https://barberopablo.github.io/tarkov-analyzer/",
    details: (
      <>
        <>
          Escape From Tarkov Inventory Item Detector is a web application I built to solve a time-consuming problem I faced while playing
          Escape From Tarkov: <b>manually searching for the value of each item</b> in my inventory. The app allows users to paste
          screenshots of their in-game inventory, automatically <b>detecting and displaying the market prices</b> of all items. It uses
          image recognition and <b>Optical Character Recognition (OCR) technology</b> to analyze the image, identify items, and pull their
          prices from the Flea Market. With multiple scan levels for efficiency, the app <b>speeds up the process</b> by merging scan
          results and filtering redundant data, helping users <b>save time</b> when managing large inventories.
        </>
      </>
    ),
  },
  {
    name: "Online Tetris",
    description: "A web-based Tetris game",
    icon: <Gamepad className="w-6 h-6" />,
    githubUrl: "https://github.com/BarberoPablo/online-tetris",
    deployedUrl: "https://online-tetris.vercel.app",
    details:
      "Online Tetris is a modern, web-based version of the classic game. I built this project to challenge myself in implementing complex game logic in JavaScript and to create a responsive design that works well on both desktop and mobile devices. The game is built using React for the UI and custom hooks for game state management. It features real-time piece movement, rotation, and collision detection, all handled on the client-side for a smooth gaming experience. I also implemented a scoring system and increasing difficulty levels to keep players engaged.",
  },
  {
    name: "Arena Warriors",
    description: "A multiplayer battle arena game",
    icon: <Gamepad className="w-6 h-6" />,
    githubUrl: "https://github.com/BarberoPablo/arena-warriors",
    deployedUrl: "https://arena-warriors.vercel.app",
    details:
      "Arena Warriors is a real-time multiplayer battle arena game. This project was born out of my fascination with networked game development and my desire to create an engaging multiplayer experience. Built with React for the frontend and Node.js with Socket.io for the backend, the game features real-time combat, character customization, and a ranking system. One of the main challenges was implementing lag compensation and prediction algorithms to ensure a smooth experience for players with varying connection speeds.",
  },
  {
    name: "Web Scraping Prices",
    description: "A price comparison tool",
    icon: <Code className="w-6 h-6" />,
    githubUrl: "https://github.com/BarberoPablo/web-scraping-prices",
    deployedUrl: "https://web-scraping-prices.vercel.app",
    details:
      "Web Scraping Prices is a tool that aggregates product prices from various e-commerce websites. I created this project to help consumers find the best deals quickly and easily. The application uses Node.js with Puppeteer for web scraping, React for the frontend, and a MongoDB database to store historical price data. It works by periodically scraping configured websites, normalizing the data, and presenting it in a user-friendly interface. One of the main challenges was handling the different structures of various websites and ensuring the tool remains functional even when websites change their layouts.",
  },
];
