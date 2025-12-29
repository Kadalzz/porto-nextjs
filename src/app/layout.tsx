import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter, Space_Grotesk } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfolio | Richard Christian S",
  description: "Web Developer Portfolio - MBKM Candidate",
  openGraph: {
    title: "Portfolio | Richard Christian S",
    description: "Information Systems Student & Web Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Richard Christian S",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased flex flex-col min-h-screen transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
