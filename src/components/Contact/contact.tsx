import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { Mdx } from "@/components/mdxComponent";
import MdxHeaderAnimation from "../mdx-header-animation";
import { Card } from "@/components/ui/card";
import "@/styles/mdx.css";

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
    <Card className="w-full max-w-3xl mx-auto">
      <article
        id="contact"
        className="relative max-w-3xl rounded-md p-3 lg:p-5"
      >
        <MdxHeaderAnimation title={page.title} description={page.description} />
        <div className="mx-auto w-full min-w-0">
          <Mdx code={page.body.code} />
        </div>
      </article>
    </Card>
  );
}
