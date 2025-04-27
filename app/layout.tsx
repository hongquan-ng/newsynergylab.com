import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://newsynergylab.com'),
  openGraph: {
    title: 'New Synergy Lab - Native-AI Solutions for Business',
    description: 'This is my awesome app',
    images: ['/og-image.png'],
  },
  title: {
    default: "New Synergy Lab - Native-AI Solutions for Business",
    template: "%s | New Synergy Lab",
  },
  keywords: ["AI", "Machine Learning", "Data Science", "Software Engineering", "AI Solutions", "Platform Engineering", "Data Engineering", "AI Agents", "AIOps", "AI Native", "AI Native Solutions"],
  authors: [{ name: "New Synergy Lab" }],
  creator: "New Synergy Lab",
  publisher: "New Synergy Lab",
  applicationName: "New Synergy Lab",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    notranslate: false
  },
  description: "We’re a small but mighty of engineers and builders who truly believe in the mission of transforming businesses with AI-Native solution. We’re not just about the latest trends or buzzwords; we’re about crafting solutions that solve real-world problems. No hype—just clean code, clean architecture, sharp thinking, and AI that works where it matters.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Usercentrics CMP scripts - only loaded in production environment */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js" />
            <script
              id="usercentrics-cmp"
              src="https://web.cmp.usercentrics.eu/ui/loader.js"
              data-settings-id="S37FO08IgNKBtd"
              async
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
            <Header />
            <main className="pt-24">{children}</main>
            <Footer />
            {/* Use built-in cookie consent in development/preview, Usercentrics in production */}
            {process.env.NODE_ENV !== "production" && <CookieConsent />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'