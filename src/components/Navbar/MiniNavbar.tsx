"use client";

import { navbarConfig } from "@/config/navbar";
import ThemeToggleDropDown from "@/components/ThemeToggleDropDown";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scoll";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SearchBar } from "./search-bar";
import useMediaQuery from "@src/hooks/use-media-query";

export const MiniNavbar = () => {
  const scrolledEnough = useScroll(300);
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section
      className={cn(
        "flex justify-center sticky top-2 z-[1000] transition-all transform-gpu duration-200",
        scrolledEnough
          ? "opacity-100 transalte-y-0 scale-100"
          : "opacity-0 -translate-y-24 scale-0"
      )}
    >
      <div className="border border-primary/10 bg-secondary/50 backdrop-blur-lg">
        <div className="flex justify-between gap-5 items-center px-1 py-1">
          {navbarConfig.miniNav.map((item, index) => (
            <TooltipProvider key={index} delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className="transition-all transform-gpu hover:scale-110 duration-75"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent border-none"
                    >
                      <item.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.href}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          {isMobile ? null : <SearchBar />}
          <ThemeToggleDropDown />
        </div>
      </div>
    </section>
  );
};
