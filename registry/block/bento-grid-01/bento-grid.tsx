"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import SonicBento from "../bento-grid-components/sonic-bento";
import DesignBoard from "../bento-grid-components/design-board";


const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-4">
      <BentoCard
        eyebrow="Audio Analysis"
        title="Get perfect clarity"
        description="Our AI-powered audio analysis will help you understand your customers better than they understand themselves."
        graphic={<SonicBento />}
        fade={["bottom"]}
        className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
      />
      <BentoCard
        eyebrow="Kanban"
        title="Interactive Board"
        description="Our interactive kanban board will help you keep track of your music projects."
        graphic={<DesignBoard />}
        fade={["bottom"]}
        className="lg:col-span-3 lg:rounded-tr-4xl"
      />
      <BentoCard
        eyebrow="Speed"
        title="Built for performance"
        description="Access your music library in seconds with our high-speed servers."
        fade={["bottom"]}
        graphic={
          <Image
            src="/screenshots/music-dashboard.jpg"
            width={1200}
            height={1200}
            alt="dashboard image"
            className="object-cover w-full h-full"
          />
        }
        className="lg:col-span-2 lg:rounded-bl-4xl"
      />
      <BentoCard
        eyebrow="Source"
        title="Receive the latest music"
        description="Our music source is updated daily with the latest tracks from your favorite artists."
        graphic={
          <Image
            src="/screenshots/spotify.png"
            width={1200}
            height={1200}
            alt="dashboard image"
            className="object-cover w-full h-full"
          />
        }
        className="lg:col-span-2"
        fade={["bottom"]}
      />
      <BentoCard
        eyebrow="Components"
        title="Shadcn"
        description="Use the Shadcn CLI to use custom components in your projects."
        graphic={
          <Image
            src="/screenshots/shadcn.jpg"
            width={1200}
            height={1200}
            alt="dashboard image"
            className="object-cover w-full h-full"
          />
        }
        className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        fade={["bottom"]}
      />
    </div>
  );
};

export default BentoGrid;

const BentoCard = ({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) => {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={cn(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-card shadow-sm ring-1 ring-black/5 border-white/20 border shadow-white/10",
        ""
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-card to-0%" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-card to-50% " />
        )}
      </div>
      <div className="relative p-10">
        <h3>{eyebrow}</h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-foreground group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-foreground/80 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
