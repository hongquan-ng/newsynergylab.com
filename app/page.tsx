import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap } from 'lucide-react';
import CountersSection from '@/components/counters-section';
import PartnerCard from '@/components/partner-card';
import TeamMemberCard from '@/components/team-member-card';
import { counters } from '@/data/counters';
import { getFeaturedPartners } from '@/data/partners';
import { getFeaturedTeamMembers } from '@/data/team';
import { getAllServices } from '@/data/services';
import { generateMetadata } from '@/components/seo';

import { IconCloudDemo } from '@/components/ui/icon-cloud';
import { WordRotate } from '@/components/magicui/word-rotate';

export const metadata = generateMetadata({
	title: 'New Synergy Lab - AI-Native Solutions for Business',
	description:
		'We’re a small but mighty of engineers and builders who truly believe in the mission of transforming businesses with AI-Native solution. We’re not just about the latest trends or buzzwords; we’re about crafting solutions that solve real-world problems. No hype—just clean code, clean architecture, sharp thinking, and AI that works where it matters.',
	ogImage: '/og-image.jpg',
});

export default function Home() {
	const featuredPartners = getFeaturedPartners();
	const featuredTeamMembers = getFeaturedTeamMembers();
	const services = getAllServices();

	return (
		<div className='min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white overflow-hidden'>
			{/* Animated background elements */}
			<div className='fixed inset-0 pointer-events-none z-0'>
				<div className='absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF5500] rounded-full filter blur-[100px] opacity-10 floating-element'></div>
				<div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#FF5500] rounded-full filter blur-[120px] opacity-5 floating-element'></div>
				<div className='absolute top-1/3 left-1/4 w-32 h-32 border border-[#FF5500]/20 rounded-full floating-element'></div>
				<div className='absolute top-2/3 right-1/3 w-48 h-48 border border-[#FF5500]/10 rounded-full floating-element'></div>
				<div className='absolute top-1/2 left-1/2 w-24 h-24 bg-[#FF5500]/5 rotate-45 floating-element'></div>
			</div>

			{/* Hero Section */}
			<section className='container mx-auto px-4 py-20 md:py-16 relative z-10'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='space-y-8'>
						<h1 className='text-5xl md:text-7xl font-bold leading-tight flex justify-left gap-4'>
							<span className=''>New</span>
							<span className='text-[#FF5500]'>
								<WordRotate
									words={[
										'Possibilities',
										'Horizons',
										'Frontiers',
										'Synergy',
									]}
								/>
							</span>
						</h1>
						<p className='text-xl text-gray-300 max-w-lg'>
							<span className='text-[#FF5500]'>
								Go AI, Go AI Native
							</span>{' '}
							- We are a focused team of engineers dedicated to
							delivering AI-native solutions that drive real
							business impact. No hype—just robust architecture,
							reliable code, and AI applied where it matters most.
						</p>
					</div>
					<div className='relative'>
						<IconCloudDemo />
					</div>
				</div>

				<div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#000814] to-transparent'></div>
			</section>

			{/* Services Section */}
			<section id='services' className='py-20 relative z-10'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center mb-16'>
						<div>
							<h2 className='text-4xl font-bold mb-4'>
								Our{' '}
								<span className='text-[#FF5500]'>
									Service Categories
								</span>
							</h2>
							<p className='text-gray-300 max-w-2xl'>
								We provide AI and advanced technology expertise
								to help businesses transition to AI-first
								operations, driving innovation, optimizing
								processes, and unlocking new growth
								opportunities in a rapidly evolving digital
								landscape.
							</p>
						</div>
						<Button
							variant='outline'
							className='border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 mt-4 md:mt-0'
							asChild
						>
							<Link href='/services'>View All Services</Link>
						</Button>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service) => (
							<Link
								key={service.id}
								href={`/services/${service.slug}`}
								className='service-card bg-gradient-to-br from-[#000c28] to-[#000510] p-8 rounded-lg border border-[#FF5500]/20 hover:border-[#FF5500]/50 transition-all group'
							>
								<div className='bg-[#000814] p-4 rounded-lg inline-block mb-4 group-hover:bg-[#FF5500]/10 transition-colors'>
									<Zap className='h-8 w-8 text-[#FF5500]' />
								</div>
								<h3 className='text-xl font-bold mb-3 group-hover:text-[#FF5500] transition-colors'>
									{service.title}
								</h3>
								<p className='text-gray-300'>
									{service.shortDescription}
								</p>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Featured Partners Section */}
			<section id='partners' className='py-20 relative z-10'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center mb-16'>
						<div>
							<h2 className='text-4xl font-bold mb-4'>
								Our{' '}
								<span className='text-[#FF5500]'>Partners</span>
							</h2>
							<p className='text-gray-300 max-w-2xl'>
								We collaborate with trusted partners in IT
								consulting, tech recruitment, engineering staff
								augmentation, and offshore development to help
								you scale your technology teams with agility and
								precision.
							</p>
						</div>
						<Button
							variant='outline'
							className='border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 mt-4 md:mt-0'
							asChild
						>
							<Link href='/partners'>View Partners List</Link>
						</Button>
					</div> 

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{featuredPartners.map((partner) => (
							<PartnerCard key={partner.id} partner={partner} />
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id='team' className='py-20 relative z-10'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center mb-16'>
						<div>
							<h2 className='text-4xl font-bold mb-4'>
								Meet Our{' '}
								<span className='text-[#FF5500]'>Team</span>
							</h2>
							<p className='text-gray-300 max-w-2xl'>
								A collective of passionate AI Engineers,
								Software Developers, and Data Scientists ready to tackle
								your challenges.
							</p>
						</div>
						<Button
							variant='outline'
							className='border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 mt-4 md:mt-0'
							asChild
						>
							<Link href='/team'>View Team Members</Link>
						</Button>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{featuredTeamMembers.map((member) => (
							<TeamMemberCard key={member.id} member={member} />
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 relative z-10'>
				<div className='container mx-auto px-4'>
					<div className='bg-gradient-to-r from-[#000c28] to-[#000510] p-12 rounded-2xl border border-[#FF5500]/30 text-center max-w-4xl mx-auto relative overflow-hidden'>
						<div className='absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/10 rounded-full filter blur-3xl'></div>
						<div className='absolute bottom-0 left-0 w-64 h-64 bg-[#FF5500]/10 rounded-full filter blur-3xl'></div>

						<h2 className='text-4xl font-bold mb-6 relative z-10'>
							Ready to{' '}
							<span className='text-[#FF5500]'>Transform</span>{' '}
							Your Business?
						</h2>
						<p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10'>
							Our team of AI specialists is ready to help you
							implement cutting-edge solutions that drive real
							results.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center relative z-10'>
							<Button
								className='bg-[#FF5500] hover:bg-[#FF7733] text-white border-none text-lg px-8 py-6'
								asChild
							>
								<Link href='/contact'>Get in Touch</Link>
							</Button>
							<Button
								variant='outline'
								className='border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10 text-lg px-8 py-6'
								asChild
							>
								<Link href='/services'>View Our Services</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
