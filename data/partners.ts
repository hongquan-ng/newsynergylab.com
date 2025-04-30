export interface Partner {
	id: string;
	slug: string;
	name: string;
	image: string;
	description: string;
    website: string;
	featured: boolean;
}

export const partners: Partner[] = [
	{
		id: 'ntq-europe-gmbh',
		slug: 'ntq-europe-gmbh',
		name: 'NTQ Europe GmbH',
		image: '/ntq-europe-gmbh.png?height=250&width=400',
		description:
			'NTQ Europe GmbH, is a subsidiary of NTQ Solution - a Global IT Consulting & Software development company with more than 14 years of developing ICT solutions and helping global customers untangle their issues. NTQ stands for "New Top Quality", showing our passion and determination to provide the "World-class" services, and satisfy, even beyond, clients’ expectations.',
        website: "https://ntq-europe.com/about-us/",
		featured: true,
	},
	{
		id: 'reco-manpower',
		slug: 'reco-manpower',
		name: 'RECO JSC Vietnam',
		image: '/reco-jsc-vietnam.png?height=250&width=400',
		description:
			"With 15 years of experience and a team of former HR leaders, Reco is a top IT staffing provider in Vietnam and trusted by 95% of tech enterprises. They specialize in IT human resource solutions and solving complex HR challenges.",
        website: "https://reco-vn.com/",
		featured: true,
	},
];

export function getFeaturedPartners(): Partner[] {
	return partners.filter((partner) => partner.featured);
}
