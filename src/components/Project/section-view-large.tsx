import type { item } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SectionViewLarge = (props: item) => {
  return (
    <section className="w-full">
      <a
        href={
          (props.links.length > 0 && props.links[0].url) ||
          "https://github.com/rudrodip"
        }
        target="_blank"
        className="w-full"
      >
        <Image
          src={props.image.desktop}
          alt={props.title}
          width={1920}
          height={1080}
          className="rounded cursor-pointer"
        />
      </a>
      <div className="my-6 space-y-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h1 className="font-heading text-2xl underline_animation">
              {props.title}
            </h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {props.links.map((link, index) => {
              return (
                <a key={index} href={link?.url} target="_blank">
                  <DropdownMenuItem className="curson-pointer">
                    {link?.image && (
                      <Image
                        src={link.image}
                        alt={link.name}
                        width={32}
                        height={32}
                      />
                    )}
                    <p>{link.name}</p>
                  </DropdownMenuItem>
                </a>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{props.desc}</p>
        <div className="flex flex-wrap gap-3">
          {props.otherLinks.map((link, index) => {
            return (
              <Button key={index} className="mr-2 px-2" variant="outline">
                {link?.image && (
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                )}
                {link.name}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
