"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

type HintProps = {
  content: string;
  children: React.ReactNode;
  animationFrom?: "top" | "bottom" | "left" | "right";
  defaultOpen?: boolean;
  className?: string;
  asChild?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isAnimating?: boolean;
  enabled?: boolean;
  delay?: number;
  animationDuration?: number;
  animationStiffness?: number;
};

export function Hint({
  content,
  children,
  className,
  animationFrom = "top",
  asChild = false,
  defaultOpen = false,
  onOpenChange,
  enabled = true,
  delay = 0,
  animationDuration,
  isAnimating = true,
  animationStiffness = 260,
}: HintProps) {
  // Define the motion variants based on direction
  const variants = {
    initial: {
      opacity: 0,
      x: animationFrom === "left" ? -20 : animationFrom === "right" ? 20 : 0,
      y: animationFrom === "top" ? -20 : animationFrom === "bottom" ? 20 : 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: animationStiffness,
        damping: 10,
        duration: !isAnimating ? 0 : animationDuration,
      },
    },
    exit: {
      opacity: 0,
      x: animationFrom === "left" ? -20 : animationFrom === "right" ? 20 : 0,
      y: animationFrom === "top" ? -20 : animationFrom === "bottom" ? 20 : 0,
      scale: 0.6,
    },
  };
  if(!enabled) return <>{children}</>;  
  return (
    <TooltipProvider>
      <Tooltip
        delayDuration={delay}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
      >
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent side={animationFrom} asChild>
          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
          >
            {content}
          </motion.p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const HintPreview = () => {
  return (
    <Hint content="This is a hint">
      <button>Hover me</button>
    </Hint>
  );
};

export default HintPreview;