import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { modalVariants } from "../../utils";
import { Github, Globe, X } from "lucide-react";
import { Project } from "../../types";

export default function ProjectModal({
  darkMode,
  selectedProject,
  setSelectedProject,
}: {
  darkMode: boolean;
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
              <button onClick={() => setSelectedProject(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="mb-4">{selectedProject.details}</p>
            <div className="flex space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-700"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
              <a
                href={selectedProject.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-700"
              >
                <Globe className="w-5 h-5 mr-2" /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
