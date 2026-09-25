"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveStory } from "@/data/loveStory";

export default function BirthdayMessage() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#E5C378]/[0.025] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Subtle decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#E5C378]/60 to-transparent mx-auto mb-10"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF7F2] tracking-wide mb-10 leading-tight"
        >
          {loveStory.birthdayMessage.headline}
        </motion.h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
          {loveStory.birthdayMessage.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + idx * 0.25 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Climax Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-[#E5C378]/15"
        >
          <p className="font-serif text-xl sm:text-3xl text-gold-gradient font-normal italic tracking-wide">
            {loveStory.birthdayMessage.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
