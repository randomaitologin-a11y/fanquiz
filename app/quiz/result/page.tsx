"use client"

import Image from "next/image"
import Link from "next/link"
import { blCharacters } from "@/data/blCharacters"
import { manhwaCharacters } from "@/data/manhwaCharacters"

type SearchParams = {
  type?: string
  id?: string
}

export default function ResultPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const type = searchParams?.type
  const id = searchParams?.id

  const list = type === "manhwa" ? manhwaCharacters : blCharacters
  const result = list.find(c => c.id === id)

  if (!result) {
    return (
      <p className="text-center mt-20 text-xl">
        Result not found 😢
      </p>
    )
  }

  const shareText = `💖 My Quiz Result 💖
I got ${result.name}!

Try the quiz 👉 ${typeof window !== "undefined" ? window.location.origin : ""}`

  const handleUniversalShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Quiz Result",
        text: shareText,
        url: window.location.origin,
      })
    } else {
      await navigator.clipboard.writeText(shareText)
      alert("Copied! Share it anywhere 💕")
    }
  }

  const handleCopyShare = async () => {
    await navigator.clipboard.writeText(shareText)
    alert("Copied! Open Instagram or Snapchat and paste 💕")
  }

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-pink-50">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 shadow-lg text-center space-y-4">
        <Image
          src={result.image}
          alt={result.name}
          width={320}
          height={320}
          className="mx-auto rounded-2xl"
        />

        <h1 className="text-3xl font-bold">{result.name}</h1>
        <p className="italic text-gray-500">{result.source}</p>

        <p>{result.description}</p>
        <p className="font-semibold text-pink-600">{result.message}</p>

        {/* 🔥 SHARE SECTION */}
        <div className="mt-8 space-y-3">
          <button
            onClick={handleUniversalShare}
            className="w-full rounded-xl bg-pink-500 py-3 text-white font-semibold hover:bg-pink-600 transition"
          >
            Share my result
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            className="block w-full rounded-xl bg-green-500 py-3 text-white font-semibold hover:bg-green-600 transition"
          >
            Share on WhatsApp
          </a>

          <button
            onClick={handleCopyShare}
            className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Share to Instagram / Snapchat
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link
            href={`/quiz/${type}`}
            className="px-4 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 transition"
          >
            Retry Quiz
          </Link>

          <Link
            href={type === "bl" ? "/quiz/manhwa" : "/quiz/bl"}
            className="px-4 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 transition"
          >
            Try Other Quiz
          </Link>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}
