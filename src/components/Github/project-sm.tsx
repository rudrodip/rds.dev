import type { Repository } from "@src/types/github";
import { Star } from "lucide-react";

export default function ProjectSm({
  url,
  name,
  description,
  primaryLanguage,
  stargazerCount,
  forkCount,
}: Repository) {
  return (
    <div className="group w-full max-w-lg mx-auto p-2 bg-secondary/20 border hover:bg-accent/50 transform-gpu transition-colors duration-200">
      <a className="text-lg font-bold underline" href={url} target="_blank">
        {name}
      </a>
      <p className="text-sm truncate">{description}</p>
      <div className="flex gap-2 mt-2 items-center">
        <p className="text-sm bg-accent/50 group-hover:bg-secondary/50 p-1">
          {primaryLanguage.name}
        </p>
        {forkCount > 0 && (
          <p className="text-sm bg-accent/50 group-hover:bg-secondary/50 p-1">
            Forks: {forkCount}
          </p>
        )}
        {stargazerCount > 0 && (
          <div className="group/star text-sm p-1 flex items-center gap-1 cursor-pointer">
            <Star size={14} />
            {stargazerCount}
          </div>
        )}
      </div>
    </div>
  );
}
