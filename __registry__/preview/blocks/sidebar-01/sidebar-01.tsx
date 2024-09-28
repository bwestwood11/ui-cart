import { AccountSwitcher } from "./account-switcher";
import React, { useState } from "react";
import SearchInput from "./search";
import NavigationMenu from "./navigation-menu";
import { cn } from "@/lib/utils";

const Sidebar1 = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <aside
      onMouseEnter={() => setIsMinimized(false)}
      onMouseLeave={() => setIsMinimized(true)}
      className={cn(
        "flex flex-col w-fit gap-4 border p-3 rounded-lg bg-stone-100 dark:bg-stone-900 h-svh transition-all duration-300 sticky top-0 z-10",
        isMinimized ? "w-[75px]" : "w-[300px]"
      )}
    >
      <AccountSwitcher isMinimized={isMinimized} />
      <SearchInput isMinimized={isMinimized} />
      <NavigationMenu isMinimized={isMinimized} />
    </aside>
  );
};

export default Sidebar1;
