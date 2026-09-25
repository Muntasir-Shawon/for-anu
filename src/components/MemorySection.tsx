"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { loveStory } from "@/data/loveStory";

export default function MemorySection() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#E5C378]/[0.02] blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 sm:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-[#E5C378]/90 font-medium"
          >
            Memories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF7F2] mt-3 tracking-wide leading-tight"
          >
            {loveStory.memories.headlinePrefix}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-gold-gradient mt-4 tracking-wider"
          >
            {loveStory.memories.headlineHighlight}
          </motion.p>
        </div>

        {/* 5 Memories List */}
        <div className="space-y-24 sm:space-y-36">
          {loveStory.memories.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden glass-card p-2 sm:p-3 group">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[105%]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent" />
                      {item.caption && (
                        <div className="absolute bottom-4 left-5 right-5 text-xs sm:text-sm font-serif italic text-[#FAF7F2]/90 tracking-wide">
                          {item.caption}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#121212] border border-[#E5C378]/20 text-[11px] font-mono tracking-widest text-[#E5C378] uppercase">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2] font-light tracking-wide">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed pt-2">
                    {item.text.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
