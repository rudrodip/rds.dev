import { aboutConfig } from "@src/config/about";
import { ExperienceSection } from "./Experience";
import SocialIcons from "@src/components/Socials/SocialIcons";
import { Button } from "@src/components/ui/button";
import Link from "next/link";
import DiscordApperance from "../Socials/DiscordApperance";

export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center my-7 lg:my-24">
      <div className="flex items-center">
        <h1 className="head-text primary-gradient">{aboutConfig.name}</h1>
        <DiscordApperance />
      </div>
      <p className="desc">{aboutConfig.bio}</p>
      <div className="flex gap-4 align-middle flex-wrap my-5">
        <Button asChild variant="outline" size="sm">
          <Link href="/#contact">Get in touch</Link>
        </Button>
        <SocialIcons />
      </div>
      <ExperienceSection />
    </section>
  );
};
