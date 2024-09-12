import { motion } from "framer-motion";
import { Code, Gamepad, Github, Globe, Info, Monitor } from "lucide-react";
import { Project } from "../../types";
import { itemVariants } from "../../utils";

const projects: Project[] = [
  {
    name: "Tarkov Analyzer",
    description: "A tool for analyzing game data",
    icon: <Monitor className="w-6 h-6" />,
    githubUrl: "https://github.com/BarberoPablo/tarkov-analyzer",
    deployedUrl: "https://barberopablo.github.io/tarkov-analyzer/",
    details:
      "Tarkov Analyzer is a comprehensive tool designed to help players of Escape from Tarkov optimize their gameplay. I decided to create this project because I noticed a lack of user-friendly analytics tools for this complex game. The application uses React for the frontend and Node.js for the backend, processing large amounts of game data to provide actionable insights. It works by aggregating data from various in-game sources and presenting it in an easy-to-understand format, allowing players to make informed decisions about loadouts, map routes, and economic strategies.",
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

export default function Projects({ darkMode, selectProject }: { darkMode: boolean; selectProject: (project: Project) => void }) {
  return (
    <motion.section variants={itemVariants} className="mb-12">
      <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6">
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {project.icon}
                <h4 className="text-xl font-bold ml-2">{project.name}</h4>
              </div>
              <div className="flex space-x-2">
                <motion.button whileHover={{ scale: 1.2 }} onClick={() => selectProject(project)} className="hover:text-yellow-500">
                  <Info className="w-5 h-5" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500"
                >
                  <Globe className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
