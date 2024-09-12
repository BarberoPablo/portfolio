import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import Introduction from "./components/Introduction";
import ProjectModal from "./components/ProjectModal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Project } from "./types";
import { containerVariants, itemVariants } from "./utils";

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
      <nav className="p-4 flex justify-end items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Introduction />

        <Projects darkMode={darkMode} selectProject={setSelectedProject} />

        <Skills darkMode={darkMode} />
      </main>

      <ProjectModal darkMode={darkMode} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <motion.footer variants={itemVariants} className={`mt-12 py-4 text-center ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <p>© 2024 Pablo Barbero. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}
