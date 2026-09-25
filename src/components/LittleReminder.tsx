"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveStory } from "@/data/loveStory";

export default function LittleReminder() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E5C378]/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Section Heading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-[#E5C378]/90 font-medium block mb-4"
        >
          An Eternal Promise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl font-light text-[#FAF7F2] tracking-wide mb-14"
        >
          {loveStory.reminder.headline}
        </motion.h2>

        {/* Staggered Lines */}
        <div className="space-y-6 sm:space-y-8">
          {loveStory.reminder.lines.map((line, idx) => {
            const isHighlight =
              line.includes("someone I choose") ||
              line.includes("all the little moments");

            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: idx * 0.15 }}
                className={
                  isHighlight
                    ? "font-serif text-2xl sm:text-3xl text-gold-gradient font-normal tracking-wide"
                    : "font-serif text-xl sm:text-2xl text-[#FAF7F2]/85 font-light tracking-wide"
                }
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        {/* Conclusion Lines */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-16 pt-10 border-t border-[#E5C378]/15 space-y-3"
        >
          {loveStory.reminder.conclusion.map((line, cIdx) => (
            <p
              key={cIdx}
              className={
                cIdx === 1
                  ? "font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-medium italic"
                  : "text-[#A1A1AA] text-sm sm:text-base font-light tracking-wide"
              }
            >
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
