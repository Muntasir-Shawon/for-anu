# For Anu — A Handcrafted Digital Love Letter & Birthday Surprise 🤍

A bespoke, cinematic romantic birthday website handcrafted by **Shawon** for **Anu**, celebrating her birthday on **26 September 2026** and commemorating their journey that began on **01 April 2023**.

Designed with a high-fashion editorial aesthetic: pure deep blacks (`#050505`), charcoal, warm ivory calligraphy, champagne/gold accents (`#E5C378`), authentic film grain, smooth 3D envelope physics, interactive memories, full-screen accessible lightbox, handwritten love letter, dynamic live countdown (Asia/Dhaka timezone), and midnight birthday reveal climax with ambient golden stardust.

---

## ✨ Experience Flow

1. **Section 01 — Mystery Opening**: Pitch-black opening, subtle film grain, staggered typographic reveal: *"I made something for you..."* → *"ANU"* → *"Open it."*
2. **Section 02 — Realistic 3D Envelope Experience**: Warm ivory & gold digital envelope sealed with an *A&S* wax stamp. When tapped, the flap folds open in 3D perspective and the personal invitation rises gracefully.
3. **Section 03 — Birthday Hero**: Reveal of her portrait with slow cinematic scale, golden glow, and official dedication: *"HAPPY BIRTHDAY ANU — 26.09.2026"*.
4. **Section 04 — Birthday Message**: Warm editorial message celebrating her existence.
5. **Section 05 — Our Beginning**: The story before and after **01.04.2023** (*"The beginning of us"*), with vertical editorial timeline and photos.
6. **Section 06 — Our Memories**: 5 interactive memory cards (*How it started*, *The unscripted moments*, *Ordinary magic*, *Real & imperfect*, *My favorite place*).
7. **Section 07 — Editorial Photo Gallery & Fullscreen Lightbox**: Asymmetric magazine layout with keyboard navigation (Esc, Arrow keys), mobile swipe gestures, and image counters.
8. **Section 08 — The Little Things I Love About You**: 6 interactive glassmorphic cards celebrating her smile, her voice, her little habits, her care, and her true self.
9. **Section 09 — Love Letter**: Folded stationery note that unfolds into a full-length, intimate love letter from Shawon to Anu with warm ambient illumination.
10. **Section 10 — Live Countdown**: Real-time clock targeting **26 September 2026 00:00:00 Asia/Dhaka (UTC+6)**. Automatically locks at zero and transitions to the reveal. Includes a preview toggle.
11. **Section 11 — Midnight Birthday Reveal**: The emotional climax with floating golden stardust particles, celebratory headline *"IT'S YOUR DAY, ANU."*, and cinematic zoom.
12. **Section 12 — A Little Reminder**: Line-by-line staggered reassurance (*"You are loved. You are special. You are someone I choose..."*).
13. **Section 13 — Final Cinematic Ending**: Full-screen atmospheric photo and emotional promise (*"If life gave me the chance to go back and choose again... I'd still choose you. Every single time."*).
14. **Section 14 — Final Photo & Infinite Love**: Peaceful closing with date marker `01.04.2023 → ∞` and heartfelt signoff.
15. **Ambient Soundtrack**: Minimalist floating audio player with sound visualizer bars, gesture-safe initialization, and mute toggle.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom romantic dark design system
- **Animations**: Framer Motion (3D rotations, staggered typography, Ken Burns scale)
- **Icons**: Lucide React
- **Optimization**: Next.js Image optimization (`next/image`) for fast mobile LCP

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18.17+ or v20+) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📸 Where to Add Your Photos

All photographs are neatly organized inside `/public/images/`.

| File Path | Description | Recommended Ratio |
| :--- | :--- | :--- |
| `public/images/hero.jpg` | Main hero portrait of Anu | Portrait (3:4 or 4:5) |
| `public/images/beginning-01.jpg` | Beginning chapter photo 1 | Landscape or 4:3 |
| `public/images/beginning-02.jpg` | Beginning chapter photo 2 | Portrait or Square |
| `public/images/beginning-03.jpg` | Beginning chapter photo 3 | Portrait or Square |
| `public/images/memory-01.jpg` to `05.jpg` | 5 memories cards photos | 4:3 or 16:10 |
| `public/images/gallery-01.jpg` to `10.jpg` | 10 asymmetric gallery photos | Mixed (tall, wide, square) |
| `public/images/reveal.jpg` | Midnight reveal climax photo | High-res Portrait |
| `public/images/final.jpg` | Final closing photo | Portrait |
| `public/images/og-image.jpg` | WhatsApp/Facebook preview card | 1200x630 px |

> **Zero Component Edits Required**: Simply drop your own JPEG/PNG files into `public/images/` using the exact filenames listed above. The website will automatically display your real photos!

---

## ✍️ Where to Change Text, Dates, or Messages

All text, dates, memories, and letter contents are stored in a single centralized file:
```
src/data/loveStory.ts
```

Open `src/data/loveStory.ts` in any code editor:
- **Change Names**: Update `meta.recipient` ("Anu") and `meta.sender` ("Shawon").
- **Change Dates**: Update `meta.relationshipStartDate` (`"2023-04-01"`) and `meta.birthdayDate` (`"2026-09-26T00:00:00+06:00"`).
- **Edit Love Letter**: Modify the `loveLetter.paragraphs` array to customize your heartfelt message.
- **Edit Memories**: Customize any memory title or caption under `memories.items`.

---

## 🎵 Where to Add Custom Music

1. Place your MP3 or WAV audio track into:
   ```
   public/music/
   ```
   (e.g., `public/music/our-song.mp3`)
2. In `src/data/loveStory.ts`, update:
   ```typescript
   music: {
     enabled: true,
     title: "Our Song",
     artist: "Artist Name",
     src: "/music/our-song.mp3",
   }
   ```
3. To disable music completely, set `enabled: false`.

---

## 🏗️ Production Build

To verify that the production build compiles with zero errors:
```bash
npm run build
```
To run the production server locally:
```bash
npm run start
```

---

## 🌐 Deploying to Vercel (Recommended)

Deploying to Vercel takes less than 2 minutes and provides a free, fast HTTPS URL you can send directly to Anu.

### Option A: Via GitHub (Continuous Deployment)

1. **Initialize Git & Commit** (already done in this project):
   ```bash
   git add .
   git commit -m "feat: complete romantic birthday surprise website for Anu"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `for-anu` or `anu-birthday`).
   - Leave it Private or Public as you prefer.
   - Click **Create repository**.

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/for-anu.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with GitHub.
   - Click **"Add New Project"** → select your `for-anu` repository.
   - Keep all default Next.js settings.
   - Click **Deploy**.
   - In ~45 seconds, Vercel will give you a public URL like `https://for-anu.vercel.app`!

### Option B: Deploying Directly via Vercel CLI

If you have Vercel CLI installed:
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to link and deploy immediately.

---

## 🔄 How to Update the Website Later

Whenever you want to update photos or text after deployment:
1. Make your edits in `public/images/` or `src/data/loveStory.ts`.
2. Commit and push:
   ```bash
   git add .
   git commit -m "update: added new anniversary photos"
   git push
   ```
3. Vercel will automatically re-build and deploy your changes live within seconds!

---

*Handcrafted with love by Shawon for Anu 🤍*
