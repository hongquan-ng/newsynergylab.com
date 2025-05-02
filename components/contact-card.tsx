import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

export function ContactCard() {
	return (
		<NeonGradientCard className='max-w-md items-center justify-center text-center'>
			{/*<span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>*/}

			<div className="flex flex-col justify-center">
				<div className='flex justify-left items-center gap-4 py-2'>
					<MdEmail />
					<a
						href='mailto:quan.nguyen@newsynergylab.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-[#FF5500]'
					>
						quan.nguyen@newsynergylab.com
					</a>
				</div>
				<div className='flex justify-left items-center gap-4 py-2'>
					<FaLinkedin />
					<Link
						href='https://www.linkedin.com/company/newsynergylab/posts/?feedView=all&viewAsMember=true'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-[#FF5500]'
					>
						linkedin.com/company/newsynergylab
					</Link>
				</div>
			</div>
		</NeonGradientCard>
	);
}
