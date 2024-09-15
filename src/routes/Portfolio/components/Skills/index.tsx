import { motion } from "framer-motion";
import { containerVariants, itemVariants, skills } from "../../utils";

export default function Skills({ darkMode }: { darkMode: boolean }) {
  return (
    <motion.section id="skills" variants={itemVariants}>
      <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6">
        Skills
      </motion.h3>
      <motion.div variants={containerVariants} className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 rounded-full ${darkMode ? "bg-yellow-700" : "bg-yellow-200 text-yellow-900"}`}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
