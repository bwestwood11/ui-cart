"use client";

import Particles from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Blocks,
  ChevronRight,
  Component,
  PlayIcon,
  Webhook,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100svh] w-full z-[10] bg-background isolate relative overflow-hidden">
      <div>
        <Particles
          className="fixed inset-0 z-[-1] hidden dark:block opacity-30"
          quantity={100}
          color="#ffffff"
          ease={80}
          refresh
        />
  <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 max-xl:hidden"
        fill="white"
      />
        <div className="absolute max-sm:hidden right-0 top-[5%] lg:w-[300px] sm:w-[200px] xl:w-[500px]">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 837.88 252.83"
            className=""
          >
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ffffff", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <path
              style={{ strokeMiterlimit: 10 }}
              className="fill-transparent"
              stroke="url(#gradient)"
              d="M837.87,252.33l-464.84-3.5C202.68,247.35,119.37,132.33.37.33"
            />
          </svg>
          <div></div>
          <div className="absolute bottom-9 sm:right-14 lg:right-[40%] rounded-full p-1.5 border border-white/10 bg-primary/50">
            <Component />
          </div>
          <p className="text-center pl-2 pt-8 text-sm text-white/90">
            • Components
          </p>
        </div>
        <div className="absolute max-sm:hidden left-0 top-[20%] lg:w-[300px] xl:w-[500px] sm:w-[200px]">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 837.88 252.83"
          >
            <defs>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffffff", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              style={{ strokeMiterlimit: 10 }}
              className="fill-transparent"
              stroke="url(#gradient2)"
              d="M0,252.33l464.84-3.5c170.35-1.48,253.66-116.5,372.66-248.5"
            />
          </svg>
          <div className="absolute bottom-9 sm:left-14 lg:left-[40%] rounded-full p-1.5 border border-white/10 bg-primary/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
          </div>
          <p className="text-center pl-2 pt-8 text-sm text-white/90">
            • Shadcn
          </p>
        </div>
        <div className="absolute left-0 max-sm:hidden bottom-[5%] lg:w-[300px] sm:w-[200px] xl:w-[500px]">
          <div className="absolute top-9 sm:left-14 lg:left-[40%] rounded-full p-1.5 border border-white/10 bg-primary/50">
            <Blocks />
          </div>
          <p className="text-center pl-2 pb-8 text-sm text-white/90">
            • Blocks
          </p>
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 837.88 252.83"
          >
            <defs>
              <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffffff", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              className="fill-transparent"
              stroke="url(#gradient3)"
              d="M0,.5l464.84,3.5c170.35,1.48,253.66,116.5,372.66,248.5"
            />
          </svg>
        </div>
        <div className="absolute max-sm:hidden right-0 bottom-[20%] lg:w-[300px] sm:w-[200px] xl:w-[500px]">
          <div className="absolute top-9 sm:right-14 lg:right-[40%] rounded-full p-1.5 border border-white/10 bg-primary/50">
            <Webhook />
          </div>
          <p className="text-center pl-2 pb-8 text-sm text-white/90">• Hooks</p>
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 837.88 252.83"
          >
            <defs>
              <linearGradient id="gradient4" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ffffff", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <path
              style={{ strokeMiterlimit: 10 }}
              className="fill-transparent"
              stroke="url(#gradient4)"
              d="M837.87.5l-464.84,3.5C202.68,5.48,119.37,120.5.37,252.5"
            />
          </svg>
        </div>
        <div
          className="absolute top-0 right-[-50px] -z-10 transform-gpu overflow-hidden blur-3xl "
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
        <Link
          href="https://youtu.be/IV6sChTZFLQ"
          className="absolute flex items-center gap-2 bottom-10 xl:left-20 left-1/2 max-xl:-translate-x-1/2"
        >
          <div className="bg-white py-2 px-3 rounded-full hover:animate-pulse hover:cursor-pointer">
            <PlayIcon className="size-4 text-black" />
          </div>
          <p className="bg-primary/60 text-white py-2 px-3 rounded-full text-sm">
            Watch Demo
          </p>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5 h-full justify-center items-center px-4 md:px-0">
        <div className="bg-accent/50 rounded-full text-sm px-4 py-2 w-fit flex items-center gap-2">
         <Component className="size-4"/> Custom Components & Blocks
          <ChevronRight className="size-4" />
        </div>

        <div className="text-center">
          {" "}
            <h1 className="text-5xl font-semibold tracking-tight">
              Library Built on top of{" "}
              <span className="text-transparent bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 bg-clip-text font-bold">
                Shadcn
              </span>
            </h1>{" "}
          <p className="text-muted-foreground text-sm mt-2">
            Dive into custom-made reusable components & blocks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            href="/docs/sidebar-01"
            className="bg-accent flex gap-1 items-center px-4 py-2 rounded-full text-sm hover:bg-accent/70"
          >
            Browse Components <ArrowTopRightIcon />
          </Link>
          <Link
            href="https://github.com/bwestwood11/ui-cart"
            className="bg-foreground justify-center flex gap-2 items-center text-background px-4 py-2 rounded-full text-sm hover:bg-foreground/70"
          >
            <GitHubLogoIcon />
            Visit Repo{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
