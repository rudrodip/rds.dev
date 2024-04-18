"use client";

import { ParallaxText } from "@/components/Header/Parallax";
import { techStack } from "@/config/techstack";
import { TechLogo } from "@/components/Header/Hero";

export default function Wallpaper() {
  const length = techStack.length;
  const techStack1 = techStack.slice(0, length / 4);
  const techStack2 = techStack.slice(length / 4, length / 2);
  const techStack3 = techStack.slice(length / 2, (length / 4) * 3);
  const techStack4 = techStack.slice((length / 4) * 3, length);

  return (
    <section className="w-full min-h-screen flex-cc my-32">
      <div
        className="overflow-hidden w-auto h-[600px] flex gap-10 justify-end items-center  
          after:content['']
          after:to-transparent
          after:from-background
          after:bg-gradient-to-t
          after:right-0
          after:bottom-0
          after:w-[70%]
          after:h-20
          after:z-10
          after:absolute

          before:content['']
          before:to-transparent
          before:from-background
          before:bg-gradient-to-b
          before:top-0
          before:right-0
          before:w-[70%]
          before:h-20
          before:z-10
          before:absolute"
      >
        <div>
          <ParallaxText baseVelocity={-2}>
            <div className="flex flex-col gap-2">
              {techStack1.map((tech) => (
                <TechLogo key={tech.name} tech={tech} />
              ))}
            </div>
          </ParallaxText>
        </div>
        <div>
          <ParallaxText baseVelocity={2}>
            <div className="flex flex-col gap-2">
              {techStack2.map((tech) => (
                <TechLogo key={tech.name} tech={tech} />
              ))}
            </div>
          </ParallaxText>
        </div>
        <div>
          <ParallaxText baseVelocity={-2}>
            <div className="flex flex-col gap-2">
              {techStack3.map((tech) => (
                <TechLogo key={tech.name} tech={tech} />
              ))}
            </div>
          </ParallaxText>
        </div>
        <div>
          <ParallaxText baseVelocity={2}>
            <div className="flex flex-col gap-2">
              {techStack4.map((tech) => (
                <TechLogo key={tech.name} tech={tech} />
              ))}
            </div>
          </ParallaxText>
        </div>
      </div>
    </section>
  );
}
