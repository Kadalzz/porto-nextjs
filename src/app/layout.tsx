import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Playfair_Display } from "next/font/google"
import { ThemeProvider } from "next-themes"
import React, { ReactNode } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portofolio Richard Christian Sulistyo",
  description: "Portofolio pribadi Richard Christian Sulistyo",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/favicon.ico",
  },
  metadataBase: new URL("https://nextjs-portofolio-website.vercel.app"),
  openGraph: {
    title: "Portofolio Richard Christian Sulistyo",
    description: "Portofolio pribadi Richard Christian Sulistyo",
    url: "https://nextjs-portofolio-website.vercel.app",
    siteName: "Portofolio Richard Christian Sulistyo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portofolio Richard Christian Sulistyo",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.className} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Portofolio Richard Christian Sulistyo</title>
      </head>
      <body className="antialiased flex flex-col min-h-screen transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system">
         <div
  className="
    fixed inset-0 -z-10
    bg-[repeating-linear-gradient(45deg,_#d1d5db_0px,_#d1d5db_1px,_transparent_1px,_transparent_14px)]
    dark:bg-[repeating-linear-gradient(45deg,_#3f3f46_0px,_#3f3f46_1px,_transparent_1px,_transparent_14px)]
    [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_65%,transparent_100%)]
  "
/>

          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
