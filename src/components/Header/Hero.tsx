"use client";

import { aboutConfig } from "@/config/about";
import { ExperienceSection } from "./Experience";
import SocialIcons from "@/components/Socials/SocialIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center my-12">
      <div className="w-full md:w-1/2 xl:w-full flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="head-text">{aboutConfig.name}</h1>
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
          {aboutConfig.bio.substring(0, aboutConfig.bio.lastIndexOf(" "))}{" "}
          <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-accent relative inline-block">
            <span className="relative">
              {aboutConfig.bio.slice(aboutConfig.bio.lastIndexOf(" ") + 1)}
            </span>
          </span>
        </p>
        <p className="text-sm tracking-wide">stack agnostic developer &gt; Jack of all trades, master of some</p>
        <div className="flex gap-4 align-middle flex-wrap my-5">
          <Button asChild variant="outline" size="sm">
            <Link href="/#contact">Get in touch</Link>
          </Button>
          <SocialIcons />
        </div>
        <ExperienceSection />
      </div>
      <div className="w-full flex justify-center items-center scale-x-[-1]">
        <Image 
          src="/icon.png"
          alt="rds_agi"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  );
};
