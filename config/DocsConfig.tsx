import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
  ],
  sidebarNav: [
    // {
    //   title: "Installation",
    //   items: [
    //     {
    //       title: "Next.js",
    //       href: "/docs/installation/next",
    //       items: [],
    //     },
    //     {
    //       title: "Vite",
    //       href: "/docs/installation/vite",
    //       items: [],
    //     },
    //     {
    //       title: "Remix",
    //       href: "/docs/installation/remix",
    //       items: [],
    //     },
    //     {
    //       title: "Astro",
    //       href: "/docs/installation/astro",
    //       items: [],
    //     },
    //     {
    //       title: "Laravel",
    //       href: "/docs/installation/laravel",
    //       items: [],
    //     },
    //     {
    //       title: "Gatsby",
    //       href: "/docs/installation/gatsby",
    //       items: [],
    //     },
    //     {
    //       title: "Manual",
    //       href: "/docs/installation/manual",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Components",
      items: [
        {
          title: "Sidebar-01",
          href: "/docs/sidebar",
          items: [],
        },
      ],
    },
  ],
};
