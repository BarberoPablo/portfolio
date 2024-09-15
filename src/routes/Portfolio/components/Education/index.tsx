import { motion } from "framer-motion";
import { itemVariants } from "../../utils";

export default function Education({ darkMode }: { darkMode: boolean }) {
  return (
    <motion.section id="education" variants={itemVariants} className="mb-12">
      <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6">
        Education
      </motion.h3>
      <motion.div variants={itemVariants} className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h4 className="text-xl font-bold mb-2">Ingeniería en sistemas de la información</h4>
        <p className="text-lg mb-2">Universidad Nacional del Sur</p>
        <p className="text-sm mb-4">March 2015 - December 2020</p>
        <p>
          I've studied Engineering in Information Systems for five years. While studying, I had many subjects oriented to mathematics, which
          I really enjoyed and was able to pass, and just a few subjects oriented to programming, which I fell in love with. Then I realized
          that programming was what I wanted for my future, it was exactly what I was looking for, so I started to dedicate my full time to
          this world of coding and putting the university aside for now. These five years taught me a lot, I don't regret it at all.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className={`p-6 mt-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h4 className="text-xl font-bold mb-2">Self-Taught Developer & Journey to Frontend</h4>
        <p className="text-lg mb-4">
          Alongside my university studies, I embarked on a self-taught journey, diving into various online courses and resources. I started
          as a fullstack developer, with a particular interest in backend development. However, over time, I discovered that frontend
          development was where my true passion lies. I sharpened my abilities in creating dynamic user interfaces and became fully
          dedicated to frontend technologies, which now is the core focus of my work.
        </p>
      </motion.div>
    </motion.section>
  );
}
