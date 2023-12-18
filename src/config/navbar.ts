import { NavbarConfig } from "@src/types";
import { HomeIcon, PersonStanding, Text, Cable, Contact } from "lucide-react";

export const navbarConfig: NavbarConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "contact",
      href: "/#contact",
    },
  ],
  miniNav: [
    {
      href: "/",
      icon: HomeIcon,
    },
    {
      href: "/about",
      icon: PersonStanding,
    },
    {
      href: "/#projects",
      icon: Cable,
    },
    {
      href: "/blog",
      icon: Text,
    },
    {
      href: "/#contact",
      icon: Contact,
    },
  ],
};
