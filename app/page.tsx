"use client";

import Particles from "@/components/ui/particles";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-fullscreen w-full z-[10] bg-background isolate relative overflow-hidden">
      <div>
        <Particles
          className="fixed inset-0 z-[-1] hidden dark:block opacity-20"
          quantity={100}
          color="#ffffff"
          ease={80}
          refresh
        />
    
        <div
          className="absolute top-0 right-[-50px] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative -z-10 right-[-10px] opacity-40 bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 h-[1100px] sm:w-[2000px] w-[800px] border-l-transparent border-b-gray-200"
            style={{
              clipPath: "polygon(99% 0%, 68% 2%, 58% 4%, 100% 46%)",
              top: 0,
              right: 0,
            }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute left-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(0 0, 70% 12%, 86% 62%, 50% 100%, 0 100%, 0% 25%)",
            }}
            className="relative  aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 opacity-15 sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full justify-center items-center px-4 md:px-0">
        <div className="bg-accent/50 rounded-full text-sm px-4 py-2 w-fit flex items-center gap-2">
          Custom Components & Blocks
          <ChevronRight className="size-4" />
        </div>
        <div className="text-center">
           <h1 className="text-5xl font-semibold tracking-tight">Library Built on top of <span className="text-transparent bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 bg-clip-text font-bold">Shadcn</span></h1>
           <p className="text-muted-foreground text-sm mt-2">Dive into custom-made reusable components & blocks.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link href="/docs/sidebar-01" className="bg-accent flex gap-1 items-center px-4 py-2 rounded-full text-sm hover:bg-accent/70">Browse Components <ArrowTopRightIcon /></Link>
          <Link href="https://github.com/bwestwood11/ui-cart" className="bg-foreground justify-center flex gap-2 items-center text-background px-4 py-2 rounded-full text-sm hover:bg-foreground/70"><GitHubLogoIcon />Visit Repo </Link>
        </div>
      </div>
    </div>
  );
}
