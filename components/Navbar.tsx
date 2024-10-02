"use client"

import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <Image src="/logo.svg" alt="logo" width={32} height={16} />
        <span className="text-lg font-bold">UI Cart</span>
      </Link>
      {/* <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs/sidebar-02"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/hint"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/docs/sidebar-01"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link>
        
      </nav> */}
    </div>
  )
}