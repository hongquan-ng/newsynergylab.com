import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/data/blog-posts';
import { generateMetadata as generateSeoMetadata } from '@/components/seo';

export async function generateStaticParams() {
	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}

interface BlogPostPageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: BlogPostPageProps) {
	const post = getBlogPostBySlug(params.slug);

	if (!post) {
		return {
			title: 'Article Not Found | New SynergyLab',
			description: 'The requested article could not be found.',
		};
	}

	return generateSeoMetadata({
		title: `${post.title} | New SynergyLab`,
		description: post.excerpt,
		keywords: ['AI', 'Machine Learning', ...post.tags],
		canonical: `/news/${post.slug}`,
		ogType: 'article',
		ogImage: post.image,
	});
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = getBlogPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white'>
			<div className='container mx-auto px-4 py-20'>
				<Button
					variant='ghost'
					className='text-gray-400 hover:text-white mb-8'
					asChild
				>
					<Link href='/news'>
						<ChevronLeft className='mr-2 h-4 w-4' />
						Back to News
					</Link>
				</Button>

				<div className='max-w-4xl mx-auto'>
					<div className='mb-8'>
						<Image
							src={post.image || '/placeholder.svg'}
							alt={post.title}
							width={1200}
							height={600}
							className='w-full h-auto rounded-xl object-cover'
							priority
						/>
					</div>

					<div className='mb-8'>
						<h1 className='text-4xl md:text-5xl font-bold mb-6'>
							{post.title}
						</h1>

						<div className='flex flex-wrap items-center gap-6 text-gray-400 mb-8'>
							<div className='flex items-center'>
								<Calendar className='mr-2 h-4 w-4' />
								<span>{post.date}</span>
							</div>
							<div className='flex items-center'>
								<Clock className='mr-2 h-4 w-4' />
								<span>{post.readTime} min read</span>
							</div>
							<div className='flex items-center'>
								<User className='mr-2 h-4 w-4' />
								<span>{post.author}</span>
							</div>
						</div>

						<div className='flex flex-wrap gap-2 mb-8'>
							{post.tags.map((tag, index) => (
								<span
									key={index}
									className='bg-[#FF5500]/10 text-[#FF5500] px-3 py-1 rounded-full text-sm'
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					<div className='prose prose-invert prose-lg max-w-none'>
						{post.content.split('\n').map((paragraph, index) => {
							if (paragraph.startsWith('# ')) {
								return (
									<h1
										key={index}
										className='text-3xl font-bold mt-8 mb-4'
									>
										{paragraph.substring(2)}
									</h1>
								);
							} else if (paragraph.startsWith('## ')) {
								return (
									<h2
										key={index}
										className='text-2xl font-bold mt-6 mb-3'
									>
										{paragraph.substring(3)}
									</h2>
								);
							} else if (paragraph.startsWith('### ')) {
								return (
									<h3
										key={index}
										className='text-xl font-bold mt-5 mb-2'
									>
										{paragraph.substring(4)}
									</h3>
								);
							} else if (paragraph.startsWith('- ')) {
								return (
									<li key={index} className='ml-6 mb-1'>
										{paragraph.substring(2)}
									</li>
								);
							} else if (paragraph.trim() === '') {
								return <div key={index} className='h-4'></div>;
							} else {
								return (
									<p key={index} className='mb-4'>
										{paragraph}
									</p>
								);
							}
						})}
					</div>

					<div className='mt-12 pt-8 border-t border-[#FF5500]/20'>
						<div className='flex items-center gap-4'>
							<Image
								src={post.authorImage || '/placeholder.svg'}
								alt={post.author}
								width={64}
								height={64}
								className='rounded-full'
							/>
							<div>
								<h3 className='font-bold'>{post.author}</h3>
								<p className='text-gray-400'>
									{post.authorRole}
								</p>
							</div>
						</div>
					</div>

					<div className='mt-12 text-center'>
						<h3 className='text-2xl font-bold mb-6'>
							Continue Reading
						</h3>
						<Button
							className='bg-[#FF5500] hover:bg-[#FF7733] text-white'
							asChild
						>
							<Link href='/news'>More Articles</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
