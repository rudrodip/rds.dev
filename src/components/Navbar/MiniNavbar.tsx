"use client";

import { navbarConfig } from "@src/config/navbar";
import ThemeToggleDropDown from "@src/components/ThemeToggleDropDown";
import Link from "next/link";
import { cn } from "@src/lib/utils";
import { useScroll } from "@src/hooks/use-scoll";
import { Button } from "../ui/button";

export const MiniNavbar = () => {
  const scrolledEnough = useScroll(300);

  return (
    <section
      className={cn(
        "flex justify-center sticky top-5 z-[1000] transition-all transform-gpu duration-200",
        scrolledEnough
          ? "opacity-100 transalte-y-0 scale-100"
          : "opacity-0 -translate-y-24 scale-0"
      )}
    >
      <div className="border border-primary/10 rounded-full bg-secondary/50 backdrop-blur-lg">
        <div className="flex justify-between gap-5 items-center px-1 py-1">
          {navbarConfig.miniNav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="transition-all transform-gpu hover:scale-110 duration-75"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent border-none"
              >
                <item.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              </Button>
            </Link>
          ))}
          <ThemeToggleDropDown />
        </div>
      </div>
    </section>
  );
};
