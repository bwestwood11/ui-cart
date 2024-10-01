"use client"
import React from "react";

import { Loader2 } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  showClickEffect?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

interface Ripple {
  x: number;
  y: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setRipples((currentRipples) => [...currentRipples, { x, y }]);

      setTimeout(() => {
        setRipples((currentRipples) => currentRipples.slice(1));
      }, 300);
    },
    []
  );

  return { ripples, handleClick };
};

const BUTTON_ANIMATION_CLASSNAMES =
  "relative active:scale-95 overflow-hidden transition-all duration-600";

const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      showClickEffect = true,
      startContent,
      endContent,
      ...props
    },
    ref
  ) => {
    const { ripples, handleClick } = useRipple();

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          !!showClickEffect && BUTTON_ANIMATION_CLASSNAMES
        )}
        ref={ref}
        disabled={props.disabled || isLoading}
        onClick={(e) => {
          if (showClickEffect) {
            handleClick(e);
          }
          if (props.onClick) props.onClick(e);
        }}
        {...props}
      >
        {!!startContent && !isLoading ? startContent : null}
        {isLoading ? <Loader2 className="animate-spin size-4 mr-2" /> : null}
        {props.children}
        {endContent}

        {/* Ripples */}
        {ripples.map((ripple, index) => (
          <span
            key={index}
            className="absolute bg-white bg-opacity-30 rounded-full transform scale-0 animate-ripple"
            style={{
              top: ripple.y - 20 + "px", // Center the ripple
              left: ripple.x - 20 + "px",
              width: "40px",
              height: "40px",
            }}
          ></span>
        ))}
      </button>
    );
  }
);

AnimatedButton.displayName = "Button";

export { AnimatedButton };
