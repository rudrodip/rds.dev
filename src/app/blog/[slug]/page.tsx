/*
  Blog Page
  Created by: Rudrodip Sarker
  Date: August 25, 2023
  Inspired by: https://github.com/shadcn-ui/taxonomy
  GitHub: https://github.com/rudrodip
*/

import { notFound } from "next/navigation";
import { Post, allAuthors, allPosts } from "contentlayer/generated";

import { env } from "@env.mjs";
import { Mdx } from "@src/components/mdxComponent";
import BlogHeaderAnimation from "@src/components/blog-header-animation";
import { getTableOfContents } from "@src/lib/toc";
import { DashboardTableOfContents } from "@src/components/toc";
import "@src/styles/mdx.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn, absoluteUrl } from "@src/lib/utils";
import { buttonVariants } from "@src/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

type PostPageProps = {
  params: {
    slug: string;
  };
};

async function getPostFromParams(params: { slug: string }) {
  const slug = params.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}


export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );

  const toc = await getTableOfContents(post.body.raw);

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <BlogHeaderAnimation
        title={post.title}
        description={post.description}
        date={post.date}
        authors={authors}
      />
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <div className="hidden text-sm min-[1790px]:inline-flex">
        <div className="fixed top-28 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
      <div className="mx-auto w-full min-w-0">
        <Mdx code={post.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
