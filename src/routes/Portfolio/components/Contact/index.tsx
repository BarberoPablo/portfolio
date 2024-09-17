import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex space-x-4">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://github.com/BarberoPablo"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-icon-hover"
      >
        <Github className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.linkedin.com/in/barberopablo/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-icon-hover"
      >
        <Linkedin className="w-6 h-6" />
      </motion.a>
      <motion.a whileHover={{ scale: 1.2 }} href="mailto:pablobarbero220@gmail.com" className="hover:text-icon-hover">
        <Mail className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
