"use client";

import { GripVertical, Plus } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const DesignBoard = () => {
  return (
    <div className="@container w-full h-full bg-green-500/80">
      <div className="relative h-full w-full flex flex-col @md:flex-row overflow-hidden">
        <div className="flex flex-col gap-3 py-6">
          <motion.div
            drag
            dragConstraints={{
              top: 125,
              right: 125,
              bottom: 125,
              left: -125,
            }}
            className="flex relative w-fit gap-1 items-center border border-white/20 rounded-md p-2 bg-white/10 z-10"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              className="size-5 text-white absolute bottom-[85%] fill-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z"></path>
            </svg>
            <GripVertical className="size-4 text-white fill-white " />
            <p className="text-sm">Shape of You by Ed Sheeran</p>
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: 125,
              right: 125,
              bottom: 125,
              left: -125,
            }}
            className="flex w-fit gap-1 items-center border border-white/20 rounded-md p-2 bg-white/10 z-10"
          >
            <GripVertical className="size-4 text-white" />
            <p className="text-sm">Controlla by Drake</p>
          </motion.div>
        </div>
        <div className="border border-white/20 rounded-md p-2 bg-white/10 flex-1 flex flex-col gap-2 px-4">
          <div className="flex justify-between items-center ">
            <p>Music</p>
            <Plus className="size-5 text-white" />
          </div>
          <div className="bg-white/30 w-full flex-1 rounded-md animate-pulse" />
          <div className="bg-white/30 w-full flex-1 rounded-md p-2 animate-pulse">
            <div className="w-[40px] h-2 bg-white/40 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBoard;
