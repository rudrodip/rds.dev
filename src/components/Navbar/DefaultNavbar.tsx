"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@src/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@src/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@src/components/ui/navigation-menu";
import ThemeToggleDropDown from "@src/components/ThemeToggleDropDown";
import { projects } from "@src/config/projects";
import { Button } from "@src/components/ui/button";

import { BlogMenu } from "./blog-menu";
import { aboutConfig } from "@src/config/about";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const DynamicLottieAnimation = dynamic(
  () => import("@src/components/Header/LottieAnimation"),
  {
    loading: () => <p>...</p>,
  }
);

export default function Navbar() {
  return (
    <nav className="z-50">
      <div className="flex h-14 lg:h-15 items-center justify-between gap-2 lg:justify-evenly py-6">
        <div className="flex">
          <Logo />
          <div className="hidden lg:block">
            <NavMenu />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ConnectButton showBalance={false} />
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

const Logo = () => {
  return (
    <Button asChild variant="link">
      <Link href="/">/rudrodip</Link>
    </Button>
  );
};
