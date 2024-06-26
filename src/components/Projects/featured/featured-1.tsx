"use client";

import Image from "next/image";
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

export default function Featured1() {
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
        <span className="primary-gradient tshadow"># 2.</span>
        <a
          href="https://nexusos.vercel.app"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="nexusos">NexusOS</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          Let's you create, collaborate and share your own projects, help you
          understand research papers and repositories
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a href="https://nexusos.vercel.app" target="_blank">
          <VideoJs
            options={{
              muted: true,
              sources: [
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/n.mp4?alt=media&token=bbd5ffed-cb00-4a54-98a4-f989887644bd",
                  type: "video/mp4",
                },
              ],
            }}
            fallbackImageUrl="/projects/featured1/thumbnail.png"
          />
        </a>
        <motion.div
          className={cn(
            "absolute",
            isTablet ? "-top-5 -right-0" : "-top-16 -right-16"
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
            commentorImage="/commentor/mamin.jpg"
            commentorUrl="https://www.linkedin.com/in/rod-mamin-2a48a12b/"
          />
          <Comment
            commentor="Ben Holmes"
            commentorDesignation="President of Whiteboards @astrodotbuild"
            commentorImage="/commentor/ben.jpg"
            commentorUrl="https://twitter.com/BHolmesDev"
            comment="NexusOS looks sweet"
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
        NexusOS is a platform that empowers researchers, scientists, and
        innovators to come together and collaborate on impactful scientific
        projects. It let's you create, collaborate and share your own projects,
        help you understand research papers and repositories
      </p>
    </section>
  );
}
