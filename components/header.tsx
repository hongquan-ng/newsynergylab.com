"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000510]/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 h-10 flex justify-between items-center relative">
        <Link href="/" className="flex h-full items-center gap-1">
          <img className="relative z-10 flex items-center justify-center h-full font-bold" src="/logo-combined.svg" alt="New Synergy Lab" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="hover:text-[#FF5500] transition-colors">
            Services
          </Link>
          <Link href="/partners" className="hover:text-[#FF5500] transition-colors">
            Partners
          </Link>
          <Link href="/team" className="hover:text-[#FF5500] transition-colors">
            Our Team
          </Link>
          <Link href="/news" className="hover:text-[#FF5500] transition-colors">
            News
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#000510]/95 backdrop-blur-md shadow-lg py-4">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <Link
              href="/services"
              className="py-2 hover:text-[#FF5500] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/partners"
              className="py-2 hover:text-[#FF5500] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/team"
              className="py-2 hover:text-[#FF5500] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/news"
              className="py-2 hover:text-[#FF5500] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Button
              className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none w-full mt-2"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
