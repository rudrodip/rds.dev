"use client";

import { aboutConfig } from "@/config/about";
import { ExperienceSection } from "./Experience";
import SocialIcons from "@/components/Socials/SocialIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DiscordApperance from "../Socials/DiscordApperance";
import { techStack } from "@/config/techstack";
import Image from "next/image";
import { Tech } from "@/types";

export const HeroSection = () => {
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
        <p className="desc">
          {aboutConfig.bio.substring(0, aboutConfig.bio.lastIndexOf(" "))}{" "}
          <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
            <span className="relative text-white">
              {aboutConfig.bio.slice(aboutConfig.bio.lastIndexOf(" ") + 1)}
            </span>
          </span>
        </p>
        <div className="flex gap-4 align-middle flex-wrap my-5">
          <Button asChild variant="outline" size="sm">
            <Link href="https://cal.com/rds_agi">Get in touch</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="https://raw.githubusercontent.com/rudrodip/rudrodip/main/resume.pdf" className="relative">
              Resume
              <span className="w-[8px] h-[8px] rounded-full absolute top-[-3px] right-[-3px] animate-ping bg-primary"></span>
            </Link>
          </Button>
          <SocialIcons />
        </div>
        <ExperienceSection />
      </div>
      <div className="hidden relative xl:flex flex-col h-[600px] w-full justify-center items-end">
        <div className="w-[90%] grid grid-cols-5 gap-3 place-items-center bg-sky-300/10 p-3 rounded-xl">
          {techStack.map((tech, index) => (
            <TechLogo key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const TechLogo = ({ tech }: { tech: Tech }) => {
  return (
    <div
      className="w-full aspect-square p-3 items-center justify-center flex flex-col rounded-lg border group border-transparent hover:border-border hover:scale-110 hover:bg-cyan-400/30 transition-all transform-gpu duration-75"
    >
      <Image src={tech.icon} alt={tech.name} width={50} height={50} />
      <span className="text-xs invisible group-hover:visible absolute text-center bottom-0">{tech.name}</span>
    </div>
  );
};
