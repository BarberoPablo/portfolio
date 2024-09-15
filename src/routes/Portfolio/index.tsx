import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import ProjectModal from "./components/ProjectModal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Project } from "./types";
import { containerVariants, headerMenu, itemVariants } from "./utils";
import Education from "./components/Education";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <header className={`bg-gray-800 text-white p-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              {headerMenu.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Introduction />

        <Projects darkMode={darkMode} selectProject={setSelectedProject} />

        <Experience darkMode={darkMode} />

        <Education darkMode={darkMode} />

        <Skills darkMode={darkMode} />
      </main>

      <ProjectModal darkMode={darkMode} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <motion.footer variants={itemVariants} className={`mt-12 py-4 text-center ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <p>© 2024 Pablo Barbero. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}
