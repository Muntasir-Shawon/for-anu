"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { loveStory } from "@/data/loveStory";
import ParticlesOverlay from "./ParticlesOverlay";

export default function BirthdayReveal() {
  return (
    <section
      id="birthday-reveal"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#070508] overflow-hidden px-6 py-28"
    >
      {/* Golden Stardust Ambient Animation */}
      <ParticlesOverlay />

      {/* Cinematic Climax Background Photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="relative w-full h-full animate-kenburns"
        >
          <Image
            src={loveStory.reveal.image}
            alt="Birthday Reveal"
            fill
            className="object-cover object-center filter contrast-[110%]"
            sizes="100vw"
          />
        </motion.div>

        {/* Deep romantic gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070508] via-[#070508]/60 to-[#070508]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,195,120,0.08)_0%,transparent_75%)]" />
      </div>

      {/* Climax Content Box */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Banner Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E5C378]/40 bg-[#141216]/90 backdrop-blur-md mb-8 text-[#E5C378] text-xs font-mono tracking-[0.25em] uppercase shadow-[0_0_25px_rgba(229,195,120,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{loveStory.reveal.banner}</span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-sm sm:text-base text-[#A1A1AA] tracking-[0.35em] uppercase mb-4"
        >
          {loveStory.reveal.date}
        </motion.p>

        {/* Main Celebration Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-gold-gradient tracking-wide mb-10 text-gold-glow leading-tight"
        >
          {loveStory.reveal.tagline}
        </motion.h2>

        {/* Climax Emotional Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="space-y-4 max-w-xl mx-auto"
        >
          <p className="font-serif text-xl sm:text-3xl text-[#FAF7F2] font-light leading-relaxed">
            {loveStory.reveal.message1}
          </p>
          <p className="font-serif italic text-lg sm:text-2xl text-gold-gradient font-light leading-relaxed">
            {loveStory.reveal.message2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-[#E5C378] flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4 fill-[#E5C378]" />
        </motion.div>
      </div>
    </section>
  );
}
