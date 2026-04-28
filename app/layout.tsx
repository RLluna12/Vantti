import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "VANTTI — Cartas de Crédito Premium | Parceiro Itaú",
  description:
    "VANTTI é especialista em cartas de crédito para imóveis, veículos e investimentos. Solidez, sofisticação e a confiança de uma parceria financeira com o Itaú.",
  keywords: [
    "cartas de crédito",
    "consórcio premium",
    "imóveis",
    "veículos",
    "VANTTI",
    "Itaú",
    "carta de crédito imóvel",
    "carta de crédito automóvel",
  ],
  generator: "v0.dev",
  openGraph: {
    title: "VANTTI — Cartas de Crédito Premium",
    description:
      "Realize seus maiores objetivos com a solidez de uma carta de crédito VANTTI. Parceria financeira com o Itaú.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
