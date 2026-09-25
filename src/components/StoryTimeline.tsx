"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Heart } from "lucide-react";
import { loveStory } from "@/data/loveStory";

export default function StoryTimeline() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#E5C378]/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-[#E5C378]/90 font-medium"
          >
            Chapter 01
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-light text-[#FAF7F2] mt-3 tracking-wide"
          >
            {loveStory.beginning.headline}
          </motion.h2>
        </div>

        {/* Intro Text Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed border-l-2 border-[#E5C378]/30 pl-6"
          >
            {loveStory.beginning.introLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={loveStory.beginning.images[0]}
                alt="Our beginning"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 filter contrast-[105%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-[#FAF7F2]/80">
                <Heart className="w-3.5 h-3.5 text-[#E5C378]" />
                <span className="font-serif italic tracking-wider">Before it all began</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Central Milestone: 01.04.2023 */}
        <div className="relative my-20 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="inline-block relative z-10 px-8 py-8 sm:px-14 sm:py-10 rounded-2xl glass-card border border-[#E5C378]/30"
          >
            <div className="flex items-center justify-center gap-2 mb-3 text-[#E5C378]">
              <Calendar className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em]">The Turning Point</span>
            </div>
            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-gold-gradient tracking-widest my-2">
              {loveStory.beginning.milestoneDate}
            </h3>
            <p className="font-serif italic text-lg sm:text-xl text-[#FAF7F2]/90 mt-2">
              {loveStory.beginning.milestoneTitle}
            </p>
          </motion.div>
        </div>

        {/* Reflection & Additional Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-24">
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            {loveStory.beginning.images.slice(1, 3).map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden glass-card p-1.5"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={`Beginning photo ${idx + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-1 md:order-2 space-y-4 md:pl-8 text-center md:text-left"
          >
            {loveStory.beginning.milestoneReflection.map((line, idx) => (
              <p
                key={idx}
                className={
                  idx === 1
                    ? "font-serif italic text-2xl sm:text-3xl text-gold-gradient py-2 font-normal"
                    : "text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed"
                }
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
