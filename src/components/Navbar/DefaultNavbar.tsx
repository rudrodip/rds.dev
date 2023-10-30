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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@src/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationMenuTriggerStyle } from "@src/components/ui/navigation-menu";
import ThemeToggleDropDown from "@src/components/ThemeToggleDropDown";
import { projects } from "@src/config/projects";
import { Button } from "../ui/button";
import MobileNav from "./MobileNavbar";

const DynamicLottieAnimation = dynamic(
  () => import("@src/components/Header/LottieAnimation"),
  {
    loading: () => <p>...</p>,
  }
);

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-primary-foreground mb-1 z-50 py-[1px]">
      <div className="flex justify-between m-3 lg:mx-24">
        <div className="flex">
          <div className="lg:hidden mr-2 flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex-col">
                <SheetHeader>
                  <SheetTitle>explore !!!</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
          <Logo />
          <div className="hidden lg:block">
            <NavMenu />
          </div>
        </div>
        <ThemeToggleDropDown />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
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
          <NavigationMenuTrigger
            className={cn(navigationMenuTriggerStyle(), "nav-button")}
          >
            <Link href="/about">/about</Link>
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
                      rds/rudrodip
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      self-taught programmer with a passion for learning and
                      creating
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#journey" title="journey">
                my self taught programming journey starts in 2019
              </ListItem>
              <ListItem href="/#aboutme" title="who am I?">
                I&apos;m Rudrodip Sarker, currently a student and a self-taught
                programmer
              </ListItem>
              <ListItem href="/#contact" title="contact">
                feel free to contact me...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="nav-button">
            <Link href="/#projects">projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "nav-button")}
            >
              blog
            </NavigationMenuLink>
          </Link>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "nav-button")}
            >
              contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Logo = () => {
  return (
    <Button asChild variant="link" className="bg-transparent">
      <Link href="/">/rudrodip</Link>
    </Button>
  );
};
