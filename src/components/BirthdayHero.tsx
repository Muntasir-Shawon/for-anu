"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { loveStory } from "@/data/loveStory";

export default function BirthdayHero() {
  return (
    <section
      id="birthday-hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-6 py-20"
    >
      {/* Background Photograph with slow cinematic zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="relative w-full h-full animate-kenburns"
        >
          <Image
            src={loveStory.hero.image}
            alt={loveStory.meta.recipient}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center filter contrast-[105%]"
            sizes="100vw"
          />
        </motion.div>

        {/* Cinematic dark gradients to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
      </div>

      {/* Hero Typography Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Date pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#E5C378]/40 bg-[#0E0E0E]/80 backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378] animate-ping" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#E5C378] uppercase">
            {loveStory.hero.date}
          </span>
        </motion.div>

        {/* Birthday Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#FAF7F2]/90 uppercase font-light mb-3 drop-shadow"
        >
          {loveStory.hero.title}
        </motion.p>

        {/* Recipient Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl font-normal tracking-[0.12em] text-[#FAF7F2] mb-8"
        >
          <span className="text-gold-gradient drop-shadow-[0_0_40px_rgba(229,195,120,0.4)]">
            {loveStory.hero.name}
          </span>
        </motion.h1>

        {/* Emotional Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-2 max-w-xl mx-auto"
        >
          <p className="font-serif italic text-lg sm:text-2xl text-[#FAF7F2] font-light drop-shadow">
            &quot;{loveStory.hero.lead}&quot;
          </p>
          <p className="text-xs sm:text-sm text-[#E4E4E7] font-light tracking-wide drop-shadow">
            {loveStory.hero.sublead}
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#E5C378] pt-3 drop-shadow">
            {loveStory.hero.signature}
          </p>
        </motion.div>
      </div>

      {/* Downward Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#FAF7F2]/80">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#E5C378]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
