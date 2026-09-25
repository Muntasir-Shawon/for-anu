"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { loveStory } from "@/data/loveStory";

interface MusicPlayerProps {
  externalPlayTrigger?: boolean;
}

export default function MusicPlayer({ externalPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [basePath, setBasePath] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Dynamically resolve base path for GitHub Pages (/for-anu) vs Localhost
  useEffect(() => {
    let resolved = process.env.NEXT_PUBLIC_BASE_PATH || "";
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/for-anu")) {
      resolved = "/for-anu";
    }
    setBasePath(resolved);
  }, []);

  // Set default volume when audio mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
    }
  }, [basePath]);

  // Triggered when user opens gift or clicks wax seal
  useEffect(() => {
    if (externalPlayTrigger && audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay waiting for user gesture:", err);
          });
      }
    }
  }, [externalPlayTrigger, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.75;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Playback error:", err);
          });
      }
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
      {/* Hidden robust HTML5 audio element rendered inside the DOM with multiple fallback codecs */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={`${basePath}/music/until-i-found-you.mp3`} type="audio/mpeg" />
        <source src={`${basePath}/music/until-i-found-you.m4a`} type="audio/mp4" />
        <source src={`${basePath}/music/until-i-found-you.webm`} type="audio/webm" />
      </audio>

      <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#0E0E0E]/95 backdrop-blur-md border border-[#E5C378]/30 hover:border-[#E5C378]/60 text-[#FAF7F2] transition-all duration-300 shadow-xl hover:shadow-[#E5C378]/20 text-xs tracking-wider">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background music" : "Play Until I Found You"}
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
              <Play className="w-3.5 h-3.5 fill-[#E5C378] text-[#E5C378] group-hover:scale-110 transition-transform" />
            )}
          </div>

          <div className="flex flex-col">
            <span className="font-light text-[#FAF7F2] text-[11px] sm:text-xs">
              {isPlaying ? "Until I Found You" : "Play Sound"}
            </span>
            {isPlaying && (
              <span className="hidden sm:inline font-mono text-[9px] text-[#E5C378]/80">
                Stephen Sanchez
              </span>
            )}
          </div>
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            className="ml-1 text-[#FAF7F2]/70 hover:text-[#FAF7F2] p-1 cursor-pointer transition-colors"
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
