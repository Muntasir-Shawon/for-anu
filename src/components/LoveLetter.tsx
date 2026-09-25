"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { loveStory } from "@/data/loveStory";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full py-28 sm:py-36 px-4 sm:px-6 bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Background ambient light that warms up when letter is opened */}
      <motion.div
        animate={{
          opacity: isOpen ? 0.08 : 0.02,
          scale: isOpen ? 1.3 : 1,
        }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5C378] blur-[180px] pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center">
        {/* Section Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#E5C378]/90 font-medium">
            Personal Note
          </span>
          <h2 className="font-serif italic text-2xl sm:text-3xl text-[#FAF7F2] font-light mt-2 tracking-wide">
            &quot;{loveStory.loveLetter.teaser}&quot;
          </h2>
        </motion.div>

        {/* Closed Letter State (Unopened stationery folder) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-md bg-[#141414] border border-[#E5C378]/30 rounded-2xl p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] text-center flex flex-col items-center cursor-pointer hover:border-[#E5C378]/60 transition-all duration-300 group"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-[#E5C378]/40 flex items-center justify-center text-[#E5C378] mb-6 group-hover:scale-110 group-hover:bg-[#E5C378] group-hover:text-[#121212] transition-all duration-300">
              <Mail className="w-7 h-7" />
            </div>

            <p className="font-serif italic text-lg text-[#FAF7F2] mb-1">
              For Anu&apos;s Eyes Only
            </p>
            <p className="text-xs text-[#A1A1AA] tracking-widest font-mono uppercase mb-8">
              Confidential &amp; Handcrafted
            </p>

            <button
              id="open-letter-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#E5C378] to-[#C99C44] text-[#121212] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(229,195,120,0.3)] transition-all duration-300 cursor-pointer"
            >
              <span>{loveStory.loveLetter.openButtonText}</span>
              <Heart className="w-3.5 h-3.5 fill-[#121212]" />
            </button>
          </motion.div>
        )}

        {/* Opened Physical-Style Parchment Letter */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-[#FAF7F2] text-[#1A1A1A] rounded-2xl p-6 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-[#E5C378]/50 relative overflow-hidden"
            >
              {/* Subtle stationery texture watermark */}
              <div className="absolute top-8 right-8 text-[#E5C378]/20 select-none pointer-events-none">
                <span className="font-serif text-6xl italic">A &amp; S</span>
              </div>

              {/* Salutation */}
              <div className="border-b border-[#E5C378]/40 pb-6 mb-8 flex justify-between items-baseline">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1A1A] tracking-wide">
                  {loveStory.loveLetter.recipientSalutation}
                </h3>
                <span className="font-mono text-xs text-[#71717A] tracking-widest">
                  26.09.2026
                </span>
              </div>

              {/* Letter Paragraphs with gradual reveal */}
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#111111] font-serif font-normal">
                {loveStory.loveLetter.paragraphs.map((para, pIdx) => {
                  const isHighlight =
                    para.includes("I love you") ||
                    para.includes("Happy Birthday");

                  return (
                    <motion.p
                      key={pIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 + pIdx * 0.02 }}
                      className={
                        isHighlight
                          ? "font-serif text-lg sm:text-xl text-[#000000] font-semibold py-1 border-l-2 border-[#D4AF37] pl-3"
                          : ""
                      }
                    >
                      {para}
                    </motion.p>
                  );
                })}
              </div>

              {/* Signature */}
              <div className="mt-12 pt-8 border-t border-[#E5C378]/30 flex justify-between items-end">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#71717A] font-sans">
                    Always &amp; Forever
                  </span>
                  <p className="font-serif italic text-xl sm:text-2xl text-[#1A1A1A] font-semibold mt-1">
                    {loveStory.loveLetter.closingSalutation}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#E5C378]/20 flex items-center justify-center text-[#B89345]">
                  <Heart className="w-5 h-5 fill-[#B89345]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
