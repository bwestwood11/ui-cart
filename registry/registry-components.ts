import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "sidebar-01",
    type: "registry:block",
    registryDependencies: [
      "button",
      "popover",
      "separator",
      "input",
      "command",
    ],
    files: [
      "block/sidebar-01/sidebar-01.tsx",
      "block/sidebar-01/account-switcher.tsx",
      "block/sidebar-01/search.tsx",
      "block/sidebar-01/navigation-menu.tsx",
    ],
  },
  {
    name: "hint",
    type: "registry:ui",
    registryDependencies: ["tooltip"],
    dependencies: ["framer-motion"],
    files: ["ui/hint.tsx"],
  },
  {
    name: "animated-button",
    type: "registry:ui",
    registryDependencies: ["button"],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              ripple: "ripple 0.6s ease-out",
            },
            keyframes: {
              ripple: {
                "0%": {
                  transform: "scale(0)",
                  opacity: "1",
                },
                "100%": {
                  transform: "scale(4)",
                  opacity: "0",
                },
              },
            },
          },
        },
      },
    },
    files: ["ui/animated-button.tsx"],
  },
  {
    name: "sidebar-02",
    type: "registry:block",
    registryDependencies: [
      "progress",
      "https://www.uicart.io/registry/hint.json",
    ],
    dependencies: ["framer-motion", "lucide-react"],
    files: ["block/sidebar-02/sidebar-02.tsx"],
  },
  {
    name: "sonic-bento",
    type: "registry:block",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["block/bento-grid-components/sonic-bento.tsx"],
  },
  {
    name: "design-board",
    type: "registry:block",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["block/bento-grid-components/design-board.tsx"],
    tailwind: {
      config: {
        plugins: ["@tailwindcss/container-queries"],
      },
    },
  },
  {
    name: "bento-grid-01",
    type: "registry:block",
    registryDependencies: [
      "https://www.uicart.io/registry/sonic-bento.json",
      "https://www.uicart.io/registry/design-board.json",
    ],
    files: ["block/bento-grid-01/bento-grid.tsx"],
  },
];
