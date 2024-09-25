"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const SearchInput = ({ isMinimized }: { isMinimized?: boolean }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (isMinimized) {
    return (
      <div>
        <Button
          variant="outline"
          onClick={() => {
            setOpen(true);
          }}
          className="size-[50px] p-3 h-10"
        >
          <Search className=" size-4 text-foreground/60" />
        </Button>
        <SearchDialog isOpen={open} onOpenChange={setOpen} />
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <Search className="size-3 text-foreground/60" />
        </div>
        <Input
          onFocus={(e) => {
            setOpen(true);
            e.target.blur();
          }}
          placeholder="Search"
          className="pl-7 bg-card h-10"
        />
        <div className="absolute h-full flex items-center justify-center top-1/2 -translate-y-1/2 right-2">
          <kbd className="pointer-events-none inline-flex h-[50%] select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-[10px]">⌘</span>K
          </kbd>
        </div>
      </div>
      <SearchDialog isOpen={open} onOpenChange={setOpen} />
    </div>
  );
};

export default SearchInput;

const SearchDialog = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) => {
  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
