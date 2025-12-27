"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useRef } from "react"
import { toPng } from "html-to-image"

import { blCharacters } from "@/data/blCharacters"
import { manhwaCharacters } from "@/data/manhwaCharacters"
import { kpopCharacters } from "@/data/kpopCharacters"

export default function ResultPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const id = searchParams.get("id")

  const cardRef = useRef<HTMLDivElement>(null)

  let list: any[] = blCharacters
  if (type === "manhwa") list = manhwaCharacters
  if (type === "kpop") list = kpopCharacters

  const result =
    list.find(c => c.id === id) ||
    list[Math.floor(Math.random() * list.length)]

  if (!result) {
    return <p className="text-center mt-20">Result not found 😢</p>
  }

  // 📸 DOWNLOAD IMAGE
  async function downloadImage() {
    if (!cardRef.current) return
    const dataUrl = await toPng(cardRef.current)
    const link = document.createElement("a")
    link.href = dataUrl
    link.download = "my-quiz-result.png"
    link.click()
  }

  // 📤 SHARE IMAGE (mobile only)
  async function shareImage() {
    if (!navigator.share || !cardRef.current) {
      alert("Image sharing works on mobile browsers")
      return
    }

    const dataUrl = await toPng(cardRef.current)
    const blob = await (await fetch(dataUrl)).blob()
    const file = new File([blob], "result.png", { type: "image/png" })

    await navigator.share({
      files: [file],
      title: "My Quiz Result 💕",
      text: "I found my boyfriend 😍 Try yours!"
    })
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-pink-50">
      <div className="max-w-xl w-full space-y-6">

        {/* 🖼 THIS CARD BECOMES THE IMAGE */}
        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 shadow-lg text-center space-y-4"
        >
          <Image
            src={result.image}
            alt={result.name}
            width={320}
            height={320}
            className="mx-auto rounded-2xl"
          />

          <h1 className="text-3xl font-bold">{result.name}</h1>

          {type !== "kpop" && (
            <>
              <p className="italic text-gray-500">{result.source}</p>
              <p>{result.description}</p>
              <p className="font-semibold text-pink-600">
                {result.message}
              </p>
            </>
          )}

          {type === "kpop" && (
            <>
              <p className="italic text-gray-500">{result.group}</p>
              <p className="font-semibold text-pink-600">
                Your K-pop boyfriend energy 💖
              </p>
            </>
          )}

          <p className="text-xs text-gray-400 mt-4">
            findyourboyfriend.app 💕
          </p>
        </div>

        {/* 🔘 IMAGE BUTTONS */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={downloadImage}
            className="rounded-xl bg-pink-500 py-3 text-white font-semibold"
          >
            Download Image
          </button>

          <button
            onClick={shareImage}
            className="rounded-xl bg-green-500 py-3 text-white font-semibold"
          >
            Share Image
          </button>
        </div>

        {/* NAV */}
        <div className="flex gap-3 justify-center">
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
