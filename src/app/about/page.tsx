import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@src/components/mdxComponent";
import MdxHeaderAnimation from "@src/components/mdx-header-animation";
import { getTableOfContents } from "@lib/toc";
import { DashboardTableOfContents } from "@src/components/toc";
import "@src/styles/mdx.css";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@lib/utils";
import { buttonVariants } from "@src/components/ui/button";
import { Contact } from "lucide-react";

async function getpageFromParams(params: { slug: string }) {
  const slug = params.slug;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }
  return page;
}

export default async function AboutPage() {
  const page = await getpageFromParams({ slug: 'about' });

  if (!page) {
    notFound();
  }

  const toc = await getTableOfContents(page.body.raw);

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Contact className="mr-2 h-4 w-4" />
        Contact
      </Link>
      <div className="hidden text-sm min-[1690px]:inline-flex">
        <div className="fixed top-28 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
      <div className="mx-auto w-full min-w-0">
        <MdxHeaderAnimation 
          title={page.title}
          description={page.description}
        />
        <Mdx code={page.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
    </article>
  );
}
