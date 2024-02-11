"use client";

import { VideoJs } from "@/components/video-component/videojs";
import { motion, useInView } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Comment from "@/components/Projects/comment";
import { useState, useEffect, useRef } from "react";

const motionConfig = {
  transition: { duration: 0.5 },
  initial: { y: "10%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

export default function Featured2() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1610px)");

  const techStack = [
    "Python",
    "OpenCV-headless",
    "PyQt5",
    "PyQtGraph",
    "Matplotlib",
    "Numpy",
    "SciPy",
  ];

  return (
    <section className="w-full mt-8 lg:mt-24 max-w-7xl mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># 2.</span>
        <a
          href="https://github.com/rudrodip/Harmonic-Oscillator-CV"
          target="_blank"
          className="inline-block ml-4"
        >
          <span id="hmanalyzer">H.M. Analyzer</span>
        </a>
        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl">
          This project is designed to analyze the harmonic oscillation of an
          object using computer vision techniques.
        </p>
      </h1>
      <motion.div className="w-full relative">
        <a
          href="https://www.youtube.com/watch?v=dalsCsHtreU&t=1220s"
          target="_blank"
        >
          <VideoJs
            options={{
              muted: true,
              sources: [
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/h.mp4?alt=media&token=7d401557-583d-4872-9b95-a79230288d4d",
                  type: "video/mp4",
                },
              ],
            }}
            fallbackImageUrl="/projects/featured2/thumbnail.png"
          />
        </a>
        <motion.div
          className={cn(
            "absolute flex flex-col gap-3",
            isTablet ? "top-40 -left-2" : "top-40 -left-40",
            isMobile && "hidden"
          )}
          {...motionConfig}
          transition={{ duration: 0.25 }}
        >
          <AutoIncrementor num={99.89} />
        </motion.div>
        <motion.div
          className={cn(
            "absolute flex flex-col gap-3",
            isTablet ? "-top-16 -right-2" : "-top-16 -right-40",
            isMobile && "hidden"
          )}
          {...motionConfig}
          transition={{ duration: 0.25 }}
        >
          <Comment
            comment="You really created an impressive project :-) Congratulations again!"
            commentor="Radu Mariescu-Istodor"
            commentorDesignation="Lecturer in Computer Science at Karelia University of Applied Sciences"
            commentorImage="https://media.licdn.com/dms/image/C4D03AQG3juhRDGu9rw/profile-displayphoto-shrink_800_800/0/1603035387043?e=1712793600&v=beta&t=c8tEryup6sJdJPDXS7ZwCWVQMUDEvTjK7Gx_FSMr_nM"
            commentorUrl="https://www.linkedin.com/in/radu-mariescu-istodor-4629301b8/"
          />
          <Comment
            comment="Congratulations on getting the highest score in the Radu competition! What a great job! Then, I'll take a look at the blog and source code of the project since I feel like I'll be able to learn a lot from it! Keep it up! The future is bright for you! ;)"
            commentor="Cristian Marcelo de Picciotto"
            commentorDesignation="Systems Analyst | Magento Certified Professional Developer"
            commentorImage="https://media.licdn.com/dms/image/C4D03AQFWLSAVWeT_Jw/profile-displayphoto-shrink_800_800/0/1621978498838?e=1712793600&v=beta&t=CpPA3mWSOvtDqnYhrbmQPo5yDlQoLqFd2ntQZJs-fQo"
            commentorUrl="https://www.linkedin.com/in/cristian-marcelo-de-picciotto/"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-wrap items-center justify-between mt-2">
        <div className="flex items-center flex-wrap gap-2">
          <span className="inline-block text-sm">Tech stack: </span>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block text-sm px-1 py-[0.5px] rounded-lg bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center">
          <Button size="sm" variant="link" asChild>
            <a
              href="https://github.com/rudrodip/Harmonic-Oscillator-CV"
              target="_blank"
            >
              Github
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a
              href="https://www.youtube.com/watch?v=dalsCsHtreU&t=1220s"
              target="_blank"
            >
              Submission
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="link" asChild>
            <a
              href="https://www.linkedin.com/posts/rudrodip_creative-coding-competition-results-activity-7127276230269161472-mjKp?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              Socials
              <ExternalLinkIcon size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-1 text-sm md:text-lg">
        The project detects and tracks an object in a video feed, extracts its
        motion data, fits it to a damped oscillation function, and calculates
        physical parameters such as pendulum length and pivot point location.
      </p>
    </section>
  );
}

const AutoIncrementor = ({ num }: { num: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [value, setValue] = useState(0);
  const iterations = 15;

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setValue(randomNumber(value, num));
      }, 100);

      setTimeout(() => {
        setValue(num);
        clearInterval(interval);
      }, iterations * 100);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <span
      ref={ref}
      className="head-text-md text-white before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-secondary relative"
    >
      <span className="relative head-text primary-gradient">
        {value.toFixed(2)}% Accuracy
      </span>{" "}
    </span>
  );
};

const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
