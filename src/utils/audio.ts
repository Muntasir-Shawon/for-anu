/**
 * Centralized, Robust Audio Controller for Anu's Birthday Website.
 * Guarantees synchronous user-gesture playback on iOS Safari, Android Chrome, and Desktop.
 */

import { getAssetPath } from "@/utils/assetPath";

type AudioListener = (isPlaying: boolean, isMuted: boolean) => void;

class AudioController {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private isInitialized: boolean = false;
  private listeners: Set<AudioListener> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      // Defer DOM setup until window is ready
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.init());
      } else {
        this.init();
      }
    }
  }

  public init() {
    if (this.isInitialized || typeof window === "undefined") return;
    this.isInitialized = true;

    try {
      const audioUrl = getAssetPath("/music/until-i-found-you.mp3");
      this.audio = new Audio();
      this.audio.src = audioUrl;
      this.audio.loop = true;
      this.audio.preload = "auto";
      // @ts-expect-error playsInline attribute for mobile Safari
      this.audio.playsInline = true;

      try {
        this.audio.volume = 0.75;
      } catch {
        // iOS Safari volume is read-only
      }

      this.audio.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener("ended", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener("error", (e) => {
        console.warn("Audio playback error on primary source, trying fallback:", e);
        if (this.audio && !this.audio.src.includes(".mp3")) {
          this.audio.src = getAssetPath("/music/until-i-found-you.mp3");
          this.audio.load();
        }
      });

      // One-time global interaction unlock listener
      const unlockAudio = () => {
        if (!this.isPlaying && this.audio) {
          this.play().catch(() => {});
        }
        window.removeEventListener("click", unlockAudio);
        window.removeEventListener("touchstart", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
      };

      window.addEventListener("click", unlockAudio, { once: true, passive: true });
      window.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
      window.addEventListener("keydown", unlockAudio, { once: true, passive: true });
    } catch (err) {
      console.error("Failed to initialize audio controller:", err);
    }
  }

  /**
   * Synchronously starts playback inside a user event handler.
   */
  public play(): Promise<void> {
    if (typeof window === "undefined") return Promise.resolve();
    if (!this.isInitialized || !this.audio) {
      this.init();
    }
    if (!this.audio) return Promise.resolve();

    try {
      this.audio.volume = this.isMuted ? 0 : 0.75;
    } catch {}

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch((err) => {
          console.warn("Playback prevented by browser policy; awaiting gesture:", err);
          this.isPlaying = false;
          this.notify();
        });
    }
    return Promise.resolve();
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  public toggle(): Promise<void> {
    if (this.isPlaying) {
      this.pause();
      return Promise.resolve();
    } else {
      return this.play();
    }
  }

  public toggleMute() {
    if (!this.audio) return;
    this.isMuted = !this.isMuted;
    try {
      this.audio.muted = this.isMuted;
    } catch {}
    this.notify();
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying, this.isMuted);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlaying, this.isMuted);
      } catch (err) {
        console.error("Error in audio state listener:", err);
      }
    });
  }
}

// Global singleton instance
export const audioController = new AudioController();
