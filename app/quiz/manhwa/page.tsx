"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { manhwaQuestions } from "@/data/manhwaQuestions"
import { manhwaCharacters } from "@/data/manhwaCharacters"

export default function ManhwaQuizPage() {
  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const router = useRouter()

  function answer(optionScores: Record<string, number | undefined>) {
    setScores(prev => {
      const updated = { ...prev }

      for (const key in optionScores) {
        const value = optionScores[key]
        if (value) {
          updated[key] = (updated[key] || 0) + value
        }
      }

      // ✅ FINAL QUESTION → calculate result HERE (with updated scores)
      if (index + 1 === manhwaQuestions.length) {
        const topId = Object.entries(updated)
          .sort((a, b) => b[1] - a[1])[0]?.[0]

        const result =
          manhwaCharacters.find(c => c.id === topId) ||
          manhwaCharacters[Math.floor(Math.random() * manhwaCharacters.length)]

        router.push(`/quiz/result?type=manhwa&id=${result.id}`)
      }

      return updated
    })

    if (index + 1 < manhwaQuestions.length) {
      setIndex(index + 1)
    }
  }

  const q = manhwaQuestions[index]

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Question {index + 1} / {manhwaQuestions.length}
        </h2>

        <p className="text-xl text-center">{q.question}</p>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(opt.scores)}
              className="w-full rounded-xl bg-white p-4 shadow hover:bg-pink-100 transition"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
