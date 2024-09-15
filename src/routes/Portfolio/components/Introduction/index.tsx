import { motion } from "framer-motion";
import { itemVariants } from "../../utils";
import { Gamepad, Github, Heart, Linkedin, Mail, ShoppingCart } from "lucide-react";

export default function Introduction() {
  return (
    <motion.section id="about" variants={itemVariants} className="mb-12 flex flex-col md:flex-row items-center">
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
        <motion.div variants={itemVariants} className="flex space-x-4 mb-4">
          <span className="flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" /> E-commerce
          </span>
          <span className="flex items-center">
            <Heart className="w-5 h-5 mr-2" /> Healthcare
          </span>
          <span className="flex items-center">
            <Gamepad className="w-5 h-5 mr-2" /> Gaming
          </span>
        </motion.div>
        <motion.div variants={itemVariants} className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/BarberoPablo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/barberopablo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:pablobarbero220@gmail.com" className="hover:text-yellow-500">
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
