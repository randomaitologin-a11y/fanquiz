"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { blQuestions } from "@/data/blQuestions"
import { blCharacters } from "@/data/blCharacters"

export default function BLQuizPage() {
  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const router = useRouter()

  function answer(optionScores: Record<string, number>) {
    setScores(prev => {
      const updated = { ...prev }

      for (const key in optionScores) {
        updated[key] = (updated[key] || 0) + optionScores[key]
      }

      // LAST QUESTION → CALCULATE RESULT HERE
      if (index + 1 === blQuestions.length) {
        const sorted = Object.entries(updated).sort((a, b) => b[1] - a[1])
        const highestScore = sorted[0][1]

        const topCandidates = sorted
          .filter(([, score]) => highestScore - score <= 1)
          .map(([id]) => id)

        const chosenId =
          topCandidates[Math.floor(Math.random() * topCandidates.length)]

        const result =
          blCharacters.find(c => c.id === chosenId) ||
          blCharacters[Math.floor(Math.random() * blCharacters.length)]

        router.push(`/quiz/result?type=bl&id=${result.id}`)
      }

      return updated
    })

    if (index + 1 < blQuestions.length) {
      setIndex(prev => prev + 1)
    }
  }

  const q = blQuestions[index]

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Question {index + 1} / {blQuestions.length}
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
