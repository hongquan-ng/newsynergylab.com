export interface TeamMember {
	id: string;
	slug: string;
	name: string;
	role: string;
	image: string;
	description: string;
	bio: string;
	skills: string[];
	education: string[];
	experience: string[];
	socialLinks: {
		linkedin?: string;
		email?: string;
	};
	featured: boolean;
}

export const teamMembers: TeamMember[] = [
	{
		id: 'hong-quan-nguyen',
		slug: 'hong-quan-nguyen',
		name: '(Hong) Quan Nguyen',
		role: 'Founder',
		image: '/hong-quan-nguyen.png?height=300&width=300',
		description:
			'8+ years experience in Software Development, SRE, IT Operation.',
		bio: 'Quan is a seasoned Software Engineer with over 8 years of experience building large-scale systems for fintech unicorns and startups. He specializes in designing robust, scalable architectures that support advanced workloads—including AI-driven applications—while ensuring high performance, reliability, and efficiency.',
		skills: [
			'Software Architecture',
			'AI Engineering',
			'Python',
			'PyTorch',
			'LangChain',
			'Google Vertex AI',
		],
		education: [
			'MBA student in Technology Management, Northern Institute of Technology Management | TUHH',
			'Bachelor of Engineering in Information Technology & Electrical Engineering, Frankfurt University of Applied Sciences',
		],
		experience: [
			'Lead AI Architect at DLT Finance Holdings AG (2024-2025)',
			'Senior Software Engineer at DLT Finance Holdings AG (2023-2024)',
			'Senior Software Engineer | SRE at 360T AG | Deutsche Börse Group (2017-2023)',
		],
		socialLinks: {
			linkedin: 'https://www.linkedin.com/in/quanhongnguyen/',
			email: 'quan.nguyen@newsynergylab.com',
		},
		featured: true,
	},
];

export function getFeaturedTeamMembers(): TeamMember[] {
	return teamMembers.filter((member) => member.featured);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
	return teamMembers.find((member) => member.slug === slug);
}
