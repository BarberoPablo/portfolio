"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { featuredProject } from "./utils";

export default function FeaturedProject() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
  };

  // Pre-load next image and prev image
  useEffect(() => {
    if (currentImageIndex < featuredProject.backgroundImages.length - 1) {
      preloadImage(featuredProject.backgroundImages[currentImageIndex + 1]);
      preloadImage(featuredProject.phoneImages[currentImageIndex + 1]);
    }
    if (currentImageIndex > 0) {
      preloadImage(featuredProject.backgroundImages[currentImageIndex - 1]);
      preloadImage(featuredProject.phoneImages[currentImageIndex - 1]);
    }
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === featuredProject.backgroundImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? featuredProject.backgroundImages.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{featuredProject.name}</h2>
        <div className="relative aspect-video mb-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={featuredProject.backgroundImages[currentImageIndex]}
              alt={`background image ${currentImageIndex + 1}`}
              className="rounded-md z-10 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              key={featuredProject.phoneImages[currentImageIndex]}
              src={featuredProject.phoneImages[currentImageIndex]}
              alt={`phone image ${currentImageIndex + 1}`}
              className="hidden sm:flex absolute -top-[50px] right-0 z-20 rounded-md w-[270px] h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <button
            className="absolute left-2 top-1/2 z-30 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-2 top-1/2 z-30 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={featuredProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-icon-hover"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={featuredProject.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-icon-hover"
          >
            <Globe className="w-5 h-5" />
          </motion.a>
        </div>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{featuredProject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {featuredProject.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
