"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/loveStory";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prev);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % items.length;
    onNavigate(next);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Esc key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext(); // Swiped left -> next
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // Swiped right -> prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-2xl p-4 sm:p-8 select-none"
        >
          {/* Top Bar with Counter & Close */}
          <div
            className="absolute top-5 inset-x-6 flex items-center justify-between z-50 max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212]/80 border border-[#E5C378]/20 text-xs font-mono text-[#E5C378]">
              <span>{String((currentIndex ?? 0) + 1).padStart(2, "0")}</span>
              <span className="text-[#71717A]">/</span>
              <span className="text-[#71717A]">
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-2.5 rounded-full bg-[#121212]/80 border border-[#E5C378]/20 hover:border-[#E5C378] text-[#FAF7F2] hover:text-[#E5C378] transition-all duration-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photograph"
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#121212]/80 border border-[#E5C378]/20 hover:border-[#E5C378] text-[#FAF7F2] hover:text-[#E5C378] transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photograph"
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#121212]/80 border border-[#E5C378]/20 hover:border-[#E5C378] text-[#FAF7F2] hover:text-[#E5C378] transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Card */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
          >
            <div className="relative w-full h-[55vh] sm:h-[68vh] rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-[#E5C378]/25">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 85vw"
              />
            </div>

            {/* Caption beneath */}
            <div className="text-center mt-4 px-4 max-w-xl">
              <h4 className="font-serif text-lg sm:text-xl text-[#FAF7F2] font-light tracking-wide">
                {currentItem.title}
              </h4>
              <p className="font-serif italic text-xs sm:text-sm text-[#A1A1AA] mt-1 font-light">
                {currentItem.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
