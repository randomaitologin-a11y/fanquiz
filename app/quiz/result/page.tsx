"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { blCharacters } from "@/data/blCharacters"
import { manhwaCharacters } from "@/data/manhwaCharacters"
import { kpopCharacters } from "@/data/kpopCharacters"

export default function ResultPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const id = searchParams.get("id")

  // pick correct list
  let list: any[] = blCharacters
  if (type === "manhwa") list = manhwaCharacters
  if (type === "kpop") list = kpopCharacters

  const result =
    list.find(c => c.id === id) ||
    list[Math.floor(Math.random() * list.length)]

  if (!result) {
    return <p className="text-center mt-20">Result not found 😢</p>
  }

  const shareText = `💖 My Quiz Result 💖
I got ${result.name}!

Try the quiz 👉 ${typeof window !== "undefined" ? window.location.origin : ""}`

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

        {/* 🔹 BL / Manhwa */}
        {type !== "kpop" && (
          <>
            <p className="italic text-gray-500">{result.source}</p>
            <p>{result.description}</p>
            <p className="font-semibold text-pink-600">
              {result.message}
            </p>
          </>
        )}

        {/* 🔹 K-POP */}
        {type === "kpop" && (
          <>
            <p className="italic text-gray-500">{result.group}</p>
            <p className="font-semibold text-pink-600">
              Your K-pop boyfriend energy 💖
            </p>
          </>
        )}

        {/* SHARE */}
        <div className="mt-8 space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            className="block w-full rounded-xl bg-green-500 py-3 text-white font-semibold"
          >
            Share on WhatsApp
          </a>

          <button
            onClick={async () => {
              await navigator.clipboard.writeText(shareText)
              alert("Copied! Paste on Instagram / Snapchat 💕")
            }}
            className="w-full rounded-xl bg-pink-500 py-3 text-white font-semibold"
          >
            Share to Instagram / Snapchat
          </button>
        </div>

        {/* NAV */}
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link href={`/quiz/${type}`} className="px-4 py-2 bg-pink-100 rounded-xl">
            Retry Quiz
          </Link>

          <Link href="/" className="px-4 py-2 bg-gray-100 rounded-xl">
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}
