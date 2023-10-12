import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@src/components/mdxComponent";
import MdxHeaderAnimation from "@src/components/mdx-header-animation";
import { getTableOfContents } from "@src/lib/toc";
import { DashboardTableOfContents } from "@src/components/toc";
import "@src/styles/mdx.css";
import { Metadata } from "next";

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
      <div className="hidden text-sm min-[1790px]:inline-flex">
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
