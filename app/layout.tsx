import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Find Your Boyfriend 💕",
  description:
    "Take fun quizzes and discover your BL, Manhwa, or K-pop boyfriend 💖",
  openGraph: {
    title: "Find Your Boyfriend 💕",
    description:
      "Answer fun questions and get a shareable boyfriend result!",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 GOOGLE ADSENSE (ADD AFTER APPROVAL) */}
        {/*
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
        */}

        {/* 🔥 META FOR INSTAGRAM / WHATSAPP */}
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
      </head>

      <body className="bg-pink-50 text-gray-800">
        {children}
      </body>
    </html>
  )
}
