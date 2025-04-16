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
  title: {
    default: "New SynergyLab - AI Solutions for Business",
    template: "%s | New SynergyLab",
  },
  description:
    "A consortium of highly experienced AI specialists delivering sophisticated artificial intelligence solutions with measurable business impact.",
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