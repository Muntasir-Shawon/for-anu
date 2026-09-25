"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { Heart, Infinity as InfinityIcon } from "lucide-react";
import { loveStory } from "@/data/loveStory";

export default function FinalPhoto() {
  return (
    <footer className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] flex flex-col items-center justify-center overflow-hidden border-t border-[#E5C378]/10">
      <div className="max-w-md w-full mx-auto flex flex-col items-center text-center">
        {/* Soft Framed Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden glass-card p-2 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#E5C378]/25"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <SafeImage
              src={loveStory.finalPhoto.image}
              alt="Anu & Shawon"
              fill
              className="object-cover object-center filter grayscale-[20%] contrast-[105%]"
              sizes="224px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent" />
          </div>
        </motion.div>

        {/* Date to Infinity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#E5C378] uppercase mb-4"
        >
          <span>{loveStory.meta.relationshipStartDate.replace(/-/g, ".")}</span>
          <span>→</span>
          <InfinityIcon className="w-4 h-4 inline-block" />
        </motion.div>

        {/* Peaceful Closing Words */}
        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-2xl sm:text-3xl font-light text-[#FAF7F2] tracking-wide mb-3"
        >
          {loveStory.finalPhoto.wish}
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-serif italic text-xl sm:text-2xl text-gold-gradient font-normal tracking-wide"
        >
          &quot;{loveStory.finalPhoto.love}&quot;
        </motion.p>

        {/* Heart Seal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1 }}
          className="mt-12 text-[#E5C378]/50"
        >
          <Heart className="w-4 h-4 fill-current" />
        </motion.div>
      </div>
    </footer>
  );
}
