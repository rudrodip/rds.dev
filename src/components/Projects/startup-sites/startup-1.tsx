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

export default function Startup1() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const techStack = [
    "Next.js",
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
        <span className="primary-gradient tshadow"># 1.</span>
        <a
          href="https://www.bettreinstitute.com/"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="bi">Bettre Institute</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          Bettre Institute, a pioneering force in reshaping education for a
          sustainable and just future
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://www.bettreinstitute.com/" target="_blank">
          <video
            autoPlay
            muted
            loop
            controls={false}
            className="w-full aspect-video rounded"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/b.mp4?alt=media&token=dfcb26b3-9988-4d86-aed1-dcf6cbbd3a5b"
              type="video/mp4"
            />
          </video>
        </a>
        <motion.div
          className={cn(
            "absolute flex flex-col gap-3",
            isMobile ? "hidden" : "top-40 -left-40"
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
            <a href="https://www.bettreinstitute.com/" target="_blank">
              Website
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://www.facebook.com/bettreinstitute" target="_blank">
              Facebook
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://www.instagram.com/bettreinstitute" target="_blank">
              Instagram
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        I am building the official website for Bettre Institute, also developing
        AI solutions for our courses.
      </p>
    </section>
  );
}
