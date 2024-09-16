import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import ProjectModal from "./components/ProjectModal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Project } from "./types";
import { containerVariants, headerMenu, itemVariants } from "./utils";
import Education from "./components/Education";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") || "dark");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === "light") {
      setDarkMode(theme);
    } else {
      setDarkMode("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const handleDarkMode = () => {
    const newDarkMode = darkMode === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newDarkMode);
    setDarkMode(newDarkMode);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${darkMode} min-h-screen bg-background text-font-color`}
    >
      <header className={`sticky z-10 top-0 bg-gray-background text-white shadow-lg`}>
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
            onClick={handleDarkMode}
            className="p-2 rounded-full hover:bg-light-gray-background"
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

        <Projects selectProject={setSelectedProject} />

        <Experience />

        <Education />

        <Skills />
      </main>

      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <motion.footer variants={itemVariants} className={`mt-12 py-4 text-center bg-footer-background `}>
        <p>© 2024 Pablo Barbero. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}
