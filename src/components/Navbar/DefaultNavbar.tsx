"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ThemeToggleDropDown from "@/components/ThemeToggleDropDown";
import { projects } from "@/config/projects";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BlogMenu } from "./blog-menu";
import { aboutConfig } from "@/config/about";
import { SearchBar } from "./search-bar";

const DynamicLottieAnimation = dynamic(
  () => import("@/components/Header/LottieAnimation"),
  {
    loading: () => <p>...</p>,
  }
);

export default function Navbar() {
  return (
    <nav className="z-50">
      <div className="mx-auto max-w-7xl flex h-14 lg:h-15 items-center justify-between gap-2 lg:justify-start py-6">
        <div className="flex">
          <Logo />
          <div className="hidden lg:flex gap-6">
            <NavMenu />
          </div>
        </div>
        <SearchBar />
        <div className="flex gap-2 items-center">
          <ThemeToggleDropDown />
        </div>
      </div>
    </nav>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle())}>
            <Link href="/about">About</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <DynamicLottieAnimation />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {aboutConfig.name}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {aboutConfig.bio}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#journey" title="journey">
                my self taught programming journey starts in 2019
              </ListItem>
              <ListItem href="/#aboutme" title="who am I?">
                {aboutConfig.description}
              </ListItem>
              <ListItem href="/#contact" title="contact">
                feel free to contact me...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/#projects">Projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {projects.categories.map(
                (category, id) =>
                  category.name === "Featured" &&
                  projects.categories[id].items.map((project, id) => {
                    return (
                      <ListItem key={id} title={project.title} href="#projects">
                        {project.desc}
                      </ListItem>
                    );
                  })
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/blog">Blogs</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <BlogMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild variant="ghost" className="hover:bg-transaparent">
            <Link href="/#contact">Contact</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const svgVariants = {
  hidden: {
    rotate: -100,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Link href="/" className="mr-5 flex items-center justify-center">
      <motion.svg
        width="20"
        height="30"
        viewBox="0 0 425 502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          id="rds"
          d="M39 307.884H222.5C242 307.884 245 306.384 255.5 302.384C268.691 297.358 366.5 260.883 356.5 165.883C346.5 70.8834 275.5 41.8834 255 39.8834C238.6 38.2834 104.333 39.2168 39 39.8835M39 39.8835V462.884H349L39 39.8835Z"
          stroke="#04C3F9"
          stroke-width="77"
          stroke-linecap="round"
          stroke-linejoin="round"
          initial={{
            pathLength: 0,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 0,
          }}
          animate={{ pathLength: 1, strokeWidth: 50 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </Link>
  );
};
