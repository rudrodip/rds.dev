"use client";

import Link from "next/link";
import SocialIcons from "@src/components/Socials/SocialIcons";
import TechStack from "@src/components/TechStack/TechStack";
import { Button } from "@src/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import DiscordAppearance from "@src/components/Socials/DiscordApperance";

type Props = {};

const motionProps = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", damping: 10, stiffness: 200, duration: 0.4 },
};

export default function Header({}: Props) {
  return (
    <div className="flex w-full justify-around my-10 lg:my-32">
      <div className="flex flex-col justify-between">
        <div>
          <motion.div className="text-2xl flex">
            <motion.div>Hi there!</motion.div>
            <span role="img" aria-label="Wave" className="wave-emoji mx-2">
              🙋🏻‍♂️
            </span>
          </motion.div>
          <motion.h1
            className="head_text"
          >
            I&apos;m{" "}
            <span className="sweep-hover-animation">Rudrodip Sarker</span>
          </motion.h1>
          <motion.div>
            <DiscordAppearance />
          </motion.div>
          <motion.p
            className="desc"
          >
            I love creating web and mobile apps,{" "}
            <a
              href="https://github.com/rudrodip/student-management-api"
              target="_blank"
              className="gray_gradient underline_animation"
            >
              backend systems
            </a>
            , python scripts for automation, and even getting into{" "}
            <a
              href="https://github.com/rudrodip/AquaRover"
              target="_blank"
              className="gray_gradient underline_animation"
            >
              embedded system programming
            </a>{" "}
            with c++ and{" "}
            <a
              href="https://youtu.be/uYZytPxzjsk"
              target="_blank"
              className="gray_gradient underline_animation"
            >
              robotics
            </a>
            ! Right now, I&apos;m learning about machine learning and AI,
            specifically neural networks. Checkout my{" "}
            <Link
              href="/projects"
              className="gray_gradient underline_animation"
            >
              projects.
            </Link>
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
      <div className="svg absolute -z-10 opacity-30 lg:relative lg:z-0 lg:opacity-100 lg:dark:opacity-100">
        <Image
          src="/assets/images/pfp-outline.svg"
          alt=""
          width={500}
          height={500}
          className="absolute overlay-img"
        />
        <Image
          src="/assets/images/pfp-bg.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
