import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import ProjectModal from "./components/ProjectModal";
import Projects from "./components/Projects";
import ProjectColumns from "./components/Projects2";
import Skills from "./components/Skills";
import { Project } from "./types";
import { containerVariants, headerMenu, itemVariants } from "./utils";
import Education from "./components/Education";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <header className={`sticky top-0 bg-gray-800 text-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="hidden md:flex space-x-4">
                {headerMenu.map((item) => (
                  <li key={item.text}>
                    <motion.a
                      href={`#${item.text}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-row items-center gap-1 mx-1 p-1 rounded hover:bg-gray-900"
                    >
                      <item.icon />
                      <span>{item.text}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden`}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>
        </div>
        <nav className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col space-y-2 p-4">
            {headerMenu.map((item) => (
              <li key={item.text}>
                <a
                  href={`#${item.text}`}
                  className={`w-full text-left p-2 rounded flex items-center space-x-2 transition-colors duration-200`}
                  onClick={() => setMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
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
