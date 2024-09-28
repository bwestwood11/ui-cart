"use client";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { Boxes, LucideIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

const Accounts = [
  {
    id: 1,
    name: "Brett",
    email: "brettw@gmail.com",
    image:
      "https://api.dicebear.com/9.x/avataaars/png?seed=Mason&backgroundColor=ffdfbf",
    icon: Boxes,
  },
  {
    id: 2,
    name: "Diwanshu Midha",
    email: "diwanshum@gmail.com",
    image:
      "https://api.dicebear.com/9.x/avataaars/png?seed=Amaya&backgroundColor=ffdfbf",
    icon: Boxes,
  },
  {
    id: 3,
    name: "John Doe",
    email: "johnd@gmail.com",
    image:
      "https://api.dicebear.com/9.x/avataaars/png?seed=Christian&backgroundColor=ffdfbf",
    icon: Boxes,
  },
];

export function AccountSwitcher({ isMinimized }: { isMinimized?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(Accounts[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "grid grid-cols-[50px_1fr_20px] bg-card gap-3 p-2 shadow-sm border-border border rounded-lg hover:bg-muted",
          isMinimized && "px-0 border-none"
        )}
      >
        <div className="relative w-[50px]">
          <Image
            src={selectedAccount.image}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-md size-[50px]"
          />
          <div className="absolute bottom-0 right-0 p-[2px] bg-black text-white size-4 ring-white ring-[1.5px] rounded-sm">
            <selectedAccount.icon className="size-3" />
          </div>
        </div>
        <div
          className={cn(
            "text-start min-w-[150px] flex flex-col h-full justify-center",
            isMinimized && "hidden"
          )}
        >
          <span className="block text-sm leading-[1.2]">
            {selectedAccount.name}
          </span>
          <span className="block leading-[1.2] text-foreground/70 text-xs ">
            {selectedAccount.email}
          </span>
        </div>
        <div className={cn("self-center", isMinimized && "hidden")}>
          <ChevronsUpDownIcon className="w-4 h-4" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        {Accounts.map((account) => (
          <UserInfo
            onSelect={() => {
              setSelectedAccount(account);
              setOpen(false);
            }}
            key={account.id}
            email={account.email}
            name={account.name}
            image={account.image}
            Icon={account.icon}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
}

const UserInfo = ({
  email,
  name,
  image,
  Icon,
  onSelect,
}: {
  email: string;
  name: string;
  image: string;
  Icon: LucideIcon;
  onSelect: () => void;
}) => {
  return (
    <button
      onClick={onSelect}
      className="flex w-full cursor-pointer gap-3 p-2 shadow-sm border-border border rounded-lg hover:bg-muted"
    >
      <div className="relative">
        <Image
          src={image}
          alt="profile image"
          width={40}
          height={40}
          className="rounded-md"
        />
        <div className="absolute bottom-0 right-0 p-[2px] bg-black text-white size-4 ring-white ring-[1.5px] rounded-sm">
          <Icon className="size-full" />
        </div>
      </div>
      <div className="text-start min-w-[150px] flex flex-1 flex-col h-full justify-center">
        <span className="block text-sm leading-[1.2]">{name}</span>
        <span className="block leading-[1.2] text-foreground/70 text-xs ">
          {email}
        </span>
      </div>
    </button>
  );
};
