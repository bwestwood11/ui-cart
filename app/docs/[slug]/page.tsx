import { MDXContent } from "@/components/mdxComponents";
import { documents } from "#site/content";
import { notFound } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardTableOfContents } from "@/components/toc";

function getDocumentBySlug(slug: string) {
  return documents.find((document) => document.slug === slug);
}

export default function Home({ params }: { params: { slug: string } }) {
  const doc = getDocumentBySlug(params.slug);
  if (!doc) return notFound();
  return (
    <div className="flex gap-3">
      <div className="w-full py-6 lg:py-8 px-3">
        <MDXContent code={documents[0].content} />
      </div>
      <div className="hidden text-sm xl:block py-6 lg:py-8">
        <div className="sticky top-20 h-[calc(100vh-3.5rem)]">
          <ScrollArea className="h-full pb-10">
            {doc.toc && <DashboardTableOfContents toc={doc.toc} />}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
