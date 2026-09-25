"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { loveStory } from "@/data/loveStory";

interface CountdownProps {
  onCountdownComplete: () => void;
  isUnlocked: boolean;
  onTogglePreview?: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function Countdown({
  onCountdownComplete,
  isUnlocked,
  onTogglePreview,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(loveStory.countdown.targetIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        onCountdownComplete();
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [onCountdownComplete]);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-28 sm:py-36 px-6 bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E5C378]/[0.03] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5C378]/25 bg-[#121212]/80 text-[#E5C378] text-xs font-mono tracking-widest uppercase mb-6"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Asia / Dhaka Time (UTC+6)</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF7F2] tracking-wide mb-14"
        >
          {isUnlocked ? "The moment is here." : loveStory.countdown.headline}
        </motion.h2>

        {/* Dynamic Countdown Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl mb-12">
          {[
            { label: loveStory.countdown.labels.days, value: timeLeft.days },
            { label: loveStory.countdown.labels.hours, value: timeLeft.hours },
            { label: loveStory.countdown.labels.minutes, value: timeLeft.minutes },
            { label: loveStory.countdown.labels.seconds, value: timeLeft.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col items-center border border-[#E5C378]/25 relative group"
            >
              <span className="font-serif text-4xl sm:text-6xl font-normal text-gold-gradient tracking-tight">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A1A1AA] font-light mt-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Countdown Subtext or Trigger */}
        <p className="font-serif italic text-sm sm:text-base text-[#FAF7F2]/70 font-light max-w-md">
          {timeLeft.isPast || isUnlocked
            ? "September 26, 2026 has arrived. Happy Birthday, Anu!"
            : "Counting down every second until we celebrate you."}
        </p>

        {/* Interactive preview toggle button for verification before midnight */}
        {onTogglePreview && (
          <div className="mt-8 pt-6 border-t border-[#E5C378]/15">
            <button
              id="preview-reveal-btn"
              onClick={onTogglePreview}
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#E5C378]/70 hover:text-[#E5C378] px-4 py-2 rounded-full border border-[#E5C378]/20 hover:border-[#E5C378]/40 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isUnlocked ? "Reset to Live Timer" : "Preview Midnight Reveal"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
