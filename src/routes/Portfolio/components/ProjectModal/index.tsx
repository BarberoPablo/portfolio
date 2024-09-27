import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe, X } from "lucide-react";
import React from "react";
import { Project } from "../../types";
import { modalVariants } from "../../utils";

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
}: {
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
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl max-h-[80vh] mt-[64px] lg:mt-[72px] overflow-y-auto text-font-color`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={() => setSelectedProject(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center">
              <h3 className="text-xl font-bold">Motivation:</h3>
            </div>
            <p className="mb-4">{selectedProject.motivation}</p>
            <div className="flex justify-center">
              <h3 className="text-xl font-bold">Project details:</h3>
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
