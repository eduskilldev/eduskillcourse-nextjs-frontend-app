import CoursesCard from '@/components/cards/courses-card.';
import { Section } from '@/components/section/section';

export default function CoursesPage() {
	return (
		<>
			<Section id={'Courses'} className={'bg-white dark:bg-gray-950'}>
				<div className='container relative mx-auto'>
					<div className='flex items-center relative mt-[200px]'>
						<CoursesCard />
					</div>
				</div>
			</Section>
		</>
	);
}
