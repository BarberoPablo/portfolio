import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { itemVariants } from "../../utils";
import { experiences } from "./utils";

export default function Experience() {
  return (
    <motion.section id="Experience" variants={itemVariants} className="my-12">
      <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6">
        Professional Experience
      </motion.h3>
      {experiences.map((exp, index) => (
        <motion.div key={index} variants={itemVariants} className={"mb-6 p-6 rounded-lg shadow-lg bg-secondary-background"}>
          <div className="flex items-center mb-2 gap-2">
            <h4 className="text-xl font-bold">{exp.title}</h4>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-icon-hover"
            >
              <Globe className="w-5 h-5" />
            </motion.a>
          </div>
          <p className="text-lg mb-2">{exp.company}</p>
          <p className="text-sm mb-4">{exp.location}</p>
          <ul className="list-disc list-inside">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
}
