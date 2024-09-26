import { Briefcase, Code, Cpu, Mail, User } from "lucide-react";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

export const headerMenu = [
  { text: "About", icon: User },
  { text: "Projects", icon: Code },
  { text: "Experience", icon: Briefcase },
  { text: "Education", icon: User },
  { text: "Skills", icon: Cpu },
  { text: "Contact", icon: Mail },
];
