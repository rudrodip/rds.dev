import { item, section } from "@/types";

const animeMovies: item[] = [];
const actionGenre: item[] = [];
const comedyGenre: item[] = [];
const horrorGenre: item[] = [];
const romanceGenre: item[] = [];
const thrillerGenre: item[] = [];
const dramaGenre: item[] = [];
const fantasyGenre: item[] = [];
const scifiGenre: item[] = [];

export const animes: section<item> = {
  caption: "Anime",
  categories: [
    {
      name: "Anime Movie",
      icon: "/categories/featured.png",
      items: animeMovies,
    },
    {
      name: "Action",
      icon: "/categories/featured.png",
      items: actionGenre,
    },
    {
      name: "Comedy",
      icon: "/categories/featured.png",
      items: comedyGenre,
    },
    {
      name: "Horror",
      icon: "/categories/featured.png",
      items: horrorGenre,
    },
    {
      name: "Romance",
      icon: "/categories/featured.png",
      items: romanceGenre,
    },
    {
      name: "Thriller",
      icon: "/categories/featured.png",
      items: thrillerGenre,
    },
    {
      name: "Drama",
      icon: "/categories/featured.png",
      items: dramaGenre,
    },
    {
      name: "Fantasy",
      icon: "/categories/featured.png",
      items: fantasyGenre,
    },
    {
      name: "Sci-Fi",
      icon: "/categories/featured.png",
      items: scifiGenre,
    },
  ],
};
