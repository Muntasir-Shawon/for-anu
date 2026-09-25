/**
 * Safely resolves asset paths (images, audio, icons) for both local development
 * and GitHub Pages static hosting under the repository subpath (/for-anu).
 */
export function getAssetPath(src: string): string {
  if (!src) return "";

  // If already absolute URL or data URI, return as-is
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  // Determine base path: environment variable first, then runtime window location
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (typeof window !== "undefined") {
    if (window.location.hostname.includes("github.io") || window.location.pathname.startsWith("/for-anu")) {
      basePath = "/for-anu";
    }
  }

  const cleanPath = src.startsWith("/") ? src : `/${src}`;

  // If already prefixed with basePath, avoid double prefixing
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
