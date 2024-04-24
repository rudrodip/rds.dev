"use client";

import { aboutConfig } from "@/config/about";
import { ExperienceSection } from "./Experience";
import SocialIcons from "@/components/Socials/SocialIcons";
import { Button } from "@/components/ui/button";
import TechStack from "./tech-stack";

export const HeroSection = () => {
  return (
    <section className="max-w-2xl mx-auto flex-cc my-6 md:my-10">
      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="head-text-md">{aboutConfig.name}</h1>
          <span className="text-sm">
            a.k.a.{" "}
            <a
              href={aboutConfig.links.twitter}
              target="_blank"
              className="underline"
            >
              @rds_agi
            </a>
          </span>
        </div>
        <p className="desc">
          {aboutConfig.bio}
        </p>
        <p className="text-sm tracking-wide">stack agnostic developer &gt; Jack of all trades, master of some</p>
        <div className="flex gap-4 align-middle flex-wrap my-5">
          <Button asChild variant="outline" size="sm" className="btn-press hover:bg-background">
            <a href="https://cal.com/rds-agi" target="_blank" referrerPolicy="no-referrer">Get in touch</a>
          </Button>
          <Button asChild variant="outline" size="sm" className="relative btn-press hover:bg-background rounded-tr-[5px]">
            <a href="https://cal.com/rds-agi" target="_blank" referrerPolicy="no-referrer">
              Resume
              <span className="w-[8px] h-[8px] rounded-full absolute top-[-3px] right-[-3px] animate-ping bg-accent"></span>
            </a>
          </Button>
          <SocialIcons />
        </div>
        <ExperienceSection />
        <TechStack />
      </div>
    </section>
  );
};
