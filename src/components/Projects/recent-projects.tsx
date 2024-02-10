"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import useMediaQuery from "@/hooks/use-media-query";
import { RecentProject, type ProjectProps } from "./recent-project";

export default function RecentProjects() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <section id="recent" className="w-full lg:px-4 mt-12 md:mt-24 lg:mt-48">
      <h1 className="head-text mt-24 max-w-7xl mx-auto">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
          <span className="relative head-text text-white">More</span>{" "}
        </span>{" "}
        projects
      </h1>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        className="h-full mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.index}>
            <RecentProject {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const projects: ProjectProps[] = [
  {
    index: 1,
    title: "NexTemplate",
    desc: "Collection of custom templates and components made with Next.JS, shadcn/ui and TailwindCSS",
    img: "https://camo.githubusercontent.com/507c80b581115e9a3dca24077694e20f25e794e4c027071f13687821c8556a39/68747470733a2f2f6e657874656d706c6174652e76657263656c2e6170702f6e657874656d706c6174652e676966",
    urls: {
      demo: "https://nextemplate.vercel.app",
      github: "https://github.com/rudrodip/nextemplate",
    },
  },
  {
    index: 2,
    title: "Ginit",
    desc: "ginit is a command-line tool for initializing go projects with predefined structures and configurations",
    img: "https://raw.githubusercontent.com/rudrodip/ginit/main/github/example.gif",
    urls: {
      demo: "https://github.com/rudrodip/ginit",
      github: "https://github.com/rudrodip/ginit",
    },
  },
  {
    index: 3,
    title: "SDC Simulation",
    desc: "This project is an autonomous car simulation that uses Next13 framework to visualize the behavior of self-driving cars on a road.",
    img: "https://raw.githubusercontent.com/rudrodip/self-driving-car-simulation/main/public/screenshot.png",
    urls: {
      demo: "https://sdc-simulation.vercel.app/",
      github: "https://github.com/rudrodip/self-driving-car-simulation",
    },
  },
  {
    index: 4,
    title: "AquaRover-controller",
    desc: "AquaRover-controller is a custom application to control AquaRover robot via bluetooth",
    img: "/projects/aquarover-desktop.png",
    urls: {
      demo: "https://github.com/rudrodip/AquaRover-Controller/",
      github: "https://github.com/rudrodip/AquaRover-Controller",
    },
  },
];
