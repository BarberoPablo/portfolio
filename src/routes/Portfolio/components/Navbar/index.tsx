import { motion } from "framer-motion";
import { headerMenu } from "../../utils";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navbar({ toggleDarkMode }: { toggleDarkMode: () => void }) {
  const darkMode = localStorage.getItem("theme") || "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 bg-gray-background text-white shadow-lg`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="hidden md:flex space-x-4">
              {headerMenu.map((item) => (
                <li key={item.text}>
                  <motion.a
                    href={`#${item.text}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-row items-center gap-1 mx-1 p-1 rounded hover:bg-gray-900"
                  >
                    <item.icon />
                    <span>{item.text}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-light-gray-background"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
      </div>
      <nav className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col space-y-2 p-4">
          {headerMenu.map((item) => (
            <li key={item.text}>
              <a
                href={`#${item.text}`}
                className={`w-full text-left p-2 rounded flex items-center space-x-2 transition-colors duration-200`}
                onClick={() => setMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
