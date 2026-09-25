import urllib.request
import os
import time
from PIL import Image, ImageDraw, ImageFont

output_dir = r"C:\Users\Muntasir\.gemini\antigravity\scratch\for-anu\public\images"
os.makedirs(output_dir, exist_ok=True)

# Curated romantic, moody, aesthetic Unsplash photo IDs
photo_map = {
    "hero.jpg": "photo-1534528741775-53994a69daeb",         # Striking warm moody portrait
    "beginning-01.jpg": "photo-1516589178581-6cd7833ae3b2", # Candid couple conversation in soft light
    "beginning-02.jpg": "photo-1518199266791-5375a83190b7", # Tender hands held in warm tone
    "beginning-03.jpg": "photo-1492562080023-ab3db95bfbce", # Walking together at sunset
    "memory-01.jpg": "photo-1517256064527-09c73fc73e38",    # Intimate cafe laughing moment
    "memory-02.jpg": "photo-1509198397868-475647b2a1e5",    # Twilight stargazing aesthetic
    "memory-03.jpg": "photo-1494790108377-be9c29b29330",    # Radiant genuine smile
    "memory-04.jpg": "photo-1518895949257-7621c3c786d7",    # Rain on window, moody reflection
    "memory-05.jpg": "photo-1529156069898-49953e39b3ac",    # Warm cozy intimate laughter
    "gallery-01.jpg": "photo-1517841905240-472988babdf9",   # Golden hour sunlit portrait (tall)
    "gallery-02.jpg": "photo-1469854523086-cc02fe5d8800",   # Quiet road wanderlust
    "gallery-03.jpg": "photo-1492446845049-9c50ce313d00",   # Soft candid laughter
    "gallery-04.jpg": "photo-1474552226712-ac0f0961a954",   # Hands entwined at dusk (wide)
    "gallery-05.jpg": "photo-1524504388940-b1c1722653e1",   # Editorial classic portrait
    "gallery-06.jpg": "photo-1508214751196-bcfd4ca60f91",   # Evening city light portrait (tall)
    "gallery-07.jpg": "photo-1464822759023-fed622ff2c3b",   # Mountain horizon at dusk
    "gallery-08.jpg": "photo-1519501025264-65ba15a82390",   # Midnight city skyline glow (wide)
    "gallery-09.jpg": "photo-1515378791036-0648a3ef77b2",   # Cozy warm ambience
    "gallery-10.jpg": "photo-1531746020798-e6953c6e8e04",   # Timeless close-up portrait
    "reveal.jpg": "photo-1534528741775-53994a69daeb",       # Climax birthday portrait with golden bokeh
    "final.jpg": "photo-1509198397868-475647b2a1e5",        # Final starry night couple silhouette
}

def generate_fallback_image(filename, width=1200, height=800, text="Anu & Shawon"):
    img = Image.new("RGB", (width, height), color=(15, 12, 18))
    draw = ImageDraw.Draw(img)
    # Draw soft subtle dark gradient
    for y in range(height):
        ratio = y / height
        r = int(12 + ratio * 15)
        g = int(10 + ratio * 8)
        b = int(14 + ratio * 12)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    # Draw subtle gold border
    draw.rectangle([20, 20, width - 20, height - 20], outline=(70, 55, 30), width=2)
    # Save
    path = os.path.join(output_dir, filename)
    img.save(path, "JPEG", quality=90)
    print(f"Generated fallback: {filename}")

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

for filename, photo_id in photo_map.items():
    dest_path = os.path.join(output_dir, filename)
    url = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=1200&q=85"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            with open(dest_path, "wb") as f:
                f.write(data)
        print(f"Downloaded: {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed to download {filename}: {e}, generating fallback...")
        generate_fallback_image(filename)

# Also generate og-image.jpg
try:
    og_img = Image.new("RGB", (1200, 630), color=(10, 10, 10))
    og_draw = ImageDraw.Draw(og_img)
    og_draw.rectangle([30, 30, 1170, 600], outline=(212, 175, 55), width=2)
    og_path = os.path.join(output_dir, "og-image.jpg")
    og_img.save(og_path, "JPEG", quality=90)
    print("Created og-image.jpg")
except Exception as e:
    print(f"OG Image error: {e}")
