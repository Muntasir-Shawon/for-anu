"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { loveStory } from "@/data/loveStory";

interface MusicPlayerProps {
  onFirstUserGesture?: () => void;
  externalPlayTrigger?: boolean;
}

export default function MusicPlayer({ externalPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!loveStory.music.enabled || !loveStory.music.src) return;

    const audio = new Audio(loveStory.music.src);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5;

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    audio.addEventListener("error", (e) => {
      console.warn("Audio file could not be loaded, sound player disabled:", e);
      setIsLoaded(false);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Triggered when user opens gift or clicks to start
  useEffect(() => {
    if (externalPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // Browser may still block if gesture was synthetic
          console.log("Autoplay gesture required:", err);
        });
    }
  }, [externalPlayTrigger, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Play failed:", err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (!loveStory.music.enabled) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#0E0E0E]/90 backdrop-blur-md border border-[#E5C378]/25 hover:border-[#E5C378]/50 text-[#FAF7F2] transition-all duration-300 shadow-lg hover:shadow-[#E5C378]/10 text-xs tracking-wider">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          className="group flex items-center gap-2 text-left cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            {isPlaying ? (
              <div className="flex items-end justify-center gap-[2px] h-3 w-3">
                <span className="w-[2px] bg-[#E5C378] animate-[pulse_0.8s_ease-in-out_infinite] h-full" />
                <span className="w-[2px] bg-[#E5C378] animate-[pulse_1.1s_ease-in-out_infinite_0.2s] h-2/3" />
                <span className="w-[2px] bg-[#E5C378] animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-4/5" />
              </div>
            ) : (
              <Music className="w-3.5 h-3.5 text-[#E5C378]/70 group-hover:text-[#E5C378]" />
            )}
          </div>

          <span className="hidden sm:inline font-light text-[#FAF7F2]/80 group-hover:text-[#FAF7F2]">
            {isPlaying ? "Music Playing" : "Play Sound"}
          </span>
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            className="ml-1 text-[#FAF7F2]/60 hover:text-[#FAF7F2] p-1 cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#E5C378]" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
