"use client";

import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Comment from "@/components/Projects/comment";
import { VideoJs } from "@/components/video-component/videojs";

const motionConfig = {
  transition: { duration: 0.5 },
  initial: { y: "10%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

export default function Featured4() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1610px)");

  const techStack = [
    "Next.js",
    "Framer Motion",
    "Solana web3js",
    "C++",
    "React native",
    "Tanstack query",
    "ESP-32",
  ];

  return (
    <section className="w-full mt-8 lg:mt-24 max-w-7xl mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># 1.</span>
        <a
          href="https://sonicrypt.vercel.app"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="sonicrypt">Sonicrypt</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          Sonicrypt is a compact and intuitive tool designed to enhance the user
          experience for both buyers and sellers engaging in crypto transactions
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://sonicrypt.vercel.app" target="_blank">
          <VideoJs
            options={{
              muted: true,
              sources: [
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/white-theme.mp4?alt=media&token=34acc426-7e1e-4588-be73-aca560871353",
                  type: "video/mp4",
                },
              ],
            }}
            fallbackImageUrl="https://sonicrypt.vercel.app/og.png"
          />
        </a>
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
            <a href="https://sonicrypt.vercel.app" target="_blank">
              Website
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://github.com/Sonicrypt" target="_blank">
              Github
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        Its primary function is to provide immediate auditory and visual
        confirmation of successful payments, thereby instilling confidence and
        trust in digital transactions.
      </p>
    </section>
  );
}
