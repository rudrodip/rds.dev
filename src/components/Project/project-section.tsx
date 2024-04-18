"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { projects } from "@src/config/projects";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Info,
  Share,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveDown,
} from "lucide-react";

export default function ProjectSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(0);

  const handleIncrement = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    } else {
      setCurrentProject(0);
    }
  };

  const handleDecrement = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    } else {
      setCurrentProject(projects.length - 1);
    }
  };

  const handleMediaIncrement = () => {
    if (currentMedia < projects[currentProject].media.images.length - 1) {
      setCurrentMedia(currentMedia + 1);
    } else {
      setCurrentMedia(0);
    }
  };

  const handleMediaDecrement = () => {
    if (currentMedia > 0) {
      setCurrentMedia(currentMedia - 1);
    } else {
      setCurrentMedia(projects[currentProject].media.images.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((currentProject + 1) % projects.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentProject]);

  return (
    <motion.div
      id="projects"
      className="hidden md:flex flex-cc w-full max-w-7xl mx-auto h-[97vh]"
    >
      <div
        id="nintendo_container"
        className="flex-cc w-full h-4/5 rounded-[7rem] border br-console"
      >
        <div className="h-full w-[15%] rounded-tl-[7rem] rounded-bl-[7rem] bg-[#E3DDC5] flex-cc">
          <div className="relative w-[7.5rem] h-[7.5rem] text-zinc-300">
            <div
              onClick={handleMediaIncrement}
              className="absolute left-1/2 -translate-x-1/2 top-0 console-btn-sm"
            >
              <MoveUp size={17} />
            </div>
            <div
              onClick={handleDecrement}
              className="absolute left-0 top-1/2 -translate-y-1/2 console-btn-sm"
            >
              <MoveLeft size={17} />
            </div>
            <div
              onClick={handleIncrement}
              className="absolute right-0 top-1/2 -translate-y-1/2 console-btn-sm"
            >
              <MoveRight size={17} />
            </div>
            <div
              onClick={handleMediaDecrement}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 console-btn-sm"
            >
              <MoveDown size={17} />
            </div>
          </div>
        </div>
        <motion.div className="h-full w-[70%] flex-cc p-2 pb-4 bg-[#5F6A79]">
          <Project currentProject={currentProject} />
        </motion.div>
        <div className="h-full w-[15%] rounded-tr-[7rem] rounded-br-[7rem] bg-[#E3DDC5] flex-cc">
          <div className="w-12 h-[7rem] rotate-30 flex-col flex-cb text-zinc-300">
            <div className="console-btn-sm">
              <Info size={17} className="rotate-[-30deg]" />
            </div>
            <div className="console-btn-sm">
              <Share size={17} className="rotate-[-30deg]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Project = ({ currentProject }: { currentProject: number }) => {
  return (
    <motion.div
      key={currentProject}
      className="w-full h-full rounded-[3px] bg-secondary flex flex-col p-2"
    >
      <motion.div
        initial={{ opacity: 0.7, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full h-[85%] flex-cc overflow-hidden"
      >
        <Image
          src={projects[currentProject].media.images[0]}
          alt={projects[currentProject].name}
          width={600}
          height={300}
          className="w-full h-auto rounded-[3px]"
        />
      </motion.div>
      <div className="w-[80%]">
        <motion.h1
          initial={{ opacity: 0.8, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          {projects[currentProject].name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0.3, x: -10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          className="text-xl font-semibold"
        >
          {projects[currentProject].slogan}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0.3, x: -10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          className="truncate"
        >
          {projects[currentProject].description}
        </motion.p>
      </div>
    </motion.div>
  );
};
