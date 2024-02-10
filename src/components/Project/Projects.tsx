"use client";

import { useState } from "react";
import { sections } from "@/config/sections";
import { cn } from "@/lib/utils";
import { SectionViewLarge } from "./section-view-large";
import { SectionViewSmall } from "./section-view-small";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Projects() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    sections[activeSection].categories[index].items.length > 0 &&
      setActiveItem(0);
  };

  return (
    <div className="hidden md:flex flex-col w-full max-w-7xl mx-auto mt-12 md:mt-24 lg:mt-32">
      <h1 className="head-text-md primary-gradient text-center mb-4">
        More...
      </h1>
      <div className="grid gap-2 md:grid-cols-[100px_1fr]  border rounded-lg pt-5 px-1">
        <div className="flex justify-between">
          <aside className="w-[100px] flex-col flex pr-1 border-r">
            {sections[activeSection].categories.map((category, index) => {
              return (
                <span
                  id={category.name}
                  key={index}
                  className={cn(
                    "group flex items-center rounded-md my-1 px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                    sections[activeSection].categories.indexOf(category) ===
                      activeCategory
                      ? "bg-accent"
                      : ""
                  )}
                  onClick={() => handleCategoryChange(index)}
                >
                  <span>{category.name}</span>
                </span>
              );
            })}
          </aside>
        </div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <section className="grid grid-cols-1 lg:grid-cols-6 gap-2 h-full">
            <div className="lg:col-span-5">
              {sections[activeSection].categories[activeCategory].items.length >
                0 && (
                <SectionViewLarge
                  {...sections[activeSection].categories[activeCategory].items[
                    activeItem
                  ]}
                />
              )}
            </div>
            <ScrollArea className="h-[700px]">
              <div className="space-y-2">
                {sections[activeSection].categories[activeCategory].items.map(
                  (item, index) => {
                    return (
                      index !== activeItem && (
                        <SectionViewSmall
                          key={index}
                          id={index}
                          item={item}
                          handleActiveItemChange={setActiveItem}
                        />
                      )
                    );
                  }
                )}
              </div>
            </ScrollArea>
          </section>
        </main>
      </div>
    </div>
  );
}
