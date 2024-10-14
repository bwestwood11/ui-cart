"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
    wrapperClassName?: string;
    audioWaveCount?: number;
    bottomGradientClassName?: string;
}
const SonicBento = ({wrapperClassName, audioWaveCount = 40, bottomGradientClassName}: Props) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-green-500", wrapperClassName)}>
      <AudioWaves numberOfLines={audioWaveCount} />
      <Circles bottomGradientClassName={bottomGradientClassName} />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
      </div>
    </div>
  );
};

export default SonicBento;

function Circles({bottomGradientClassName}: {bottomGradientClassName?: string}) {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} isBlurred={true} />
      <div className={cn("absolute inset-0 bg-gradient-to-t from-white to-35%", bottomGradientClassName)} />
    </div>
  );
}

function Circle({
  size,
  delay,
  opacity,
  isBlurred = false
}: {
  size: number;
  delay: number;
  opacity: string;
  isBlurred?: boolean;
}) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: "easeInOut",
            delay,
          },
        },
      }}
      initial="idle"
      animate="active"
      style={{ "--opacity": opacity } as React.CSSProperties}
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
        "bg-white bg-opacity-[var(--opacity)]",
        isBlurred && "backdrop-blur-[2px]",
         
        // "bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.green.800)_var(--opacity),transparent)_100%)]",
        "ring-1 ring-inset ring-green-800/[8%]"
      )}
    />
  );
}

function MainLogo() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
      <Mic className="size-8 text-white" />
    </div>
  );
}

function AudioWaves({numberOfLines}: {numberOfLines: number}) {
  const [waves, setWaves] = useState<number[]>([]);
  useEffect(() => {
    const waveCount = numberOfLines // Number of lines
    const newWaves = [];

    for (let i = 0; i < waveCount; i++) {
      const randomHeight = Math.random() * 100 + 10; // Random height between 10 and 110
      newWaves.push(randomHeight);
    }

    setWaves(newWaves);
  }, [numberOfLines]);

  return (
    <div className="w-full absolute inset-0 flex justify-between items-center">
      {waves.map((height, index) => (
        <motion.div
        initial={{ height: "0px"}}
        animate={{ height: [height, height + 10, height] }}
        transition={{ duration: 0.75, repeat: Infinity, repeatDelay: 1.25, ease: "easeInOut", delay: index * 0.05 }}
          key={index}
          className="w-[3px] bg-white/50"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}
