import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import ProjectModal from "./components/ProjectModal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Project } from "./types";
import { containerVariants } from "./utils";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") || "dark");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      <Navbar toggleDarkMode={handleDarkMode} />

      <main className="container mx-auto px-4 py-8">
        <Introduction />

        <Projects selectProject={setSelectedProject} />

        <Experience />

        <Education />

        <Skills />
      </main>

      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <footer id="Contact" className={`flex flex-col content-center items-center mt-12 py-4 bg-footer-background`}>
        <Contact />© 2024 Pablo Barbero. All rights reserved.
      </footer>
    </motion.div>
  );
}
