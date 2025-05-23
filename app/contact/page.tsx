import { ContactCard } from '@/components/contact-card';
import { generateMetadata } from '@/components/seo';
import SplineContact from '@/components/splinecode/spline-contact';

export const metadata = generateMetadata({
	title: 'Contact | New Synergy Lab',
	description: "Let's get in touch with eachother.",
	keywords: ['Contact'],
	canonical: '/contact',
});

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white'>
			<div className='container mx-auto px-4 py-20'>
				<div className='text-center mb-16'>
					<h1 className='text-5xl font-bold mb-4'>
						Let's{' '}
						<span className='text-[#FF5500]'> Get In Touch.</span>
					</h1>
					<div className='flex items-center justify-center gap-4 mt-16'>
                        <SplineContact />
						<ContactCard />
					</div>
				</div>
			</div>
		</div>
	);
}
