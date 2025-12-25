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

        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link
            href={`/quiz/${type}`}
            className="px-4 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 transition"
          >
            Not sure? Retry
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
