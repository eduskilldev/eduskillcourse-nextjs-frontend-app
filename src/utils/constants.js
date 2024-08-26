import Pens from '../../public/images/home/1-pens.png';
import Mayar from '../../public/images/home/2-mayar.png';
import Tutors4 from '../../public/images/tutors/avatar-aprillia.png';
import Tutors3 from '../../public/images/tutors/avatar-fahmi.png';
import Tutors2 from '../../public/images/tutors/avatar-halim.png';
import Tutors1 from '../../public/images/tutors/avatar-hariz.png';
import PublicSpeaking from '../../public/svgs/1-public-speaking.svg';
import CareerOriented from '../../public/svgs/2-career-oriented.svg';
import CreativeThinking from '../../public/svgs/3-creative-thinking.svg';

const navMenuItem = [
	{
		id: 1,
		name: 'Home',
		// icon: <PartyIcon className='m-2.5 size-9 fill-primary' />,
		slug: '/',
	},
	{
		id: 2,
		name: 'Course',
		// icon: <PartyIcon className='m-2.5 size-9 fill-primary' />,
		slug: '/courses',
	},
];

const svgs = [
	{
		id: 1,
		icon: PublicSpeaking,
		alt: 'Public Speaking',
		name: 'Public Speaking',
	},
	{
		id: 2,
		icon: CareerOriented,
		alt: 'Career Oriented',
		name: 'Career Oriented',
	},
	{
		id: 3,
		icon: CreativeThinking,
		alt: 'Creative Thinking',
		name: 'Creative Thinking',
	},
];

const collaborations = [
	{
		id: 1,
		image: Pens,
		alt: 'PENS',
		width: 53,
		height: 53,
	},
	{
		id: 2,
		image: Mayar,
		alt: 'MAYAR',
		width: 137,
		height: 58,
	},
];

const tutorsList = [
	{
		id: 1,
		name: 'Hariz Izzuddin',
		position: 'Product Owner',
		description: 'Chief Technology Officer.',
		image: Tutors1,
		alt: 'avatar-hariz',
        linkedinLink: 'https://www.linkedin.com/in/hariz-izzuddin',
	},
	{
		id: 2,
		name: 'Halim Putra',
		position: 'Fullstack Web Developer',
		description: 'Developer at Circle IT.',
		image: Tutors2,
		alt: 'avatar-halim',
        githubLink: 'https://github.com/bforbilly24',
        linkedinLink: 'https://www.linkedin.com/in/halimp',
	},
	{
		id: 3,
		name: 'Fahmi Wahyu Alfian',
		position: 'Mobile Developer',
		description: 'Developer at SiFabel.',
		image: Tutors3,
		alt: 'avatar-fahmi',
        githubLink: 'https://github.com/riikuid',
        linkedinLink: 'https://www.linkedin.com/in/halimp',
	},
	{
		id: 4,
		name: 'Aprilia Dwi Cristyana',
		position: 'UI/UX Designer',
		description: 'UI/UX Design at Eduskill.',
		image: Tutors4,
		alt: 'avatar-aprillia',
        linkedinLink: '',
	},
];

const PROTECTED_PAGES = ['/'];

export { navMenuItem, svgs, collaborations, tutorsList, PROTECTED_PAGES };
