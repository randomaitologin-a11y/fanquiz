"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { manhwaQuestions } from "@/data/manhwaQuestions"
import { manhwaCharacters } from "@/data/manhwaCharacters"

export default function ManhwaQuizPage() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})

  const question = manhwaQuestions[index]

  function handleAnswer(optionScores: Record<string, number | undefined>) {
    const updatedScores = { ...scores }

    for (const key in optionScores) {
      const value = optionScores[key]
      if (value !== undefined) {
        updatedScores[key] = (updatedScores[key] || 0) + value
      }
    }

    setScores(updatedScores)

    // ✅ LAST QUESTION → GO TO RESULT
    if (index + 1 === manhwaQuestions.length) {
      const sorted = Object.entries(updatedScores).sort((a, b) => b[1] - a[1])
      const topScore = sorted[0][1]

      const topCandidates = sorted
        .filter(([, score]) => topScore - score <= 1)
        .map(([id]) => id)

      const chosenId =
        topCandidates[Math.floor(Math.random() * topCandidates.length)]

      const result =
        manhwaCharacters.find(c => c.id === chosenId) ??
        manhwaCharacters[Math.floor(Math.random() * manhwaCharacters.length)]

      router.push(`/result?type=manhwa&id=${result.id}`)
      return
    }

    // ✅ NEXT QUESTION
    setIndex(prev => prev + 1)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Question {index + 1} / {manhwaQuestions.length}
        </h2>

        <p className="text-xl text-center">{question.question}</p>

        <div className="space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.scores)}
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
