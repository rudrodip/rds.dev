"use client";

import { VideoJs } from "@/components/video-component/videojs";
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

export default function GenAI2() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1610px)");

  const techStack = [
    "Next.js",
    "React three fiber",
    "Next-Auth",
    "Supabase",
    "Prisma",
    "Shadcn UI",
    "TailwindCSS",
    "Framer Motion",
  ];

  return (
    <section className="w-full mt-8 lg:mt-24 max-w-7xl mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># 2.</span>
        <a
          href="https://greenlander.vercel.app/"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="greenlander">Greenlander</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          Our platform is a dedicated initiative designed to educate and empower
          individuals in the fight against climate change.
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://greenlander.vercel.app/" target="_blank">
          <VideoJs
            options={{
              muted: true,
              sources: [
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/g.mp4?alt=media&token=6fe9e174-7bb5-4402-b513-60ae11827433",
                  type: "video/mp4",
                },
              ],
            }}
            fallbackImageUrl="/projects/genai2/thumbnail.png"
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
            <a href="https://greenlander.vercel.app/" target="_blank">
              Website
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://github.com/rudrodip/greenland" target="_blank">
              Github
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        GreenLander is proudly submitted as a project for the Hack for Earth
        hackathon.
      </p>
    </section>
  );
}
