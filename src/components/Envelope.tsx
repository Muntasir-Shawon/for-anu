"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loveStory } from "@/data/loveStory";

interface EnvelopeProps {
  onComplete: () => void;
}

export default function Envelope({ onComplete }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const handleOpen = () => {
    if (isOpen || hasCompleted) return;
    setIsOpen(true);

    setTimeout(() => {
      setHasCompleted(true);
      onComplete();
    }, 2400);
  };

  return (
    <motion.section
      key="envelope-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] px-4 py-8 select-none overflow-hidden"
    >
      {/* Dynamic ambient background light */}
      <motion.div
        animate={{
          opacity: isOpen ? 0.12 : 0.05,
          scale: isOpen ? 1.3 : 1,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#E5C378] blur-[150px] pointer-events-none"
      />

      {/* Header Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8 z-10"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#E5C378] font-medium px-3 py-1 rounded-full border border-[#E5C378]/30 bg-[#121212]/80">
          A Handwritten Surprise
        </span>
      </motion.div>

      {/* Realistic Ivory & Warm White Digital Envelope */}
      <div
        id="envelope-btn"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Tap to open the envelope"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleOpen();
          }
        }}
        className={`relative z-20 w-[310px] xs:w-[350px] sm:w-[440px] h-[220px] sm:h-[280px] cursor-pointer transition-transform duration-500 ${
          !isOpen ? "hover:scale-[1.02] active:scale-[0.99]" : ""
        }`}
        style={{ perspective: "1200px" }}
      >
        {/* Envelope Back Body (Warm Ivory/Beige paper) */}
        <div className="absolute inset-0 bg-[#EFE9DF] rounded-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] border border-[#D4AF37]/50 overflow-visible">
          {/* Inner envelope lining pattern */}
          <div className="absolute inset-2 bg-gradient-to-b from-[#FAF7F2] to-[#E5DEC9] rounded-xl opacity-90" />
        </div>

        {/* Rising Card Inside Envelope */}
        <motion.div
          animate={
            isOpen
              ? {
                  y: -150,
                  opacity: 1,
                  scale: 1.05,
                  zIndex: 25,
                }
              : {
                  y: 0,
                  opacity: 0.9,
                  scale: 0.96,
                  zIndex: 5,
                }
          }
          transition={{
            duration: 1.6,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-x-3 top-3 bottom-3 bg-[#FCFAF7] text-[#1A1A1A] rounded-xl p-5 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.45)] flex flex-col justify-between border-2 border-[#D4AF37]/40"
        >
          <div className="border-b border-[#D4AF37]/30 pb-2.5 flex justify-between items-center">
            <span className="font-serif italic text-xs tracking-widest text-[#71717A]">
              Special Edition
            </span>
            <span className="text-[11px] tracking-widest font-mono text-[#8C7A5B]">
              26.09.2026
            </span>
          </div>

          <div className="my-auto py-2 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#8C7A5B] mb-1 font-sans font-medium">
              To my beloved
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-[#1A1A1A]">
              {loveStory.meta.recipient}
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#52525B] mt-2">
              &quot;Today is your day...&quot;
            </p>
          </div>

          <div className="text-right border-t border-[#D4AF37]/30 pt-2">
            <span className="font-serif text-xs italic text-[#71717A]">
              With all my love, Shawon
            </span>
          </div>
        </motion.div>

        {/* Envelope Lower Flaps (Ivory/Beige Pocket) */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl">
          {/* Left triangle */}
          <div
            className="absolute inset-y-0 left-0 w-full"
            style={{
              clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)",
              backgroundColor: "#E8E1D3",
              borderRight: "1px solid rgba(212, 175, 55, 0.3)",
            }}
          />
          {/* Right triangle */}
          <div
            className="absolute inset-y-0 right-0 w-full"
            style={{
              clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)",
              backgroundColor: "#E6DFD0",
              borderLeft: "1px solid rgba(212, 175, 55, 0.3)",
            }}
          />
          {/* Bottom triangle pocket with text on envelope */}
          <div
            className="absolute inset-x-0 bottom-0 h-full flex flex-col items-center justify-end pb-6 sm:pb-8"
            style={{
              clipPath: "polygon(0% 100%, 50% 48%, 100% 100%)",
              backgroundColor: "#EFE8DC",
              borderTop: "1px solid rgba(212, 175, 55, 0.45)",
            }}
          >
            {/* Front Lettering on Envelope */}
            <div className="text-center z-10 select-none px-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#1A1A1A]">
                {loveStory.envelope.forText}
              </h3>
              <p className="font-serif italic text-xs sm:text-sm text-[#615545] mt-0.5">
                {loveStory.envelope.subText}
              </p>
            </div>
          </div>
        </div>

        {/* Top Folding Flap */}
        <motion.div
          animate={
            isOpen
              ? {
                  rotateX: 180,
                  zIndex: 2,
                }
              : {
                  rotateX: 0,
                  zIndex: 20,
                }
          }
          transition={{
            duration: 1.2,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-x-0 top-0 h-1/2"
        >
          <div
            className="w-full h-full relative"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
              backgroundColor: "#F2EBE0",
              borderBottom: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            {/* Wax Seal Monogram */}
            <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#8A1C42] via-[#A8244F] to-[#C93B6D] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.5)] border-2 border-[#FAF7F2]/60">
              <span className="font-serif text-xs sm:text-sm font-bold text-[#FAF7F2] tracking-tighter drop-shadow">
                A&amp;S
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tap Instruction / Status */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-14 text-center z-10"
          >
            <button
              onClick={handleOpen}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#121212]/90 border border-[#E5C378]/50 hover:border-[#E5C378] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#E5C378] hover:bg-[#E5C378]/15 hover:shadow-[0_0_25px_rgba(229,195,120,0.25)] transition-all duration-300 animate-pulse cursor-pointer shadow-lg"
            >
              <span>{loveStory.envelope.instructionText}</span>
              <span>✨</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening feedback */}
      {isOpen && !hasCompleted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          className="mt-8 text-xs sm:text-sm tracking-[0.25em] font-light text-[#E5C378] font-serif italic z-10"
        >
          Unfolding your surprise...
        </motion.p>
      )}
    </motion.section>
  );
}
