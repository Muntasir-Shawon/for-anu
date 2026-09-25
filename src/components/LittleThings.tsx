"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smile, Mic, Coffee, HeartHandshake, Sun, UserCheck } from "lucide-react";
import { loveStory } from "@/data/loveStory";

export default function LittleThings() {
  const iconList = [
    Smile,
    Mic,
    Coffee,
    HeartHandshake,
    Sun,
    UserCheck,
  ];

  return (
    <section className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#E5C378]/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E5C378]/90 font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
            <span>Affection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF7F2] mt-3 tracking-wide"
          >
            {loveStory.littleThings.headline}
          </motion.h2>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loveStory.littleThings.items.map((item, index) => {
            const IconComponent = iconList[index % iconList.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: index * 0.12 }}
                className="group relative rounded-2xl glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#E5C378]/25 flex items-center justify-center text-[#E5C378] mb-6 group-hover:scale-110 group-hover:border-[#E5C378]/60 transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-normal tracking-wide mb-3 group-hover:text-[#E5C378] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5C378]/10 flex items-center justify-between text-xs text-[#71717A] font-mono">
                  <span>0{index + 1}</span>
                  <span className="text-[#E5C378]/40 group-hover:text-[#E5C378] transition-colors">
                    ✦
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
