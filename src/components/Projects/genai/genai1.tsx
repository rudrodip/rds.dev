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

export default function GenAI1() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1610px)");

  const techStack = [
    "Next.js",
    "Next-Auth",
    "Supabase",
    "Prisma",
    "Shadcn UI",
    "Github octokit",
    "TailwindCSS",
    "Framer Motion",
  ];

  return (
    <section className="w-full mt-8 lg:mt-24 max-w-7xl mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># 1.</span>
        <a
          href="https://nexusos.vercel.app"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="nexbie">NexusOS</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          Let's you create, collaborate and share your own projects, help you
          understand research papers and repositories
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://nexusos.vercel.app" target="_blank">
          <video
            autoPlay
            muted
            loop
            controls={false}
            className="w-full aspect-video rounded"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/n.mp4?alt=media&token=bbd5ffed-cb00-4a54-98a4-f989887644bd"
              type="video/mp4"
            />
          </video>
        </a>
        <motion.div
          className={cn(
            "absolute",
            isMobile ? "-top-5 -right-0" : "-top-16 -right-16"
          )}
          {...motionConfig}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25 }}
        >
          <a
            href="https://www.spaceappschallenge.org/2023/find-a-team/cholo-bangladesh/"
            target="_blank"
          >
            <Image
              src="/projects/featured1/award.png"
              alt="NASA Space Apps Challenge 2023"
              width={isMobile ? 75 : 200}
              height={isMobile ? 75 : 200}
              className="rounded"
            />
          </a>
        </motion.div>
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
            comment="That’s cool! Just in two days you did so much! Love hackathons for it!"
            commentor="Rod Mamin"
            commentorDesignation="Founder of lunco.space"
            commentorImage="https://media.licdn.com/dms/image/C5603AQHoG8QDfr-G-w/profile-displayphoto-shrink_800_800/0/1536845520694?e=1712793600&v=beta&t=1coeungCrszwL7Olk0TqYAFe9gnG-Koe0LVqRYmkl4o"
            commentorUrl="https://www.linkedin.com/in/rod-mamin-2a48a12b/"
          />
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
            <a href="https://nexusos.vercel.app" target="_blank">
              Website
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a href="https://github.com/rudrodip/nexusos" target="_blank">
              Github
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a
              href="https://www.spaceappschallenge.org/2023/find-a-team/cholo-bangladesh/"
              target="_blank"
            >
              Submission
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a
              href="https://www.linkedin.com/posts/rudrodip_nasa-space-apps-challenge-activity-7125520414692298753-vb51?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              Socials
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        The platform has a chatbot named Nexbie which helps you understand
        research papers, repositories, contributor recommendation and much more.
        The platform also has a feature to create, collaborate and share your
        own projects.
      </p>
    </section>
  );
}
