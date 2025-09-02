import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Globexlink — Trust‑Driven Cross‑Border B2B Trade",
  description:
    "Globexlink is a specialized pan‑continental B2B trade platform connecting Africa, Turkey, and Asia through secure, transparent commerce. We simplify cross‑border trade for SMEs with technology, cultural intelligence, and trusted partnerships.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} dark antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-heading: ${spaceGrotesk.style.fontFamily};
  --font-body: ${dmSans.style.fontFamily};
}
        `}</style>
      </head>
      <body className="font-body">{children}</body>
    </html>
  )
}
