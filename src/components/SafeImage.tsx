"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { getAssetPath } from "@/utils/assetPath";

export default function SafeImage({ src, alt, ...props }: ImageProps) {
  const initialSrc = typeof src === "string" ? getAssetPath(src) : src;
  const [imgSrc, setImgSrc] = useState<string | typeof src>(initialSrc);

  useEffect(() => {
    if (typeof src === "string") {
      setImgSrc(getAssetPath(src));
    } else {
      setImgSrc(src);
    }
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        // Automatic fallback if direct relative path failed on GitHub Pages
        if (typeof imgSrc === "string") {
          const clean = imgSrc.startsWith("/") ? imgSrc : `/${imgSrc}`;
          if (!clean.startsWith("/for-anu")) {
            setImgSrc(`/for-anu${clean}`);
          }
        }
      }}
    />
  );
}
