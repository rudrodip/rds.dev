"use client";

import { aboutConfig } from "@/config/about";
import { ExperienceSection } from "./Experience";
import SocialIcons from "@/components/Socials/SocialIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DiscordApperance from "../Socials/DiscordApperance";
import { techStack } from "@/config/techstack";
import { ParallaxText } from "./Parallax";
import Image from "next/image";
import { Tech } from "@/types";
import { hexToRGBA } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const length = techStack.length;
  const techStack1 = techStack.slice(0, length / 4);
  const techStack2 = techStack.slice(length / 4, length / 2);
  const techStack3 = techStack.slice(length / 2, (length / 4) * 3);
  const techStack4 = techStack.slice((length / 4) * 3, length);

  return (
    <section className="w-full flex justify-center items-center my-12 lg:my-24">
      <div className="w-full md:w-1/2 xl:w-full flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline">
            <h1 className="head-text primary-gradient">{aboutConfig.name}</h1>
            <DiscordApperance />
          </div>
          <span className="text-xs primary-gradient">
            aka{" "}
            <a
              href={aboutConfig.links.twitter}
              target="_blank"
              className="text-blue-400 underline"
            >
              @rds_agi
            </a>
          </span>
        </div>
        <p className="desc primary-gradient font-semibold">
          {aboutConfig.bio.substring(0, aboutConfig.bio.lastIndexOf(" "))}{" "}
          <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
            <span className="relative text-white">
              {aboutConfig.bio.slice(aboutConfig.bio.lastIndexOf(" ") + 1)}
            </span>
          </span>
        </p>
        <div className="flex gap-4 align-middle flex-wrap my-5">
          <Button asChild variant="outline" size="sm">
            <Link href="/#contact">Get in touch</Link>
          </Button>
          <SocialIcons />
        </div>
        <ExperienceSection />
      </div>
      <div className="hidden relative xl:flex flex-col h-[600px] w-full justify-center items-end">
        <div
          className="overflow-hidden w-auto h-[600px] flex gap-10 justify-end items-center  
          after:content['']
          after:to-transparent
          after:from-background
          after:bg-gradient-to-t
          after:right-0
          after:bottom-0
          after:w-[70%]
          after:h-20
          after:z-10
          after:absolute

          before:content['']
          before:to-transparent
          before:from-background
          before:bg-gradient-to-b
          before:top-0
          before:right-0
          before:w-[70%]
          before:h-20
          before:z-10
          before:absolute"
        >
          <div>
            <ParallaxText baseVelocity={-1}>
              <div className="flex flex-col gap-2">
                {techStack1.map((tech) => (
                  <TechLogo key={tech.name} tech={tech} />
                ))}
              </div>
            </ParallaxText>
          </div>
          <div>
            <ParallaxText baseVelocity={1}>
              <div className="flex flex-col gap-2">
                {techStack2.map((tech) => (
                  <TechLogo key={tech.name} tech={tech} />
                ))}
              </div>
            </ParallaxText>
          </div>
          <div>
            <ParallaxText baseVelocity={-1}>
              <div className="flex flex-col gap-2">
                {techStack3.map((tech) => (
                  <TechLogo key={tech.name} tech={tech} />
                ))}
              </div>
            </ParallaxText>
          </div>
          <div>
            <ParallaxText baseVelocity={1}>
              <div className="flex flex-col gap-2">
                {techStack4.map((tech) => (
                  <TechLogo key={tech.name} tech={tech} />
                ))}
              </div>
            </ParallaxText>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TechLogo = ({ tech }: { tech: Tech }) => {
  const experiencePercentage = tech.experience * 100;
  const background = `linear-gradient(0deg, ${hexToRGBA(
    tech.color,
    0.5
  )} ${experiencePercentage}%, rgba(211, 211, 211, 0.5) ${experiencePercentage}%)`;
  return (
    <motion.div
      className="w-full aspect-square p-3 border rounded backdrop-blur-md items-center justify-center flex btn-gradient"
      whileHover={{ background: background }}
    >
      <Image src={tech.icon} alt={tech.name} width={50} height={50} />
    </motion.div>
  );
};
