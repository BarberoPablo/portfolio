import { Gamepad, Monitor, Stethoscope } from "lucide-react";
import Formula1Icon from "../../../../images/formula1Icon.png";
import { Project } from "../../types";

export const featuredProject = {
  name: "Formula 1 Calendar",
  description: (
    <>
      A Formula 1 website providing all the essential information to keep you up-to-date with every session. Beginner friendly, it includes
      engaging <b>animations</b> that explain the sport in an easy-to-understand way.
    </>
  ),
  backgroundImages: [
    "https://images7.alphacoders.com/119/thumb-1920-1191191.jpg",
    "https://c4.wallpaperflare.com/wallpaper/790/188/841/williams-f1-formula-cars-formula-1-williams-racing-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/d2/89/f1/d289f10cf5df946ebfe5622f410b0f95.jpg",
    "https://www.verdict.co.uk/wp-content/uploads/2017/11/f1-rain.jpg",
  ],
  phoneImages: [
    "https://i.ibb.co/Rh7rZjt/WRcalendar-and-timer-left.webp",
    "https://i.ibb.co/VT5C9yd/WRcircuit-portrait.webp",
    "https://i.ibb.co/mNyRHWy/WRpodium-left.webp",
    "https://i.ibb.co/dJJyHCj/WRDRS-portrait.webp",
  ],
  githubUrl: "https://github.com/yourusername/amazing-portfolio",
  deployedUrl: "https://amazing-portfolio.vercel.app",
  techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "API"],
};

export const projects: Project[] = [
  /* {
    name: "Online Tetris",
    description: "A web-based Tetris game",
    icon: <Gamepad className="w-8 h-8" />,
    githubUrl: "https://github.com/BarberoPablo/online-tetris",
    deployedUrl: "https://online-tetris.vercel.app",
    details:
    "Online Tetris is a modern, web-based version of the classic game. I built this project to challenge myself in implementing complex game logic in JavaScript and to create a responsive design that works well on both desktop and mobile devices. The game is built using React for the UI and custom hooks for game state management. It features real-time piece movement, rotation, and collision detection, all handled on the client-side for a smooth gaming experience. I also implemented a scoring system and increasing difficulty levels to keep players engaged.",
  }, */
  {
    name: "Formula 1 Calendar",
    description: "Dates, data and curiosities about Formula 1",
    icon: <img src={Formula1Icon} alt="Formula 1" width={32} height={32} />,
    githubUrl: "https://github.com/BarberoPablo/formula1-calendar",
    deployedUrl: "http://formula1-calendar.vercel.app/",
    motivation: (
      <>
        As a passionate Formula 1 fan, I often struggled to find race dates, qualifying sessions, and free practice times. This frustration
        inspired me to create an app that utilizes the{" "}
        <a href="https://ergast.com/mrd/" className="font-bold text-red-700" target="_blank" rel="noopener noreferrer">
          Formula 1 Ergast API
        </a>{" "}
        <br />
        My goal was to make F1 information easily accessible, enhancing the fan experience and ensuring that every enthusiast stays informed
        and engaged with the sport.
      </>
    ),
    details: (
      <>
        This Formula 1 project provides fans with essential features.
        <br />
        Users can click on race dates for additional information about each event. By doing so, the <b>circuit details</b> section shows,
        presenting key information about the selected day circuit, along with the schedule for the <b>day's sessions</b>.
        <br />
        The Race results feature the <b>podium finishes</b>, <b>points earned</b> by drivers, and additional statistics like{" "}
        <b>fastest laps</b>.
        <br /> The current <b>standings</b> for drivers and teams are visually represented with a <b>table</b> and a <b>chart</b> for
        desktop user, offering an engaging way to track the competition.
        <br /> Additionally, the F1 Curiosities section presents interesting facts and trivia about the sport.
      </>
    ),
  },
  {
    name: "MedTrace",
    description: "A medical image editor",
    icon: <Stethoscope className="w-8 h-8" />,
    githubUrl: "https://github.com/BarberoPablo/MedTrace",
    deployedUrl: "https://barberopablo.github.io/MedTrace/",
    motivation: (
      <>
        I developed this application alongside my friend, who is a doctor working at a hospital in Argentina (that's why the application
        it's in spanish). <br />
        He wanted a tool to add <b>medical images</b> to a patients reports. This tool would help <b>surgeons</b> identify exactly{" "}
        <b>where to operate</b> and visualize the patient's issues by marking points of interest on the images and downloading it.
      </>
    ),
    details: (
      <>
        The Medical Image Editor is a web application built using React and Fabric.js. <br />
        It allows users to edit medical images, by drawing shapes and adding annotations directly on the canvas. <br />
        The application provides a user-friendly interface with illustrative menus to mark specific problems on the patient's body, enabling
        clearer communication between doctors and surgeons.
      </>
    ),
  },
  {
    name: "Tarkov Analyzer",
    description: "Videogame: Escape From Tarkov, inventory items detector",
    icon: <Monitor className="w-8 h-8" />,
    githubUrl: "https://github.com/BarberoPablo/tarkov-analyzer",
    deployedUrl: "https://barberopablo.github.io/tarkov-analyzer/",
    motivation: (
      <>
        Escape From Tarkov Inventory Item Detector is a web application I built to solve a time-consuming problem I faced while playing
        Escape From Tarkov: <b>manually searching for the value of each item</b> in my inventory.
      </>
    ),
    details: (
      <>
        The app allows users to paste screenshots of their in-game inventory, <b>automatically </b>
        <b>detecting and displaying the market prices</b> of all items. It uses image recognition and{" "}
        <b>Optical Character Recognition (OCR) technology</b> to analyze the image, identify items, and pull their prices from the Flea
        Market ingame. <br />
        With multiple scan levels for efficiency, the app <b>speeds up the process</b> by merging scan results and filtering redundant data,
        helping users <b>save time</b> when managing large inventories.
      </>
    ),
  },
  {
    name: "Arena Warriors (under development)",
    description: "A multiplayer battle arena game",
    icon: <Gamepad className="w-8 h-8" />,
    githubUrl: "https://github.com/BarberoPablo/arena-warriors",
    deployedUrl: "https://arena-warriors.vercel.app",
    details:
      "Arena Warriors is a real-time multiplayer battle arena game. This project was born out of my fascination with networked game development and my desire to create an engaging multiplayer experience. Built with React for the frontend and Node.js with Socket.io for the backend, the game features real-time combat, character customization, and a ranking system. One of the main challenges was implementing lag compensation and prediction algorithms to ensure a smooth experience for players with varying connection speeds.",
  },
  /* {
    name: "Web Scraping Prices",
    description: "A price comparison tool",
    icon: <Code className="w-8 h-8" />,
    githubUrl: "https://github.com/BarberoPablo/web-scraping-prices",
    deployedUrl: "https://web-scraping-prices.vercel.app",
    details:
      "Web Scraping Prices is a tool that aggregates product prices from various e-commerce websites. I created this project to help consumers find the best deals quickly and easily. The application uses Node.js with Puppeteer for web scraping, React for the frontend, and a MongoDB database to store historical price data. It works by periodically scraping configured websites, normalizing the data, and presenting it in a user-friendly interface. One of the main challenges was handling the different structures of various websites and ensuring the tool remains functional even when websites change their layouts.",
  }, */
];
