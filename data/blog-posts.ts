export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	author: string;
	authorRole: string;
	authorImage: string;
	date: string;
	readTime: number;
	image: string;
	tags: string[];
	featured: boolean;
}

export const blogPosts: BlogPost[] = [];

export function getFeaturedBlogPosts(): BlogPost[] {
	return blogPosts.filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}
