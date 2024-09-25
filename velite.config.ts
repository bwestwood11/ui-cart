import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeShiki from "@shikijs/rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const codeOptions = {
  theme: "dark-plus",
};

const headingOptions = {
  behavior: "append",
  content: {
    type: "element",
    tagName: "span",
    properties: {
      className: ["bravo"],
    },
    children: [
      {
        type: "element",
        tagName: "svg",
        properties: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: ["html-link-svg"],
        },
        children: [
          {
            type: "element",
            tagName: "path",
            properties: {
              d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            },
          },
          {
            type: "element",
            tagName: "path",
            properties: {
              d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            },
          },
        ],
      },
    ],
  },
};

export default defineConfig({
  collections: {
    documents: {
      name: "Documents",
      pattern: "docs/**/*.mdx",
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          published: s.boolean(),
          links: s.array(
            s.object({
              title: s.string(),
              url: s.string(),
            })
          ),
          featured: s.boolean().default(false),
          component: s.boolean().default(false),
          toc: s.toc(),
          slug: s.slug(),
          metadata: s.metadata(),
          content: s.mdx(), // transform markdown to html
        })
        .transform((data) => ({ ...data, permalink: `/docs/${data.slug}` })),
    },
  },
  mdx: {
    rehypePlugins: [
      [rehypeAutolinkHeadings, headingOptions],
      rehypeSlug,
      [rehypePrettyCode, codeOptions],
    ],
  },
});
