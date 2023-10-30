"use client";

import { motion } from "framer-motion";
import { Card } from "@src/components/ui/card";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const prompts = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const TerminalUI = () => {
  return (
    <div className="border rounded hover:border-2 font-mono w-full p-5">
      <div id="menu" className="flex">
        <span
          id="red"
          className="relative lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-gray-400 hover:bg-red-500 transition-all delay-75"
        ></span>
        <span
          id="red"
          className="relative lg:w-4 lg:h-4 w-3 h-3 rounded-full ml-2 bg-gray-500 hover:bg-yellow-400 transition-all delay-75"
        ></span>
        <span
          id="red"
          className="relative lg:w-4 lg:h-4 w-3 h-3 rounded-full ml-2 bg-zinc-600 hover:bg-green-500 transition-all delay-75"
        ></span>
      </div>
      <motion.div
        id="propmts"
        className="my-4 lg:my-16 break-words text-sm md:text-md lg:text-lg backdrop-filter-none"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p variants={prompts}>$ Rudrodip.currentLocation</motion.p>
        <motion.p variants={prompts}>"Rajshahi, Bangladesh"</motion.p>
        <br />
        <motion.p variants={prompts}>$ Rudrodip.contactInfo</motion.p>
        <motion.p variants={prompts} className="gray-gradient">
          [
          <a
            className="underline_animation"
            href="mailto:official.rudrodipsarker@gmail.com"
          >
            "official.rudrodipsarker@gmail.com"
          </a>
          ,
          <a
            className="underline_animation"
            href="https://www.linkedin.com/in/rudrodip"
            target="_blank"
          >
            {" "}
            "LinkedIn"
          </a>
          ,
          <a
            className="underline_animation"
            href="https://github.com/rudrodip"
            target="_blank"
          >
            {" "}
            "Github"
          </a>
          ]
        </motion.p>
        <br />
        <motion.p variants={prompts}>$ Rudrodip.interests</motion.p>
        <motion.p variants={prompts} className="">
          [ "Programming", "Deep learning", "Mathematics", "Physics",
          "Automation", "Robotics", "Prototyping" ]
        </motion.p>
        <br />
        <motion.p variants={prompts}>$ Rudrodip.skills</motion.p>
        <motion.p variants={prompts} className="">
          ["Python", "Javascript", "Typescript", "React", "React Native", "Next
          JS", "Flutter & Dart", "Flask", "ExpressJS", "Firebase", "Tailwind
          css", "Pytorch", "Tensorflow", "Git & Github"]
        </motion.p>
        <br />
        <motion.p variants={prompts}>$ Rudrodip.currentInstitution</motion.p>
        <motion.p variants={prompts}>"Class 12, Rajshahi College"</motion.p>
      </motion.div>
    </div>
  );
};

TerminalUI.displayName = "TerminalUI";
export default TerminalUI;
