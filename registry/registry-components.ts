import { Registry } from "./schema";

export const ui: Registry = [
    {
        name: "sidebar-01",
        type: "registry:block",
        registryDependencies: ["button", "popover", "separator", "input", "command"],
        files: [
            "block/sidebar-01/sidebar-01.tsx",
            "block/sidebar-01/account-switcher.tsx",
            "block/sidebar-01/search.tsx",
            "block/sidebar-01/navigation-menu.tsx",
        ],
    }
]