"use client"

import { useEffect, useRef } from "react"
import type { Counter } from "@/data/counters"
import * as anime from 'animejs'

interface CountersSectionProps {
  counters: Counter[]
}

export default function CountersSection({ counters }: CountersSectionProps) {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stats counter animation
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll(".stat-number").forEach((el) => {
              const target = Number.parseInt(el.getAttribute("data-target") || "0")
              anime({
                targets: el,
                innerHTML: [0, target],
                round: 1,
                easing: "easeInOutExpo",
                duration: 2000,
                update: (anim) => {
                  // @ts-ignore
                  el.innerHTML = el.innerHTML + "+"
                },
              })
            })
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      statsObserver.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section ref={statsRef} className="py-16 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#FF5500]/5"></div>
      <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[#FF5500]/10 transform rotate-12"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5500] mb-2">
                <span className="stat-number" data-target={stat.number}>
                  0
                </span>
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
