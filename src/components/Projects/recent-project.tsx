import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

export type ProjectProps = {
  index: number;
  title: string;
  desc: string;
  img: string;
  urls: Record<string, string>;
};

export const RecentProject = ({
  index,
  title,
  desc,
  img,
  urls,
}: ProjectProps) => {
  return (
    <div className="w-full mt-8 lg:mt-24 mx-auto">
      <h1 className="head-text-md primary-gradient mb-4">
        <span className="primary-gradient tshadow"># {index}.</span>
        <a href={urls.demo} target="_blank" className="inline-block ml-4">
          <span>{title}</span>
        </a>
        <p className="text-sm lg:text-lg max-w-4xl">{desc}</p>
      </h1>
      <div className="w-full aspect-video overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={1920}
          height={1080}
          className="rounded"
        />
      </div>

      <div className="w-full flex flex-wrap gap-2 mt-2">
        {Object.keys(urls).map((key) => {
          return (
            <Button key={key} size="sm" variant="outline" asChild>
              <a href={urls[key]} target="_blank">
                {key.toLocaleUpperCase()}
                <ExternalLinkIcon size={14} className="ml-1" />
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
