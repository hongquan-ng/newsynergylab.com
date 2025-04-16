import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/data/blog-posts"
import { formatDate } from "@/lib/utils"

interface BlogPostCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-[#000c28] to-[#000510] rounded-lg overflow-hidden group hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] transition-all duration-300 ${featured ? "col-span-2 md:col-span-2" : ""}`}
    >
      <Link href={`/news/${post.slug}`} className="block">
        <div className={`${featured ? "h-64" : "h-48"} overflow-hidden`}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-[#FF5500]">{formatDate(post.date)}</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">{post.readTime} min read</span>
          </div>
          <h3 className={`${featured ? "text-2xl" : "text-xl"} font-bold mb-3`}>{post.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <Image
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-xs text-gray-400">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
