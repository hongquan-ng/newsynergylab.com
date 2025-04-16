"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxElement({ children, speed = 0.1, className = "" }: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrollY = window.scrollY
      const yPos = scrollY * speed
      elementRef.current.style.transform = `translateY(${yPos}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
