"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { BlogMenu } from "./blog-menu";
import { aboutConfig } from "@/config/about";

const DynamicLottieAnimation = dynamic(
  () => import("@/components/Header/LottieAnimation"),
  {
    loading: () => <p>...</p>,
  }
);

export default function Navbar() {
  return (
    <div className="flex h-14 lg:h-15 w-full max-w-7xl items-center justify-start gap-2 py-6">
      <Logo />
      <NavMenu />
    </div>
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

export const Logo = () => {
  return (
    <Link href="/" className="w-8 h-8 mr-4 flex items-center justify-center">
      <Image src="/icon.png" alt="Rudrodip Sarker" width={30} height={30} />
    </Link>
  );
};
