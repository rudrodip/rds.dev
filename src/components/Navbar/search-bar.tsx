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
import { featuredProjects } from "@src/config/projects";
import { socialIconsData } from "@src/config/socials";
import Link from "next/link";

export function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] md:w-[300px] justify-between h-[35px]"
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
                <CommandItem
                  key={item.href}
                  value={item.href}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
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
                <CommandItem
                  key={item.link}
                  value={item.link}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
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
              <h1 className="text-lg primary-gradient">Projects</h1>
              {featuredProjects.map((item) => (
                <CommandItem
                  key={item.title}
                  value={item.title}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <a
                    href={item.links[0]?.url || "https://github.com/rudrodip"}
                    target="_blank"
                    className="w-full"
                  >
                    <p>{item.title}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.desc}
                    </p>
                  </a>
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
