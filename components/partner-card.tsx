import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import type { Partner } from "@/data/partners"

interface PartnerCardProps {
  partner: Partner
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#000c28] to-[#000510] rounded-lg overflow-hidden group hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <Image
          src={partner.image || "/placeholder.svg"}
          alt={partner.name}
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 border-t border-[#FF5500]/30">
        <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
        <Button variant="link" className="text-[#FF5500] p-0 hover:text-[#FF7733]" asChild>
          <Link href={`${partner.website}`} target='_blank' rel='noopener noreferrer'>
            More Details <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
