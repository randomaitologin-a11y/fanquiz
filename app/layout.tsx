import "./globals.css"

export const metadata = {
  title: "Boyfriend Quiz",
  description: "Find your BL or Manhwa boyfriend 💗"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
