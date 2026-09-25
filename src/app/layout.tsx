import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { loveStory } from "@/data/loveStory";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://for-anu.vercel.app"),
  title: loveStory.meta.siteTitle,
  description: loveStory.meta.siteDescription,
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: loveStory.meta.siteTitle,
    description: loveStory.meta.siteDescription,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${loveStory.meta.recipient}'s Birthday`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: loveStory.meta.siteTitle,
    description: loveStory.meta.siteDescription,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} bg-[#050505] text-[#FAF7F2]`}
    >
      <body className="min-h-screen bg-[#050505] text-[#FAF7F2] font-sans antialiased overflow-x-hidden selection:bg-[#E5C378]/20 selection:text-[#FAF7F2]">
        {/* Atmospheric Film Grain Overlay */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
