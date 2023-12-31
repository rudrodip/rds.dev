"use client";

import Link from "next/link";
import SocialIcons from "@src/components/Socials/SocialIcons";
import TechStack from "@src/components/TechStack/TechStack";
import { Button } from "@src/components/ui/button";
import { motion } from "framer-motion";
import DiscordAppearance from "@src/components/Socials/DiscordApperance";
import LottieAnimation from "./LottieAnimation";

const motionProps = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", damping: 10, stiffness: 200, duration: 0.4 },
};

export default function Header() {
  return (
    <div className="flex w-full justify-around">
      <div className="flex flex-col justify-between">
        <div>
          <motion.div className="text-2xl flex">
            <motion.div>Hi there!</motion.div>
            <span role="img" aria-label="Wave" className="wave-emoji mx-2">
              🙋🏻‍♂️
            </span>
          </motion.div>
          <motion.h1 className="head_text">
            I&apos;m{" "}
            <span className="sweep-hover-animation">Rudrodip Sarker</span>
          </motion.h1>
          <motion.div>
            <DiscordAppearance />
          </motion.div>
          <motion.p className="max-w-2xl">
            I love creating{" "}
            <LinkText text='web' url='#Web' />
            {" "}and{" "}
            <LinkText text='mobile apps' url='#projects' />,{" "}
            <LinkText text='backend systems' url='#projects' />
            , python scripts for automation, and even getting into{" "}
            <LinkText text="embedded system programming" url="#projects" />{" "}
            with c++ and{" "}
            <LinkText text="robotics" url="https://youtu.be/uYZytPxzjsk" />
            ! Right now, I&apos;m learning about machine learning and AI,
            specifically neural networks. Checkout my{" "}
            <LinkText text="projects" url="#projects" />.
          </motion.p>
        </div>
        <div className="text-2xl">
          <motion.div
            className="flex space-x-4 align-middle flex-wrap my-5"
            {...motionProps}
          >
            <Button
              asChild
              variant="outline"
              className="hidden lg:inline-block"
            >
              <Link href="/#contact">Get in touch</Link>
            </Button>
            <SocialIcons />
          </motion.div>
          <motion.div {...motionProps} transition={{ delay: 0.2 }}>
            <TechStack />
          </motion.div>
        </div>
      </div>
      <div className="absolute -z-10 opacity-30 lg:relative lg:z-0 lg:opacity-100 lg:dark:opacity-100">
        <LottieAnimation />
      </div>
    </div>
  );
}

const LinkText = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      href={url}
      className="blue_gradient underline_animation"
    >
      {text}
    </Link>
  );
};
