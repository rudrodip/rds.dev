import { aboutConfig } from "@src/config/about";
import { ExperienceSection } from "./Experience";
import SocialIcons from "@src/components/Socials/SocialIcons";
import { Button } from "@src/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center my-7 lg:my-24">
      <div className="flex items-center">
        <h1 className="head-text primary-gradient">{aboutConfig.name}</h1>
        <span className="ml-4 md:ml-5 w-3 h-3 md:w-6 md:h-6 animate-pulse rounded-full icon-glow"></span>
      </div>
      <p className="desc">{aboutConfig.bio}</p>
      <div className="flex space-x-4 align-middle flex-wrap my-5">
        <Button asChild variant="outline" className="lg:inline-block">
          <Link href="/#contact">Get in touch</Link>
        </Button>
        <SocialIcons />
      </div>
      <ExperienceSection />
    </section>
  );
};
