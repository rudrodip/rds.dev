"use client";

import * as React from "react";
import { OptionIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { navbarConfig } from "@src/config/navbar";
import { socialIconsData } from "@src/config/socials";
import Link from "next/link";

export function SearchBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] md:w-[300px] justify-between h-[35px] bg-transparent border-muted-foreground/30"
          accessKey="k"
        >
          Quick search
          <div className="flex gap-1 text-muted-foreground items-center">
            <OptionIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            <label>K</label>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-full p-0 rounded-lg">
        <Command>
          <CommandInput placeholder="Quick search" />
          <CommandEmpty>Not found.</CommandEmpty>
          <ScrollArea className="w-full h-[400px]">
            <CommandGroup className="px-4">
              <h1 className="text-lg primary-gradient">Pages</h1>
              {navbarConfig.mainNav.map((item) => (
                <CommandItem key={item.href} value={item.href}>
                  <Link href={item.href} className="w-full">
                    {item.title}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            <Separator />
            <CommandGroup className="px-4">
              <h1 className="text-lg primary-gradient">Socials</h1>
              {socialIconsData.map((item) => (
                <CommandItem key={item.link} value={item.link}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex gap-2 items-center w-full"
                  >
                    {React.createElement(item.Icon, {
                      className: "mr-2 h-4 w-4",
                    })}
                    {item.accountName}
                  </a>
                </CommandItem>
              ))}
            </CommandGroup>
            <Separator />
            <CommandGroup className="px-4">
              <h1 className="text-lg primary-gradient">Featured projects</h1>
              <CommandItem value="nexusos">
                <Link href="#nexusos" className="w-full">
                  <p>NexusOS</p>
                  <p className="text-xs text-muted-foreground truncate">
                    NexusOS is a platform that empowers researchers, scientists,
                    and innovators to come together and collaborate on impactful
                    scientific projects. It let's you create, collaborate and
                    share your own projects, help you understand research papers
                    and repositories
                  </p>
                </Link>
              </CommandItem>
              <CommandItem value="hmanalyzer">
                <Link href="#hmanalyzer" className="w-full">
                  <p>Harmonic Oscillation Analyzer</p>
                  <p className="text-xs text-muted-foreground truncate">
                    The project detects and tracks an object in a video feed,
                    extracts its motion data, fits it to a damped oscillation
                    function, and calculates physical parameters such as
                    pendulum length and pivot point location.
                  </p>
                </Link>
              </CommandItem>
              <CommandItem value="durbar">
                <Link href="#durbar" className="w-full">
                  <p>Durbar Robot</p>
                  <p className="text-xs text-muted-foreground truncate">
                    It's built using Esp32 and Arduino Nano. The controller is
                    built using React Native. It has multiple sensors, like
                    sonar sensor, temperature and humidity sensor, and one of
                    the unique features is that it has a 5DOF robotic arm. The
                    robot can be controlled using a mobile app
                  </p>
                </Link>
              </CommandItem>
            </CommandGroup>
            <CommandGroup className="px-4">
              <h1 className="text-lg primary-gradient">Startup experience</h1>
              <CommandItem value="bi">
                <Link href="#bi" className="w-full">
                  <p>Bettre Institute</p>
                </Link>
              </CommandItem>
              <CommandItem value="lunco">
                <Link href="#lunco" className="w-full">
                  <p>LunCo</p>
                </Link>
              </CommandItem>
            </CommandGroup>
            <CommandGroup className="px-4">
              <h1 className="text-lg primary-gradient">GenAI</h1>
              <CommandItem value="nexbie">
                <Link href="#nexbie" className="w-full">
                  <p>NexusOS</p>
                </Link>
              </CommandItem>
              <CommandItem value="greenlander">
                <Link href="#greenlander" className="w-full">
                  <p>Greenlander</p>
                </Link>
              </CommandItem>
              <CommandItem value="thefirm">
                <Link href="#thefirm" className="w-full">
                  <p>The Firm</p>
                </Link>
              </CommandItem>
            </CommandGroup>
          </ScrollArea>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
