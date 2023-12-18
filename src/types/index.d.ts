import type { Icon } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    fb: string;
    insta: string;
    discord: string;
    youtube: string;
  };
};

type section<T> = {
  caption: string;
  categories: category<T>[];
};

type category<T> = {
  name: string;
  icon: string;
  items: T[];
};

type image = {
  mobile: string;
  desktop: string;
};

type defaultProfile = {
  name: string;
  url?: string;
  image?: string;
};

type item = {
  title: string;
  desc: string;
  image: image;
  links: defaultProfile[];
  otherLinks: defaultProfile[];
  state?: boolean;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  menu?: () => JSX.Element;
};

export type miniNavItem = {
  href: string;
  icon: Icon;
};

export type NavbarConfig = {
  mainNav: NavItem[];
  miniNav: miniNavItem[];
};

export type AboutConfig = {
  name: string;
  bio: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  links: {
    twitter: string;
    github: string;
    fb: string;
    insta: string;
    discord: string;
    youtube: string;
  };
};

export type Experience = {
  title: string;
  employmentType: string;
  company: defaultProfile;
  location: defaultProfile;
  start: string;
  end: string;
  description: string[];
};

export type SocialIconProps = {
  Icon: LucideIcon;
  accountName: string;
  link: string;
  pfpLink?: string;
};
