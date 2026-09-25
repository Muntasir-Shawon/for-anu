"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { loveStory } from "@/data/loveStory";

export default function FinalCinematicEnding() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-6 py-28">
      {/* Background Photograph with slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full animate-kenburns opacity-25">
          <SafeImage
            src={loveStory.ending.image}
            alt="Final Ending"
            fill
            className="object-cover object-center filter grayscale-[40%] contrast-[110%]"
            sizes="100vw"
          />
        </div>

        {/* Dark cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_85%)]" />
      </div>

      {/* Narrative Text */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Part 1: Memories reflection */}
        <div className="space-y-4 mb-14">
          {loveStory.ending.linesPart1.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              className="font-serif text-lg sm:text-2xl text-[#FAF7F2]/80 font-light tracking-wide"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Part 2: Still Choose You Climax */}
        <div className="my-10 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-sm sm:text-base tracking-[0.2em] uppercase text-[#A1A1AA] font-light"
          >
            {loveStory.ending.linesPart2[0]}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-gold-gradient tracking-wide"
          >
            {loveStory.ending.linesPart2[1]}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-serif italic text-2xl sm:text-4xl text-[#FAF7F2] font-light"
          >
            {loveStory.ending.linesPart2[2]}
          </motion.p>
        </div>

        {/* Final Wishes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-14 pt-10 border-t border-[#E5C378]/20 space-y-4"
        >
          <p className="font-serif text-2xl sm:text-3xl text-gold-gradient font-normal">
            {loveStory.ending.finalWish}
          </p>
          <p className="text-sm sm:text-base text-[#A1A1AA] font-light">
            {loveStory.ending.thankYou}
          </p>
          <p className="font-serif italic text-lg sm:text-xl text-[#FAF7F2] pt-4 font-light">
            &quot;{loveStory.ending.toast}&quot;
          </p>
          <p className="text-sm text-[#E5C378] tracking-widest uppercase font-mono">
            {loveStory.ending.signature}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
