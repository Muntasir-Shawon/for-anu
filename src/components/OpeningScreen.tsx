"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveStory } from "@/data/loveStory";

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  return (
    <motion.section
      key="opening-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] text-[#FAF7F2] px-6 select-none overflow-hidden"
    >
      {/* Subtle radial center ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-[#E5C378]/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Step 1: Small Teaser */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#A1A1AA] font-light mb-8"
        >
          {loveStory.opening.teaser}
        </motion.p>

        {/* Step 2: Recipient Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.18em] font-light text-[#FAF7F2] mb-6"
        >
          <span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(229,195,120,0.25)]">
            {loveStory.opening.name}
          </span>
        </motion.h1>

        {/* Step 3: Prompt Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 4.2 }}
          className="text-sm sm:text-base tracking-[0.2em] text-[#FAF7F2]/60 font-light italic mb-12 font-serif"
        >
          {loveStory.opening.prompt}
        </motion.p>

        {/* Step 4: Minimal Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 5.2 }}
        >
          <button
            id="open-gift-btn"
            onClick={onOpen}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-[#E5C378]/30 hover:border-[#E5C378] text-[#FAF7F2] tracking-[0.18em] text-xs sm:text-sm uppercase transition-all duration-500 hover:bg-[#E5C378]/10 hover:shadow-[0_0_30px_rgba(229,195,120,0.15)] cursor-pointer"
          >
            <span>{loveStory.opening.buttonText}</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[#E5C378]">
              →
            </span>
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 6.5, duration: 1.5 }}
        className="absolute bottom-8 text-[11px] tracking-[0.3em] uppercase text-[#A1A1AA]/50"
      >
        A bespoke moment
      </motion.div>
    </motion.section>
  );
}
