import { motion } from "framer-motion";
import { Github, Globe, Info } from "lucide-react";
import { Project } from "../../types";
import { itemVariants } from "../../utils";
import { projects } from "./utils";

export default function Projects({ selectProject }: { selectProject: (project: Project) => void }) {
  return (
    <motion.section id="Projects" variants={itemVariants} className="mb-12">
      <motion.h3 variants={itemVariants} className="text-3xl font-bold my-6">
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg bg-secondary-background`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {project.icon}
                <h4 className="text-xl font-bold ml-2">{project.name}</h4>
              </div>
              <div className="flex space-x-2">
                <motion.button whileHover={{ scale: 1.2 }} onClick={() => selectProject(project)} className="hover:text-icon-hover">
                  <Info className="w-5 h-5" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-icon-hover"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-icon-hover"
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
