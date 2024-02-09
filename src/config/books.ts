import { item, section } from "@/types";

const physicsBooks: item[] = [];
const mathBooks: item[] = [];
const csBooks: item[] = [];

export const books: section<item> = {
  caption: "Books",
  categories: [
    {
      name: "Physics",
      icon: "/categories/featured.png",
      items: physicsBooks,
    },
    {
      name: "Math",
      icon: "/categories/featured.png",
      items: mathBooks,
    },
    {
      name: "Computer Science",
      icon: "/categories/featured.png",
      items: csBooks,
    },
  ],
};
