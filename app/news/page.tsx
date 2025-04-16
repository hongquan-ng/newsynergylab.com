import { blogPosts } from "@/data/blog-posts"
import BlogPostCard from "@/components/blog-post-card"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "News & Insights | New SynergyLab",
  description:
    "Stay updated with the latest news, insights, and trends in AI, machine learning, and data science from our team of experts.",
  keywords: ["AI News", "Machine Learning Insights", "Data Science Trends", "AI Blog"],
  canonical: "/news",
})

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            News & <span className="text-[#FF5500]">Insights</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Expert perspectives on AI trends, technologies, and applications from our team of specialists
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} featured={index === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}
