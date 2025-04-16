import { projects } from "@/data/projects"
import ProjectCard from "@/components/project-card"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "Our Projects | New SynergyLab",
  description:
    "Explore our portfolio of AI and machine learning projects that have delivered measurable business impact for our clients.",
  keywords: ["AI Projects", "Machine Learning Portfolio", "Case Studies", "AI Solutions"],
  canonical: "/projects",
})

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-[#FF5500]">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of AI and machine learning projects that have delivered measurable business impact for
            our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
