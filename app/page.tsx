import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"
import CountersSection from "@/components/counters-section"
import ProjectCard from "@/components/project-card"
import TeamMemberCard from "@/components/team-member-card"
import { counters } from "@/data/counters"
import { getFeaturedProjects } from "@/data/projects"
import { getFeaturedTeamMembers } from "@/data/team"
import { getAllServices } from "@/data/services"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "New SynergyLab - AI Solutions for Business",
  description:
    "A consortium of highly experienced Software Engineers, Platform Engineers, Data Engineers, and AI/ML Scientists delivering sophisticated artificial intelligence solutions with measurable business impact.",
  keywords: ["AI", "Machine Learning", "Data Science", "Software Engineering", "AI Solutions"],
  ogImage: "/og-image.jpg",
})

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const featuredTeamMembers = getFeaturedTeamMembers()
  const services = getAllServices()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF5500] rounded-full filter blur-[100px] opacity-10 floating-element"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#FF5500] rounded-full filter blur-[120px] opacity-5 floating-element"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-[#FF5500]/20 rounded-full floating-element"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 border border-[#FF5500]/10 rounded-full floating-element"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#FF5500]/5 rotate-45 floating-element"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              New <span className="text-[#FF5500]">SynergyLab</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              <span className="text-[#FF5500]">Go AI, Go AI Native</span> - A consortium of highly experienced Software
              Engineers, Platform Engineers, Data Engineers, and AI/ML Scientists delivering sophisticated artificial
              intelligence solutions with measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none text-lg px-8 py-6">
                Hire Our Team
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 text-lg px-8 py-6"
                asChild
              >
                <Link href="/projects">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/20 to-transparent rounded-lg transform rotate-6"></div>
            <div className="relative z-10 bg-[#000c28] p-8 rounded-lg border border-[#FF5500]/30">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="AI Freelancers Team"
                width={500}
                height={400}
                className="rounded-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#FF5500] text-white p-4 rounded-md">
                <span className="font-bold">AI Experts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#000814] to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Our <span className="text-[#FF5500]">Services</span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                We offer specialized AI expertise across multiple domains to help your business thrive in the digital
                age
              </p>
            </div>
            <Button
              variant="outline"
              className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 mt-4 md:mt-0"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="service-card bg-gradient-to-br from-[#000c28] to-[#000510] p-8 rounded-lg border border-[#FF5500]/20 hover:border-[#FF5500]/50 transition-all group"
              >
                <div className="bg-[#000814] p-4 rounded-lg inline-block mb-4 group-hover:bg-[#FF5500]/10 transition-colors">
                  <Zap className="h-8 w-8 text-[#FF5500]" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF5500] transition-colors">{service.title}</h3>
                <p className="text-gray-300">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CountersSection counters={counters} />

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Featured <span className="text-[#FF5500]">Projects</span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Explore some of our recent projects and see how we've helped businesses transform with AI
              </p>
            </div>
            <Button
              variant="outline"
              className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 mt-4 md:mt-0"
              asChild
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Meet Our <span className="text-[#FF5500]">Team</span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                A collective of passionate AI specialists, developers, and data scientists ready to tackle your
                challenges
              </p>
            </div>
            <Button
              variant="outline"
              className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 mt-4 md:mt-0"
              asChild
            >
              <Link href="/team">View All Team Members</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#000c28] to-[#000510] p-12 rounded-2xl border border-[#FF5500]/30 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF5500]/10 rounded-full filter blur-3xl"></div>

            <h2 className="text-4xl font-bold mb-6 relative z-10">
              Ready to <span className="text-[#FF5500]">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Our team of AI specialists is ready to help you implement cutting-edge solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none text-lg px-8 py-6" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                variant="outline"
                className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 text-lg px-8 py-6"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
