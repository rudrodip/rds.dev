'use client'

import { featuredProjects } from "@src/config/projects";
import Image from "next/image";
import { Button } from "@src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules'

export default function MobileProjectView() {
  return (
    <section className="flex-col md:hidden my-10">
      <h1 className="font-heading text-2xl text-center mb-3">Projects</h1>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        speed={1000}
        loop={true}
        modules={[Autoplay]}
        className="project-swiper h-full"
      >
        {featuredProjects.map((project, id) => {
          return (
            <SwiperSlide key={id}>
              <div className="rounded">
                <Image
                  src={project.image.desktop}
                  alt={project.title}
                  width={600}
                  height={900}
                />
                <div className="my-6 space-y-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <h1 className="font-heading text-2xl underline_animation">
                        {project.title}
                      </h1>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {project.links.map((link, index) => {
                        return (
                          <a key={index} href={link?.url} target="_blank">
                            <DropdownMenuItem className="curson-pointer">
                              {link?.image && (
                                <Image
                                  src={link.image}
                                  alt={link.name}
                                  width={32}
                                  height={32}
                                />
                              )}
                              <p>{link.name}</p>
                            </DropdownMenuItem>
                          </a>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <p>{project.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.otherLinks.map((link, index) => {
                      return (
                        <Button
                          key={index}
                          className="mr-2 px-2"
                          variant="outline"
                        >
                          {link?.image && (
                            <Image
                              src={link.image}
                              alt={link.name}
                              width={32}
                              height={32}
                              className="mr-2"
                            />
                          )}
                          {link.name}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
