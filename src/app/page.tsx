"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import Envelope from "@/components/Envelope";
import BirthdayHero from "@/components/BirthdayHero";
import BirthdayMessage from "@/components/BirthdayMessage";
import StoryTimeline from "@/components/StoryTimeline";
import MemorySection from "@/components/MemorySection";
import PhotoGallery from "@/components/PhotoGallery";
import LittleThings from "@/components/LittleThings";
import LoveLetter from "@/components/LoveLetter";
import Countdown from "@/components/Countdown";
import BirthdayReveal from "@/components/BirthdayReveal";
import LittleReminder from "@/components/LittleReminder";
import FinalCinematicEnding from "@/components/FinalCinematicEnding";
import FinalPhoto from "@/components/FinalPhoto";
import MusicPlayer from "@/components/MusicPlayer";
import { loveStory } from "@/data/loveStory";

export default function Home() {
  // App Phase: "mystery" | "envelope" | "story"
  const [phase, setPhase] = useState<"mystery" | "envelope" | "story">("mystery");
  const [soundTriggered, setSoundTriggered] = useState(false);
  const [isMidnightUnlocked, setIsMidnightUnlocked] = useState(false);

  // Check if current date is already past or at target date
  useEffect(() => {
    const target = new Date(loveStory.countdown.targetIso).getTime();
    const now = new Date().getTime();
    if (now >= target) {
      setIsMidnightUnlocked(true);
    }
  }, []);

  const handleStartOpening = () => {
    setSoundTriggered(true);
    setPhase("envelope");
  };

  const handleEnvelopeComplete = () => {
    setPhase("story");
    setTimeout(() => {
      const heroEl = document.getElementById("birthday-hero");
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCountdownComplete = () => {
    setIsMidnightUnlocked(true);
  };

  const handleTogglePreview = () => {
    setIsMidnightUnlocked((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#FAF7F2] relative selection:bg-[#E5C378]/25 selection:text-[#FAF7F2]">
      {/* Background Sound Player */}
      <MusicPlayer externalPlayTrigger={soundTriggered} />

      <AnimatePresence mode="wait">
        {phase === "mystery" && (
          <OpeningScreen key="mystery" onOpen={handleStartOpening} />
        )}

        {phase === "envelope" && (
          <Envelope key="envelope" onComplete={handleEnvelopeComplete} />
        )}
      </AnimatePresence>

      {/* Main Long-Form Story Experience */}
      {phase === "story" && (
        <motion.div
          key="story-flow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full flex flex-col"
        >
          {/* Section 03 — Birthday Hero */}
          <BirthdayHero />

          {/* Section 04 — Birthday Message */}
          <BirthdayMessage />

          {/* Section 05 — Our Beginning */}
          <StoryTimeline />

          {/* Section 06 — Our Memories */}
          <MemorySection />

          {/* Section 07 — Photo Gallery + Fullscreen Lightbox */}
          <PhotoGallery />

          {/* Section 08 — The Little Things */}
          <LittleThings />

          {/* Section 09 — Love Letter */}
          <LoveLetter />

          {/* Section 10 — Countdown */}
          <Countdown
            onCountdownComplete={handleCountdownComplete}
            isUnlocked={isMidnightUnlocked}
            onTogglePreview={handleTogglePreview}
          />

          {/* Section 11 — Midnight Birthday Reveal */}
          <BirthdayReveal />

          {/* Section 12 — A Little Reminder */}
          <LittleReminder />

          {/* Section 13 — Final Cinematic Ending */}
          <FinalCinematicEnding />

          {/* Section 14 — Final Photo */}
          <FinalPhoto />
        </motion.div>
      )}
    </main>
  );
}
