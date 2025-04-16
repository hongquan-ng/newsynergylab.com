import Link from "next/link"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllServices } from "@/data/services"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "Our Services | New SynergyLab",
  description:
    "Explore our comprehensive range of AI and data services designed to transform your business and drive innovation.",
  keywords: ["AI Services", "Data Solutions", "AI Development", "Data Analysis", "AI Integration"],
  canonical: "/services",
})

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-[#FF5500]">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer specialized AI and data expertise across multiple domains to help your business thrive in the
            digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-gradient-to-br from-[#000c28] to-[#000510] p-8 rounded-lg border border-[#FF5500]/20 hover:border-[#FF5500]/50 transition-all group"
            >
              <div className="bg-[#000814] p-4 rounded-lg inline-block mb-4 group-hover:bg-[#FF5500]/10 transition-colors">
                <Zap className="h-8 w-8 text-[#FF5500]" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF5500] transition-colors">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.shortDescription}</p>
              <span className="text-[#FF5500] font-medium inline-flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-[#000c28] to-[#000510] p-8 md:p-12 rounded-xl border border-[#FF5500]/20 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose <span className="text-[#FF5500]">New SynergyLab</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our specialists bring years of experience from top tech companies and research institutions.",
              },
              {
                title: "Tailored Solutions",
                description: "We create custom solutions designed specifically for your unique business challenges.",
              },
              {
                title: "Cutting-Edge Technology",
                description: "We leverage the latest advancements in AI and data science to deliver superior results.",
              },
              {
                title: "Measurable Results",
                description: "Our focus is on delivering quantifiable business impact and ROI for every project.",
              },
              {
                title: "Collaborative Approach",
                description:
                  "We work closely with your team to ensure solutions align perfectly with your goals and processes.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Our relationship doesn't end at deployment—we provide continued support and optimization.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-[#FF5500]">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white border-none px-8 py-6 text-lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
