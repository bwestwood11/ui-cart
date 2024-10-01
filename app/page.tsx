"use client"

import Particles from "@/components/ui/particles";

import { AnimatedButton } from "@/registry/ui/animated-button";


export default function Home() {

  return (
    <div className="h-[200vh] w-full z-[10] bg-background isolate relative">
      <Particles className="fixed inset-0 z-[-1] hidden dark:block opacity-20"
      quantity={100}
     color="#ffffff"
      ease={80}
      refresh />
      <AnimatedButton showClickEffect={true}>
        Button
      </AnimatedButton>
    </div>
  );
}
