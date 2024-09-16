import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    image: "https://i.pinimg.com/originals/d2/89/f1/d289f10cf5df946ebfe5622f410b0f95.jpg",
    url: "https://www.google.com",
  },
  { id: 2, name: "Project 2", image: "https://images7.alphacoders.com/119/thumb-1920-1191191.jpg", url: "https://www.google.com" },
  {
    id: 3,
    name: "Project 3",
    image:
      "https://c4.wallpaperflare.com/wallpaper/790/188/841/williams-f1-formula-cars-formula-1-williams-racing-hd-wallpaper-preview.jpg",
    url: "https://www.google.com",
  },
  /* {
    id: 4,
    name: "Project 4",
    image:
      "https://c4.wallpaperflare.com/wallpaper/547/405/169/ferrari-f1-2015-f1-2015-sebastian-vettel-2015-ferrari-f1-wallpaper-preview.jpg",
    url: "https://www.google.com",
  },
  {
    id: 5,
    name: "Project 5",
    image: "https://i.pinimg.com/originals/d7/e7/bd/d7e7bd39e6cc1cf2b3b0775e8001cb3f.jpg",
    url: "https://www.google.com",
  }, */
];

export default function ProjectColumns() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="flex h-screen w-full space-x-2">
      {projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.url}
          className={`relative flex-1 transition-all duration-300 ease-in-out overflow-hidden
                      ${hoveredId === project.id ? "flex-grow" : "flex-shrink"}`}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-300"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div
            className={`absolute inset-0 bg-gray-800 transition-opacity duration-300
                        ${hoveredId === project.id ? "opacity-0" : "opacity-50"}`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-black text-white p-4 transform transition-transform duration-300 ease-in-out
                        ${hoveredId === project.id ? "translate-y-0" : "translate-y-full"}`}
          >
            <h2 className="text-xl font-bold">{project.name}</h2>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
