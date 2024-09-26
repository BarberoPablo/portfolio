import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils";
import { skills } from "./utils";

export default function Skills() {
  return (
    <motion.section id="Skills" variants={itemVariants}>
      <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6">
        Skills
      </motion.h3>
      <motion.div variants={containerVariants} className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 rounded-full bg-chip-background`}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
