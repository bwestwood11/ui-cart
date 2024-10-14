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
    {
      title: "Blocks",
      items: [
        {
          title: "Sidebar-01",
          href: "/docs/sidebar-01",
          items: [],
        },
        {
          title: "Sidebar-02",
          href: "/docs/sidebar-02",
          items: [],
        },
      ],
    },
    {
      title: "Bento Grid",
      items: [
        {
          title: "Music Bento Grid",
          href: "/docs/bento-grid-01",
          items: [],
        },
      ]
    },
    {
      title: "Bento Grid Cards",
      items: [
        {
          title: "Sonic Bento Card",
          href: "/docs/sonic-bento-card",
          items: [],
        },
        {
          title: "Animated Design Board",
          href: "/docs/animated-design-board-bento-card",
          items: [],
        },
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Hint",
          href: "/docs/hint",
          items: [],
        },
        {
          title: "Animated Button",
          href: "/docs/animated-button",
          items: [],
        },
      ],
    },
  ],
};
