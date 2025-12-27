import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 px-6">
      <h1 className="text-5xl font-bold text-pink-600 text-center">
        Find Your Boyfriend 💕
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-xl">
        Answer a few questions and discover which character matches your heart.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* BL */}
        <Link href="/quiz/bl" className="card">
          <h2 className="text-2xl font-semibold mb-2">BL Boyfriend</h2>
          <p>Find your BL soulmate 💗</p>
        </Link>

        {/* Manhwa */}
        <Link href="/quiz/manhwa" className="card">
          <h2 className="text-2xl font-semibold mb-2">Manhwa Boyfriend</h2>
          <p>Dark, soft, or dangerous 🖤</p>
        </Link>

        {/* K-POP */}
        <Link href="/quiz/kpop" className="card">
          <h2 className="text-2xl font-semibold mb-2">K-Pop Boyfriend</h2>
          <p>Your idol boyfriend awaits 🎤💖</p>
        </Link>
      </div>
    </main>
  )
}
