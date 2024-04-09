import Featured2 from "./featured/featured-2";
import Featured1 from "./featured/featured-1";
import Featured3 from "./featured/featured-3";
import Featured4 from "./featured/featured-4";

export default function FeaturedSection() {
  return (
    <section id="featured" className="w-full">
      <h1 className="head-text mt-24 max-w-7xl mx-auto">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
          <span className="relative head-text text-white">Featured</span>{" "}
        </span>{" "}
        Projects
      </h1>
      <Featured4 />
      <Featured1 />
      <Featured2 />
      <Featured3 />
    </section>
  );
}
