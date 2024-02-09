"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Author } from "@.contentlayer/generated";

type Props = {
  title: string;
  description?: string;
  date: string;
  authors: (Author | undefined)[];
};

const motionProps = {
  initial: { x: -20, opacity: 0 },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 200,
    duration: 0.3,
    ease: [0.17, 0.67, 0.83, 0.67],
  },
};

export default function BlogHeaderAnimation(props: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <div>
      {props.date && (
        <motion.time
          dateTime={props.date}
          className="block text-sm text-muted-foreground"
          {...motionProps}
          animate={isInView ? { x: 0, opacity: 100 } : { x: -20 }}
          transition={{ delay: 0.1 }}
          ref={ref}
        >
          Published on {formatDate(props.date)}
        </motion.time>
      )}
      <motion.h1
        className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl"
        {...motionProps}
        animate={isInView ? { x: 0, opacity: 100 } : { x: -20 }}
      >
        {props.title}
      </motion.h1>
      {props.authors?.length ? (
        <motion.div
          className="mt-4 flex space-x-4"
          {...motionProps}
          animate={isInView ? { x: 0, opacity: 100 } : { x: -20 }}
          transition={{ delay: 0.2 }}
        >
          {props.authors.map((author) =>
            author ? (
              <Link
                key={author._id}
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-2 text-sm"
              >
                <Image
                  src={author.avatar}
                  alt={author.title}
                  width={42}
                  height={42}
                  className="rounded-full bg-white"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium">{author.title}</p>
                  <p className="text-[12px] text-muted-foreground">
                    @{author.twitter}
                  </p>
                </div>
              </Link>
            ) : null
          )}
        </motion.div>
      ) : null}
    </div>
  );
}
