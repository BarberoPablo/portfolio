import { motion } from "framer-motion";
import { itemVariants } from "../../utils";
import Contact from "../Contact";

export default function Introduction() {
  return (
    <motion.section id="About" variants={itemVariants} className="mb-12 flex flex-col md:flex-row items-center">
      <motion.img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20image-saBrGBiM3zYiNZwxPBFCzlJix5ienE.png"
        alt="Pablo Barbero"
        className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <div>
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
          Hello, I'm Pablo Barbero
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl mb-4">
          Frontend Developer Dedicated to Building Meaningful and Efficient Applications
        </motion.p>
        <motion.p variants={itemVariants} className="mb-4">
          My work spans e-commerce platforms and healthcare, where I developed an application that lets surgeons annotate and highlight
          critical areas on bone scans. My love for video games drives my creativity, allowing me to build intuitive and interactive user
          experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex space-x-4">
          <Contact />
        </motion.div>
      </div>
    </motion.section>
  );
}
