import { partners } from '@/data/partners';
import PartnerCard from '@/components/partner-card';
import { generateMetadata } from '@/components/seo';

export const metadata = generateMetadata({
	title: 'Our Partners',
	description:
		'We collaborate with trusted partners in IT consulting, tech recruitment, engineering staff augmentation, and offshore development to help you scale your technology teams with agility and precision.',
	keywords: [
		'IT solutions',
		'IT recruitment solutions',
		'IT consulting'
	],
	canonical: '/partners',
});

export default function PartnersPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white'>
			<div className='container mx-auto px-4 py-20'>
				<div className='text-center mb-16'>
					<h1 className='text-5xl font-bold mb-4'>
						Our <span className='text-[#FF5500]'>Partners</span>
					</h1>
					<p className='text-gray-300 max-w-2xl mx-auto'>
						We collaborate with trusted partners in IT consulting,
						tech recruitment, engineering staff augmentation, and
						offshore development to help you scale your technology
						teams with agility and precision.
					</p>
				</div>

				<div className='flex items-center justify-center gap-10'>
					{partners.map((partner) => (
						<PartnerCard key={partner.id} partner={partner} />
					))}
				</div>
			</div>
		</div>
	);
}
