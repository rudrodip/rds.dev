import { NavbarConfig } from "@/types";
import {
  HomeIcon,
  UserCircle2Icon,
  LayoutPanelTopIcon,
  FileTextIcon,
  Contact,
} from "lucide-react";

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
      title: "Contact",
      href: "/#footer",
    },
  ],
  miniNav: [
    {
      href: "/",
      icon: HomeIcon,
    },
    {
      href: "/about",
      icon: UserCircle2Icon,
    },
    {
      href: "/#projects",
      icon: LayoutPanelTopIcon,
    },
    {
      href: "/blog",
      icon: FileTextIcon,
    },
    {
      href: "/#contact",
      icon: Contact,
    },
  ],
};
