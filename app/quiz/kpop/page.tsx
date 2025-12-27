"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { kpopQuestions } from "@/data/kpopQuestions"

export default function KpopQuizPage() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})

  const question = kpopQuestions[index]

  function handleAnswer(scoreMap: Partial<Record<string, number>>) {
    const updatedScores = { ...scores }

    for (const id in scoreMap) {
      const value = scoreMap[id]
      if (value !== undefined) {
        updatedScores[id] = (updatedScores[id] || 0) + value
      }
    }

    setScores(updatedScores)

    // ✅ LAST QUESTION → CALCULATE RESULT
    if (index + 1 === kpopQuestions.length) {
      const sorted = Object.entries(updatedScores).sort((a, b) => b[1] - a[1])

      // safety fallback
      if (sorted.length === 0) {
        router.push("/result?type=kpop&id=random")
        return
      }

      const topScore = sorted[0][1]

      const topCandidates = sorted
        .filter(([, score]) => topScore - score <= 1)
        .map(([id]) => id)

      const winner =
        topCandidates[Math.floor(Math.random() * topCandidates.length)]

      router.push(`/result?type=kpop&id=${winner}`)
      return
    }

    // ✅ NEXT QUESTION
    setIndex(prev => prev + 1)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 shadow-lg">
        <p className="text-sm text-gray-400 mb-2">
          Question {index + 1} / {kpopQuestions.length}
        </p>

        <h1 className="text-xl font-semibold mb-6">
          {question.question}
        </h1>

        <div className="space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.scores)}
              className="w-full px-4 py-3 rounded-xl bg-pink-100 hover:bg-pink-200 transition text-left"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
