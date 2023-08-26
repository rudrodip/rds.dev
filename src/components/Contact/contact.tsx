import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { Mdx } from "@src/components/mdxComponent";
import MdxHeaderAnimation from "../mdx-header-animation";
import "@src/styles/mdx.css";

async function getpageFromParams(params: { slug: string }) {
  const slug = params.slug;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }
  return page;
}

export default async function ContactPage() {
  const page = await getpageFromParams({ slug: "contact" });

  if (!page) {
    notFound();
  }

  return (
    <article
      id="contact"
      className="container relative max-w-3xl py-6 lg:py-10 rounded-md border-2 border-secondary my-2 lg:my-10"
    >
      <MdxHeaderAnimation 
        title={page.title}
        description={page.description}
      />
      <div className="mx-auto w-full min-w-0">
        <Mdx code={page.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
    </article>
  );
}
