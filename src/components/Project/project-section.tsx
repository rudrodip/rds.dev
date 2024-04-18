"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { projects } from "@src/config/projects";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  const [paused, setPaused] = useState(false);

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
    if (!paused) {
      const interval = setInterval(() => {
        if (currentProject < projects.length - 1) {
          setCurrentProject(currentProject + 1);
        } else {
          setCurrentProject(0);
        }
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [currentProject, paused]);

  return (
    <div
      id="projects"
      className="hidden md:flex flex-cc w-full max-w-7xl mx-auto h-[97vh] text-zinc-800"
    >
      <div
        id="nintendo_container"
        className="flex-cc w-full h-4/5 rounded-[7rem] border br-console"
      >
        <div className="h-full w-[12%] rounded-tl-[7rem] rounded-bl-[7rem] bg-[#E3DDC5] flex-cc">
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
        <div className="h-full w-[76%] flex-cc p-2 bg-[#5F6A79]">
          <Project currentProject={currentProject} />
        </div>
        <div className="h-full w-[12%] rounded-tr-[7rem] rounded-br-[7rem] bg-[#E3DDC5] flex-cc">
          <div className="w-12 h-[7rem] rotate-30 flex-col flex-cb text-zinc-300">
            <Dialog open={paused} onOpenChange={() => setPaused(!paused)}>
              <DialogTrigger onClick={() => setPaused(true)}>
                <div className="console-btn-sm">
                  <Info size={17} className="rotate-[-30deg]" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[80vw]">
                <ProjectDetails
                  currentProject={currentProject}
                  resume={() => setPaused(false)}
                />
              </DialogContent>
            </Dialog>
            <div className="console-btn-sm">
              <Share size={17} className="rotate-[-30deg]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Project = ({ currentProject }: { currentProject: number }) => {
  return (
    <motion.div
      key={currentProject}
      className="w-full h-full rounded-[3px] bg-[#D6D0C1] flex flex-col p-2"
    >
      <motion.div
        initial={{ opacity: 0.7, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full h-[85%] flex-cc overflow-hidden rounded-[5px]"
      >
        <Image
          src={projects[currentProject].media.images[0]}
          alt={projects[currentProject].name}
          width={600}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>
      <div className="w-full">
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

const ProjectDetails = ({
  currentProject,
  resume,
}: {
  currentProject: number;
  resume: () => void;
}) => {
  return (
    <section className="w-full h-full flex-cb p-2">
      <div className="w-[40%] h-full flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{projects[currentProject].name}</h1>
        <h2 className="text-xl font-semibold">
          {projects[currentProject].slogan}
        </h2>
        <p className="max-w-sm">{projects[currentProject].description}</p>
        <h1 className="mt-5 text-xl">Related repositories</h1>
        {projects[currentProject].relatedRepos.map((repo, index) => (
          <a key={index} href={repo}>
            <p className="text-sm underline">
              {repo.substring("https://github.com/".length)}
            </p>
          </a>
        ))}

        <h1 className="mt-5 text-xl">Related links</h1>
        <div className="w-full flex gap-2">
          {Object.keys(projects[currentProject].links).map((key, _) => (
            <a key={key} href={projects[currentProject].links[key]}>
              <p className="text-sm underline">{key}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col items-center">
        <Image
          src={projects[currentProject].media.images[0]}
          alt={projects[currentProject].name}
          width={600}
          height={300}
          className="w-full h-auto rounded-[3px]"
        />
      </div>
    </section>
  );
};
