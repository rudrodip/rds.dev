"use client";
import React from "react";
import { projects } from "@src/config/projects";
import Image from "next/image";
import { Button } from "../ui/button";
import { Info } from "lucide-react"

export default function ProjectSection() {
  return (
    <div className="hidden md:flex flex-cc w-full max-w-7xl mx-auto h-[97vh]">
      <div id="nintendo_container" className="flex-cc w-full h-4/5 rounded-[7rem]">
        <div className="h-full w-[15%] border br-console rounded-tl-[7rem] rounded-bl-[7rem] bg-[#E3DDC5]"></div>
        <div className="h-full w-[70%] border br-console flex-cc p-2 pb-4 bg-[#5F6A79]">
          <div className="w-full h-full border br-console rounded-[3px] bg-secondary flex flex-col p-2">
            <Image 
              src={projects[0].media.images[0]}
              alt={projects[0].name}
              width={600}
              height={300}
              className="w-auto h-[85%]"
            />
            <div className="w-full h-full flex justify-between">
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold">{projects[0].name}</h1>
                <h2 className="text-xl font-semibold">{projects[0].slogan}</h2>
                <p className="truncate">{projects[0].description}</p>
              </div>
              <div className="flex-cc h-full w-full">
                <Button className="flex gap-1 items-center btn-press bg-accent">
                  <p>Details</p>
                  <Info size={17} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[15%] border br-console rounded-tr-[7rem] rounded-br-[7rem] bg-[#E3DDC5]"></div>
      </div>
    </div>
  );
}
