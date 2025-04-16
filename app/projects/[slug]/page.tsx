import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { getProjectBySlug, projects } from "@/data/projects"
import { generateMetadata as generateSeoMetadata } from "@/components/seo"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | New SynergyLab",
      description: "The requested project could not be found.",
    }
  }

  return generateSeoMetadata({
    title: `${project.title} | New SynergyLab`,
    description: project.description,
    keywords: ["AI Project", "Case Study", ...project.technologies],
    canonical: `/projects/${project.slug}`,
    ogType: "article",
  })
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <Button variant="ghost" className="text-gray-400 hover:text-white mb-8" asChild>
          <Link href="/projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="mb-4 text-sm text-[#FF5500]">Client: {project.client}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-[#FF5500]/10 text-[#FF5500] px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/20 to-transparent rounded-lg transform rotate-3"></div>
            <div className="relative z-10 bg-[#000c28] p-6 rounded-lg border border-[#FF5500]/30">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <p className="text-gray-300 mb-8">{project.fullDescription}</p>

          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
          <ul className="space-y-3">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#FF5500] mr-2">•</span>
                <span className="text-gray-300">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.testimonial && (
          <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-8 rounded-lg border border-[#FF5500]/20 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="text-[#FF5500] text-6xl mb-4">"</div>
              <p className="text-xl italic mb-6">{project.testimonial.quote}</p>
              <div>
                <p className="font-bold">{project.testimonial.author}</p>
                <p className="text-gray-400">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start your project?</h2>
          <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
