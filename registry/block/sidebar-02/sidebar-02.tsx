"use client";

import { cn } from "@/lib/utils";
import {
  Bell,
  ChevronLeft,
  HelpCircle,
  HomeIcon,
  Layers2,
  LucideIcon,
  Package,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Hint } from "@/components/ui/hint";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type MenuItem = {
  name: string;
  url: string;
  icon: React.FC;
  notifications?: number;
};

const menuItems = [
  {
    name: "Home",
    url: "/",
    icon: HomeIcon,
    notifications: 3,
  },
  {
    name: "Products",
    url: "/products",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    url: "/customers",
    icon: User,
  },
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
] satisfies MenuItem[];

const Sidebar02 = () => {
  const [open, setOpen] = useState(true);
  const currentPathname = usePathname();
  return (
    <motion.aside
      layout
      className="sticky top-0 h-screen text-background shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <div className="flex flex-col gap-y-4 h-full">
        <TitleSection open={open} />
        <NavigationMenu open={open} currentPathname={currentPathname} />
        <div className="mt-auto space-y-2">
          <UsageMeter open={open} progress={60} />
          <ToggleClose open={open} setOpen={setOpen} />
        </div>
      </div>
    </motion.aside>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="py-2">
      <div className="flex cursor-pointer items-center hover:bg-slate-100 rounded-md">
        <div className="flex items-center gap-2">
          <motion.div layout className="bg-primary rounded-md p-2 size-10">
            <Layers2 className="text-primary-foreground" />
          </motion.div>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              layout
            >
              <span className="block text-xs font-semibold">Acme Company</span>
              <span className="block text-xs text-background/70">Pro Plan</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const NavigationMenu = ({
  open,
  currentPathname,
}: {
  open: boolean;
  currentPathname: string;
}) => {
  return (
    <nav>
      <ul className="space-y-1">
        {menuItems &&
          menuItems.map((item) => {
            return (
              <NavigationLink
                key={item.name}
                title={item.name}
                Icon={item.icon}
                href={item.url}
                open={open}
                notifications={item.notifications}
                isActive={currentPathname === item.url}
              />
            );
          })}
      </ul>
    </nav>
  );
};

const NavigationLink = ({
  title,
  Icon,
  href,
  open,
  notifications,
  isActive,
}: {
  title: string;
  Icon: LucideIcon;
  href: string;
  open: boolean;
  isActive?: boolean;
  notifications?: number;
}) => {
  return (
    <Hint
      delay={100}
      enabled={!open}
      content={title}
      animationFrom="left"
      animationStiffness={150}
    >
      <li className="w-full">
        <Link
          href={href}
          className={cn(
            "flex items-center px-1 w-full py-2 gap-2 justify-center hover:bg-primary/30 hover:text-primary rounded-md",
            open && "justify-start",
            isActive && "bg-primary/20 text-primary transition-all"
          )}
        >
          <motion.div layout>
            <Icon className="size-5" />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-medium"
            >
              {title}
            </motion.span>
          )}
          {notifications && open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-medium text-primary bg-primary/30 px-1 h-full rounded-sm ml-auto mr-2"
            >
              {notifications}
            </motion.span>
          )}
        </Link>
      </li>
    </Hint>
  );
};

const UsageMeter = ({
  progress,
  open,
}: {
  progress: number;
  open: boolean;
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const maxScore = 100;
  const progressInPercentage = (progress / maxScore) * 100;
  const strokeWidth = 15;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progressInPercentage / 100) * circumference;
  if (isDismissed) return null;

  if (open) {
    return (
      <div className="bg-primary/30 p-2 rounded-md text-primary text-sm space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          layout
          className=""
        >
          <span className="block font-semibold">Used Space</span>
          <span>
            Your team has used 80% of your available space. Need more?
          </span>
        </motion.div>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Progress value={progress} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="flex gap-2 text-xs"
        >
          <button
            onClick={() => setIsDismissed(true)}
            className="hover:underline"
          >
            Dismiss
          </button>
          <Link className="hover:underline" href="/upgrade">
            Upgrade plan
          </Link>
        </motion.div>
      </div>
    );
  } else {
    return (
      <motion.div layout className="relative">
        <svg className="size-10 -rotate-90 transform" viewBox="0 0 160 160">
          <circle
            className="text-gray-200 transition-all duration-300 ease-in-out"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            className="text-primary transition-all duration-500 ease-in-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-primary">{progress}</span>
        </div>
      </motion.div>
    );
  }
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="flex w-full items-center p-2 hover:bg-primary/30 rounded-md"
      onClick={() => setOpen((prev) => !prev)}
    >
      {open && (
        <motion.span layout className="text-sm font-medium">
          Collapse
        </motion.span>
      )}
      <motion.div layout className="ml-auto">
        <ChevronLeft
          className={cn(
            !open && "rotate-180",
            "size-5 text-background/70 transition-all duration-300 ease-in-out"
          )}
        />
      </motion.div>
    </button>
  );
};

export default Sidebar02;
