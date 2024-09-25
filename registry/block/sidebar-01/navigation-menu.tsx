"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronDownIcon,
  CircleDollarSign,
  HandCoins,
  HelpCircle,
  HomeIcon,
  Package,
  Settings,
  ShoppingCart,
  TicketSlash,
  User,
} from "lucide-react";
import { useState } from "react";

type MenuItem =
  | {
      name: string;
      url: string;
      icon: React.FC;
    }
  | {
      name: string;
      icon: React.FC;
      children: MenuItem[];
    };

const menuItems = [
  [
    {
      name: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      name: "Products",
      url: "/products",
      icon: ShoppingCart,
    },
    {
      name: "Payments",
      icon: HandCoins,
      children: [
        {
          name: "Payments",
          url: "/payment",
          icon: CircleDollarSign,
        },
        {
          name: "Refunds",
          url: "/refunds",
          icon: TicketSlash,
        },
      ],
    },
    {
      name: "Customers",
      url: "/customers",
      icon: User,
    },
  ],
  [
    {
      name: "Resources",
      url: "/resources",
      icon: Package,
    },
    {
      name: "Notifications",
      url: "/notifications",
      icon: Bell,
    },
  ],
  [
    {
      name: "Support",
      url: "/support",
      icon: HelpCircle,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
] satisfies MenuItem[][];

const NavigationMenu = ({ isMinimized }: { isMinimized?: boolean }) => {
  const currentPathname = usePathname();
  console.log(currentPathname);
  return (
    <nav>
      {menuItems.map((section, index) => (
        <div className="flex flex-col gap-4 mb-4">
          <ul className="space-y-1">
            {section.map((item) => (
              <NavigationLink
                isMinimized={isMinimized}
                key={item.url}
                item={item}
                currentPathname={currentPathname}
              />
            ))}
          </ul>
          {index + 1 < menuItems.length && (
            <Separator className="bg-transparent border-t border-dotted border-foreground/30" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;

const NavigationLink = ({
  item,
  isMinimized,
  currentPathname,
}: {
  item: (typeof menuItems)[number][number];
  isMinimized?: boolean;
  currentPathname: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <li key={item.url} className="w-full">
      {item.children ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            "flex w-full items-center group/nav-link gap-4 px-3 py-2.5 hover:bg-primary/80 rounded-md hover:text-primary-foreground"
          }
        >
          <item.icon className="text-foreground/70 group/nav-link-hover:text-primary-foreground size-6" />
          <span className={cn(isMinimized && "hidden")}>{item.name}</span>
          <div className={cn(isMinimized && "hidden", "ml-auto")}>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
      ) : (
        <a
          href={item.url}
          className={cn(
            "flex items-center group/nav-link gap-4 px-3 py-2.5 hover:bg-primary/80 rounded-md hover:text-primary-foreground",
            currentPathname === item.url && "bg-primary"
          )}
        >
          <item.icon className="text-foreground/70 group/nav-link-hover:text-primary-foreground size-6" />
          <span className={cn(isMinimized && "hidden")}>{item.name}</span>
        </a>
      )}

      {item.children && isOpen && (
        <ul
          className={cn(
            "ml-4 space-y-1 relative before:content-[''] before:absolute before:w-[3px] before:h-[calc(100%-20px)] before:border-l before:border-foreground/30",
            isMinimized && "before:hidden ml-0"
          )}
        >
          {item.children.map((child, index) => (
            <li
              key={index}
              className={cn(
                `relative before:content-[''] before:absolute before:w-[15px] before:h-[5px] before:top-[20px]
      before:border-l before:border-b before:border before:border-l-foreground/30
      before:border-b-foreground/30 before:rounded-bl-[50%] before:border-t-0 before:border-r-0`,
                isMinimized && "before:hidden"
              )}
            >
              <a
                className={cn(
                  "flex ml-4 group/nav-link items-center gap-4 px-3 h-10 hover:bg-primary rounded-md hover:text-primary-foreground",
                  isMinimized && "ml-0",
                  currentPathname === child.url &&
                    "bg-primary text-primary-foreground"
                )}
                href={child.url}
              >
                <child.icon className="text-foreground/70 size-5 group/nav-link-hover:text-primary-foreground" />
                <span className={cn(isMinimized && "hidden")}>
                  {child.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
