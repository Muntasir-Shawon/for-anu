import wave
import struct
import math
import os

sample_rate = 44100
duration = 32.0  # 32 seconds loop
total_samples = int(sample_rate * duration)

output_path = r"C:\Users\Muntasir\.gemini\antigravity\scratch\for-anu\public\music\ambient-romance.wav"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# 4 chords progression: Cmaj9 -> Am9 -> Fmaj9 -> Gadd9 (8s per chord)
# Frequencies (Hz):
# Cmaj9: C3 (130.81), G3 (196.00), B3 (246.94), E4 (329.63), D4 (293.66)
# Am9:   A2 (110.00), E3 (164.81), G3 (196.00), C4 (261.63), B3 (246.94)
# Fmaj9: F2 (87.31),  C3 (130.81), E3 (164.81), A3 (220.00), G4 (392.00)
# Gadd9: G2 (98.00),  D3 (146.83), G3 (196.00), B3 (246.94), A4 (440.00)

chords = [
    [130.81, 196.00, 246.94, 293.66, 329.63],
    [110.00, 164.81, 196.00, 246.94, 261.63],
    [87.31, 130.81, 164.81, 220.00, 392.00],
    [98.00, 146.83, 196.00, 246.94, 440.00],
]

with wave.open(output_path, "w") as wav_file:
    wav_file.setnchannels(2)      # Stereo
    wav_file.setsampwidth(2)     # 16-bit
    wav_file.setframerate(sample_rate)

    chord_duration = 8.0 # seconds
    
    frames = bytearray()
    for i in range(total_samples):
        t = i / sample_rate
        chord_idx = int(t / chord_duration) % len(chords)
        chord_t = t % chord_duration
        current_chord = chords[chord_idx]

        # Smooth envelope for the chord (slow attack, sustained, slow decay)
        envelope = math.sin((chord_t / chord_duration) * math.pi) ** 1.5

        # Master loop fade in and out at start and end for seamless loop
        loop_fade = 1.0
        if t < 2.0:
            loop_fade = t / 2.0
        elif t > (duration - 2.0):
            loop_fade = (duration - t) / 2.0

        sample_val = 0.0
        for idx, freq in enumerate(current_chord):
            # Fundamental + soft second harmonic + detune shimmer
            shimmer = 0.5 * math.sin(2 * math.pi * 0.25 * t)
            h1 = math.sin(2 * math.pi * (freq + shimmer * 0.2) * t)
            h2 = 0.25 * math.sin(2 * math.pi * freq * 2 * t)
            sample_val += (h1 + h2) * (0.8 / (idx + 1.2))

        # Ambient gentle tremolo
        tremolo = 0.85 + 0.15 * math.sin(2 * math.pi * 3.5 * t)
        val = sample_val * envelope * loop_fade * tremolo * 0.18

        # Stereo panning
        left_pan = 0.85 + 0.15 * math.sin(2 * math.pi * 0.1 * t)
        right_pan = 0.85 - 0.15 * math.sin(2 * math.pi * 0.1 * t)

        left_sample = int(max(-32767, min(32767, val * left_pan * 32767)))
        right_sample = int(max(-32767, min(32767, val * right_pan * 32767)))

        frames.extend(struct.pack("<hh", left_sample, right_sample))

    wav_file.writeframes(frames)

print(f"Generated romantic ambient soundtrack at {output_path} ({os.path.getsize(output_path)} bytes)")
