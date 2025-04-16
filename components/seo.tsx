import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article"
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
  }
}
