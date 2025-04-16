"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { TeamMember } from "@/data/team"

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="team-member bg-gradient-to-br from-[#000c28] to-[#000510] rounded-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/team/${member.slug}`} className="block">
        <div className="h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-[#FF5500] text-white text-sm px-3 py-1 rounded-full">View Profile</span>
          </motion.div>
        </div>
        <div className="p-6 border-t border-[#FF5500]/30">
          <h3 className="text-xl font-bold group-hover:text-[#FF5500] transition-colors">{member.name}</h3>
          <p className="text-[#FF5500] mb-2">{member.role}</p>
          <p className="text-gray-300 text-sm">{member.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
