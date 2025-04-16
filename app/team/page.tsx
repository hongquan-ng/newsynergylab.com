import { teamMembers } from "@/data/team"
import TeamMemberCard from "@/components/team-member-card"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "Our Team | New SynergyLab",
  description:
    "Meet our team of AI specialists, developers, and data scientists who are passionate about delivering cutting-edge AI solutions.",
  keywords: ["AI Team", "AI Specialists", "Data Scientists", "Machine Learning Engineers"],
  canonical: "/team",
})

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-[#FF5500]">Team</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet our collective of passionate AI specialists, developers, and data scientists ready to tackle your most
            complex challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
