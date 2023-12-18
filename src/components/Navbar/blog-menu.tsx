import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { ListItem } from "./DefaultNavbar";

export const BlogMenu = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
      {posts.map((post, id) => {
        return (
          <ListItem key={id} title={post.title} href="#projects">
            {post.description}
          </ListItem>
        );
      })}
    </ul>
  );
};
