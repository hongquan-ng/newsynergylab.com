import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-[#000814] py-12 border-t border-[#FF5500]/20 relative z-10'>
			<div className='container mx-auto px-4'>
				<div className='mt-2 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400 text-sm'>
						© 2025 New Synergy Lab. All rights reserved.
					</p>
					<div className='flex flex-wrap gap-4 mt-4 md:mt-0'>
						<Link href='/about' className='hover:text-[#FF5500]'>
							About Us
						</Link>
						<Link
							href='https://www.linkedin.com/company/newsynergylab/posts/?feedView=all&viewAsMember=true'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-[#FF5500]'
						>
							LinkedIn
						</Link>

						<Link href='/contact' className='hover:text-[#FF5500]'>
							Contact
						</Link>
						<Link
							href='/privacy'
							className='hover:text-[#FF5500]'
						>
							Privacy Policy
						</Link>
						<Link
							href='/cookies'
							className='hover:text-[#FF5500]'
						>
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
