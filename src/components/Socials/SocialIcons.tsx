"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@src/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Bot,
  LucideIcon,
} from "lucide-react";

type SocialIconProps = {
  Icon: LucideIcon;
  accountName: string;
  link: string;
  pfpLink?: string;
};

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const icons = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 10,
      stiffness: 200,
    },
  },
};

const SocialIcons = () => {
  return (
    <motion.div
      className="socials flex justify-start my-5"
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <SocialIcon
        Icon={Github}
        accountName="rudrodip"
        link="https://github.com/rudrodip"
        pfpLink="https://avatars.githubusercontent.com/u/77154365?v=4"
      />
      <SocialIcon
        Icon={Twitter}
        accountName="@rds_agi"
        link="https://twitter.com/rds_agi"
        pfpLink="https://pbs.twimg.com/profile_images/1694236905268019200/_8bnWrQ5_400x400.jpg"
      />
      <SocialIcon
        Icon={Linkedin}
        accountName="Rudrodip Sarker"
        link="https://www.linkedin.com/in/rudrodip-sarker-964392262"
      />
      <SocialIcon
        Icon={Bot}
        accountName="im_banana_man"
        link="https://discordapp.com/users/841126921886498817"
        pfpLink="https://cdn.discordapp.com/avatars/841126921886498817/01c63c7ec8f0c00b7ed14c9d3abafbfd?size=1024"
      />
      <SocialIcon
        Icon={Facebook}
        accountName="Rudrodip Sarker"
        link="https://facebook.com/enthusiast.math"
        pfpLink="https://cdn.discordapp.com/avatars/841126921886498817/01c63c7ec8f0c00b7ed14c9d3abafbfd?size=1024"
      />
      <SocialIcon
        Icon={Instagram}
        accountName="@martian_agi"
        link="https://www.instagram.com/martian_agi"
        pfpLink="https://cdn.discordapp.com/avatars/841126921886498817/01c63c7ec8f0c00b7ed14c9d3abafbfd?size=1024"
      />
    </motion.div>
  );
};

export default SocialIcons;

const SocialIcon: React.FC<SocialIconProps> = ({
  Icon,
  accountName,
  link,
  pfpLink,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className="w-8 h-8 rounded-full mr-3"
        >
          <a href={link} target="_blank">
            <Icon className="hover:scale-105 transition-all ease-in-out" />
          </a>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={pfpLink} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <a
              className="text-sm font-semibold underline"
              href={link}
              target="_blank"
            >
              {accountName}
            </a>
            <p className="text-sm break-all">{link}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Connect with me
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
