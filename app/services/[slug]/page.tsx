import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, CheckCircle, Zap } from "lucide-react"
import { getServiceBySlug, services } from "@/data/services"
import { getProjectBySlug } from "@/data/projects"
import { generateMetadata as generateSeoMetadata } from "@/components/seo"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found | New SynergyLab",
      description: "The requested service could not be found.",
    }
  }

  return generateSeoMetadata({
    title: `${service.title} | New SynergyLab`,
    description: service.shortDescription,
    keywords: ["AI Service", "Data Service", service.title],
    canonical: `/services/${service.slug}`,
  })
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const caseStudy = service.caseStudyId ? getProjectBySlug(service.caseStudyId) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <Button variant="ghost" className="text-gray-400 hover:text-white mb-8" asChild>
          <Link href="/services">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#FF5500]/10 p-4 rounded-lg">
              <Zap className="h-10 w-10 text-[#FF5500]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">{service.fullDescription}</p>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#000c28] to-[#000510] p-6 rounded-lg border border-[#FF5500]/20"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FF5500] mt-1 flex-shrink-0" />
                  <p className="text-gray-200">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="border-l-2 border-[#FF5500]/50 pl-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        {caseStudy && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Case Study</h2>
            <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-8 rounded-lg border border-[#FF5500]/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-[#FF5500] mb-4">Client: {caseStudy.client}</p>
                  <p className="text-gray-300 mb-6">{caseStudy.fullDescription}</p>
                  <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white" asChild>
                    <Link href={`/projects/${caseStudy.slug}`}>View Full Case Study</Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/20 to-transparent rounded-lg transform rotate-3"></div>
                  <div className="relative z-10">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#000c28] to-[#000510] p-8 md:p-12 rounded-xl border border-[#FF5500]/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our {service.title} service can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none px-8 py-6" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 px-8 py-6"
              asChild
            >
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
