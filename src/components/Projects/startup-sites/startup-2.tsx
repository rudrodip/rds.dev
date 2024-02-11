"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Comment from "@/components/Projects/comment";

const motionConfig = {
  transition: { duration: 0.5 },
  initial: { y: "10%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

export default function Startup2() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1610px)");

  const techStack = [
    "Next.js",
    "React three fiber",
    "Next Contentlayer",
    "Next UI",
    "TailwindCSS",
    "Framer Motion",
  ];

  return (
    <section className="w-full mt-8 lg:mt-24 max-w-7xl mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># 2.</span>
        <a
          href="https://www.lunco.space/"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="lunco">LunCo</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          LunCo is a open-source simulation tool designed for planning space
          missions, with a focus on lunar settlements
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://www.lunco.space/" target="_blank">
          <video
            autoPlay
            muted
            loop
            controls={false}
            className="w-full aspect-video rounded"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/l.mp4?alt=media&token=97dd3289-3fb6-430d-ac79-f2e63de3b070"
              type="video/mp4"
            />
          </video>
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
          {/* <Comment
            comment="Some random comment by a random commentor"
            commentor="Commentor"
            commentorDesignation="Random text"
            commentorImage="https://github.com/rudrodip.png"
            commentorUrl="https://github.com/"
          /> */}
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
            <a href="https://www.lunco.space/" target="_blank">
              Website
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://github.com/rudrodip/lunco-web" target="_blank">
              Github - website
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://twitter.com/LunCoSim" target="_blank">
              Twitter
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://discord.gg/GyeTA6Pwqj" target="_blank">
              Discord
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        Built the official website for LunCo
      </p>
    </section>
  );
}
