import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Linkedin, Github, Twitter, Globe, Mail, ArrowRight } from "lucide-react"
import { getTeamMemberBySlug, teamMembers } from "@/data/team"
import { generateMetadata as generateSeoMetadata } from "@/components/seo"
import { getFeaturedProjects } from "@/data/projects"
import ProjectCard from "@/components/project-card"

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

interface TeamMemberPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const member = getTeamMemberBySlug(params.slug)

  if (!member) {
    return {
      title: "Team Member Not Found | New SynergyLab",
      description: "The requested team member could not be found.",
    }
  }

  return generateSeoMetadata({
    title: `${member.name} - ${member.role} | New SynergyLab`,
    description: `${member.description}. Learn more about ${member.name}'s expertise and experience.`,
    keywords: ["AI Specialist", member.role, ...member.skills],
    canonical: `/team/${member.slug}`,
    ogType: "profile",
  })
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getTeamMemberBySlug(params.slug)
  const featuredProjects = getFeaturedProjects().slice(0, 2) // Get 2 featured projects

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF5500] rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#FF5500] rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Button variant="ghost" className="text-gray-400 hover:text-white mb-8 group" asChild>
          <Link href="/team">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Team
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-8 rounded-xl border border-[#FF5500]/20 mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/5 rounded-full filter blur-3xl"></div>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#FF5500]/30 transform transition-transform hover:scale-[1.02] hover:border-[#FF5500]/50">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex gap-3 justify-center">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF5500]/20 hover:bg-[#FF5500]/40 text-white p-2 rounded-full transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF5500]/20 hover:bg-[#FF5500]/40 text-white p-2 rounded-full transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF5500]/20 hover:bg-[#FF5500]/40 text-white p-2 rounded-full transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.socialLinks.website && (
                      <a
                        href={member.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF5500]/20 hover:bg-[#FF5500]/40 text-white p-2 rounded-full transition-colors"
                        aria-label={`${member.name}'s personal website`}
                      >
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="inline-block bg-[#FF5500]/10 text-[#FF5500] px-3 py-1 rounded-full text-sm mb-4">
                {member.role}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{member.name}</h1>
              <p className="text-xl text-gray-300 mb-8">{member.bio}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {member.skills.map((skill, index) => (
                  <span key={index} className="bg-[#000814] text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none" asChild>
                  <Link href="/contact">
                    Contact {member.name.split(" ")[0]}
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10" asChild>
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left Column */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-6 rounded-lg border border-[#FF5500]/20 mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-[#FF5500]/20 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FF5500]"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                </span>
                Education
              </h2>
              <ul className="space-y-4">
                {member.education.map((edu, index) => (
                  <li key={index} className="text-gray-300 pl-4 border-l border-[#FF5500]/30">
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-6 rounded-lg border border-[#FF5500]/20">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-[#FF5500]/20 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FF5500]"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </span>
                Experience
              </h2>
              <ul className="space-y-4">
                {member.experience.map((exp, index) => (
                  <li key={index} className="text-gray-300 pl-4 border-l border-[#FF5500]/30">
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-6 rounded-lg border border-[#FF5500]/20 mb-8">
              <h2 className="text-2xl font-bold mb-6">Expertise & Specialization</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FF5500]">Technical Proficiency</h3>
                  <p className="text-gray-300">
                    {member.name} has deep expertise in {member.skills.slice(0, 3).join(", ")}, with a focus on
                    developing scalable and efficient solutions for complex problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FF5500]">Industry Knowledge</h3>
                  <p className="text-gray-300">
                    With experience across multiple industries, {member.name.split(" ")[0]} brings valuable domain
                    knowledge to every project, ensuring solutions are not just technically sound but also
                    business-relevant.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FF5500]">Collaborative Approach</h3>
                  <p className="text-gray-300">
                    {member.name.split(" ")[0]} excels at working in cross-functional teams, communicating complex
                    technical concepts to stakeholders at all levels, and ensuring alignment between technical
                    implementation and business objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10" asChild>
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#000c28] to-[#000510] p-8 rounded-xl border border-[#FF5500]/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF5500]/10 rounded-full filter blur-3xl"></div>

          <h2 className="text-2xl font-bold mb-4 relative z-10">
            Interested in working with {member.name.split(" ")[0]}?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10">
            Our team of AI specialists is ready to help you implement cutting-edge solutions that drive real results.
            Get in touch to discuss your project needs.
          </p>
          <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none px-8 py-6 relative z-10" asChild>
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
