"use client";

import { navbarConfig } from "@/config/navbar";
import ThemeToggleDropDown from "@/components/ThemeToggleDropDown";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scoll";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import useMediaQuery from "@src/hooks/use-media-query";

export const MiniNavbar = () => {
  const scrolledEnough = useScroll(300);
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: scrolledEnough ? 1 : 0,
      }}
      className={cn(
        "flex justify-center sticky top-2 z-[1000] transition-transform transform-gpu duration-200"
      )}
    >
      <div className="bg-transparent navbar-clip">
        <div className="navbar-clip-border"></div>
        <div className="navbar-clip-content">
          <div className="navbar-clip-border"></div>
          <div className="flex justify-between gap-5 items-center px-5 py-1">
            {navbarConfig.miniNav.map((item, index) => (
              <Link href={item.href} key={index}>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent rounded-full border-none"
                >
                  <item.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                </Button>
              </Link>
            ))}
            <ThemeToggleDropDown />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
