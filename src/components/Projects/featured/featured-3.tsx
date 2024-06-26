"use client";

import { VideoJs } from "@/components/video-component/videojs";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, YoutubeIcon } from "lucide-react";
import Comment from "@/components/Projects/comment";

const motionConfig = {
  transition: { duration: 0.5 },
  initial: { y: "10%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

export default function Featured3() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1610px)");

  const techStack = [
    "Esp32",
    "Arduino Nano",
    "C++",
    "PlatformIO",
    "React Native",
  ];

  return (
    <section className="w-full mt-8 lg:mt-24 max-w-7xl mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># 4.</span>
        <a
          href="https://www.youtube.com/watch?v=uYZytPxzjsk"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="durbar">Durbar Robot</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          <span>
            Durbar is a multi purpose robot that I built in National Robotics
            Olympiad, 2022
          </span>
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://www.youtube.com/watch?v=uYZytPxzjsk" target="_blank">
          <VideoJs
            options={{
              muted: true,
              sources: [
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/r.mp4?alt=media&token=701da548-d9e2-4d74-bbef-1a912a6b0558",
                  type: "video/mp4",
                },
              ],
            }}
            fallbackImageUrl="/projects/featured3/thumbnail.png"
          />
        </a>
        <motion.div
          className={cn(
            "absolute flex flex-col gap-3",
            isTablet ? "top-40 -left-2" : "top-40 -left-40",
            isMobile && "hidden"
          )}
          {...motionConfig}
          transition={{ duration: 0.25 }}
        >
          <Comment
            comment="Wow, Rudro! This robot is amazing! Truly, these types of projects are an inspiration for me and for the entire developer community!"
            commentor="Cristian Marcelo de Picciotto"
            commentorDesignation="Systems Analyst | Magento Certified Professional Developer"
            commentorImage="/commentor/marcelo.jpg"
            commentorUrl="https://www.linkedin.com/in/cristian-marcelo-de-picciotto/"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-wrap items-center justify-between mt-2">
        <div className="flex items-center flex-wrap gap-2">
          <span className="inline-block text-sm">Tech stack: </span>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block text-sm px-1 py-[0.5px] rounded-lg bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center">
          <Button size="sm" variant="link" asChild>
            <a
              href="https://github.com/rudrodip/DurbarDriverProgram"
              target="_blank"
            >
              Github - Driver Program
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a
              href="https://github.com/rudrodip/DurbarController"
              target="_blank"
            >
              Github - Controller
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a
              href="https://www.youtube.com/watch?v=uYZytPxzjsk"
              target="_blank"
            >
              Video
              <YoutubeIcon size={20} className="ml-1 text-red-500" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        It's built using Esp32 and Arduino Nano. The controller is built using
        React Native. It has multiple sensors, like sonar sensor, temperature
        and humidity sensor, and one of the unique features is that it has a
        5DOF robotic arm. The robot can be controlled using a mobile app
      </p>
    </section>
  );
}
