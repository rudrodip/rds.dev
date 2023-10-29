"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sections } from "@src/config/sections";
import { cn } from "@src/lib/utils";
import { SectionViewLarge } from "./section-view-large";
import { SectionViewSmall } from "./section-view-small";

export default function Projects() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const handleSectioncChange = (index: number) => {
    setActiveSection(index);
    setActiveCategory(0);
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    sections[activeSection].categories[index].items.length > 0 &&
      setActiveItem(0);
  };

  return (
    <div className="flex border-2 rounded-lg m-1 md:m-3 p-2 lg:p-4 h-[90vh] flex-col w-full">
      <div className="container flex h-16 items-center justify-between translate-x-[110px]">
        <nav className="hidden gap-6 md:flex">
          {sections.map((section, index) => {
            return (
              <span
                key={index}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  sections.indexOf(section) === activeSection ? "bg-accent" : ""
                )}
                onClick={() => handleSectioncChange(index)}
              >
                <span>{section.caption}</span>
              </span>
            );
          })}
        </nav>
      </div>
      <div className="container grid flex-1 gap-2 md:grid-cols-[100px_1fr]">
        <aside className="hidden w-[100px] flex-col md:flex">
          {sections[activeSection].categories.map((category, index) => {
            return (
              <span
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
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <section className="grid grid-cols-6 gap-2 h-full">
            <div className="col-span-5">
              {sections[activeSection].categories[activeCategory].items.length >
                0 && (
                <SectionViewLarge
                  {...sections[activeSection].categories[activeCategory].items[
                    activeItem
                  ]}
                />
              )}
            </div>
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
          </section>
        </main>
      </div>
    </div>
  );
}
