"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { loveStory } from "@/data/loveStory";
import Lightbox from "./Lightbox";

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  return (
    <section className="relative w-full py-28 sm:py-36 px-4 sm:px-6 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E5C378]/[0.025] blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-[#E5C378]/90 font-medium"
          >
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF7F2] mt-3 tracking-wide"
          >
            {loveStory.gallery.headline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 space-y-1 text-[#A1A1AA] text-sm sm:text-base font-light italic font-serif"
          >
            {loveStory.gallery.subheadline.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </motion.div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {loveStory.gallery.items.map((item, index) => {
            let spanClasses = "col-span-1 row-span-1";
            if (item.span === "tall") {
              spanClasses = "col-span-1 row-span-2";
            } else if (item.span === "wide") {
              spanClasses = "col-span-1 sm:col-span-2 row-span-1";
            }

            return (
              <motion.div
                key={item.id}
                id={`gallery-item-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
                className={`relative group rounded-2xl overflow-hidden glass-card p-1.5 cursor-pointer ${spanClasses}`}
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[105%]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Dark subtle overlay with title and expand button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-serif text-sm sm:text-base text-[#FAF7F2] font-medium tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#A1A1AA] font-light line-clamp-1">
                        {item.caption}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#121212]/80 border border-[#E5C378]/30 flex items-center justify-center text-[#E5C378] group-hover:scale-110 group-hover:bg-[#E5C378] group-hover:text-[#121212] transition-all duration-300 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={loveStory.gallery.items}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
      />
    </section>
  );
}
