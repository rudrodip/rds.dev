import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdxComponent";
import MdxHeaderAnimation from "@/components/mdx-header-animation";
import { getTableOfContents } from "@/lib/toc";
import { DashboardTableOfContents } from "@/components/toc";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

type AboutPageProps = {
  params: {
    slug: string;
  };
};

async function getpageFromParams(params: { slug: string }) {
  const slug = params.slug;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }
  return page;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const page = await getpageFromParams({ slug: "about" });

  if (!page) {
    return {};
  }

  const url = siteConfig.url;

  const ogUrl = new URL(`${url}/assets/bg/aboutme.png`);
  ogUrl.searchParams.set("heading", page.title);
  ogUrl.searchParams.set("type", "website");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${page.title} | ${siteConfig.name} | ${siteConfig.description}`,
    description: page.description,
    authors: [
      {
        name: siteConfig.name,
      },
    ],
    openGraph: {
      title: `${page.title} | ${siteConfig.name} | ${siteConfig.description}`,
      description: page.description,
      type: "website",
      url: `${url}/about`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function AboutPage() {
  const page = await getpageFromParams({ slug: "about" });

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
        <MdxHeaderAnimation title={page.title} description={page.description} />
        <Mdx code={page.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
    </article>
  );
}
