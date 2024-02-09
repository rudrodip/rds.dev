/*
  Quote Component
  Created by: Rudrodip Sarker
  Date: August 24, 2023
  Inspired by: https://github.com/enjidev/enji.dev
  GitHub: https://github.com/rudrodip
*/

"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const CodeQuote = () => {
  return (
    <blockquote
      className={cn(
        "flex gap-2 pt-2 text-3xl",
        "md:text-4xl lg:pt-0 lg:text-5xl"
      )}
    >
      <QuoteIcon className={cn("-mt-1 h-10", "md:-mt-3 md:h-16 lg:h-24")} />
      <span className={cn("flex flex-col")}>
        <span className={cn("leading-[1.15] primary-gradient")}>
          <em>talk is</em>{" "}
        </span>
        <span
          className={cn("flex items-center gap-2 leading-[1.15]", "lg:gap-4")}
        >
          <span
            className={cn(
              "mt-1 h-0.5 w-8 rounded-full bg-slate-400",
              "lg:h-1 lg:w-24",
              "dark:bg-slate-600"
            )}
          />
          <span>
            <strong className={cn("font-extrabold primary-gradient")}>
              cheap
            </strong>
            {", "}
            show{" "}
            <strong className={cn("font-semibold primary-gradient")}>
              me{" "}
            </strong>
          </span>
          <span
            className={cn(
              "mt-1 h-0.5 w-8 rounded-full bg-slate-400",
              "lg:h-1 lg:w-24",
              "dark:bg-slate-600"
            )}
          />
        </span>
        <span className={cn("leading-[1.15] primary-gradient")}>
          the{" "}
          <strong className={cn("relative font-extrabold primary-gradient")}>
            <span
              className={cn(
                "absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md px-1",
                "lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0"
              )}
            />
            code.
          </strong>
        </span>
        <span className="text-right font-heading text-lg primary-gradient">
          - Linus Torvald
        </span>
      </span>
    </blockquote>
  );
};

export default CodeQuote;

function QuoteIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      role="img"
      fill="currentColor"
      {...props}
    >
      <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z" />
    </svg>
  );
}
