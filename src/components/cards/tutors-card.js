import Image from 'next/image';
import GithubIcon from '@/components/svgs/github-icon';
import LinkedinIcon from '@/components/svgs/linkedin-icon';
import { tutorsList } from '@/utils/constants';

function TutorsCard() {
	return (
		<div className='grid grid-cols-4 gap-6 p-6'>
			{' '}
			{tutorsList.map((tutor, index) => (
				<div key={index} className='flex flex-col items-center justify-center bg-[#F9FAFB] p-6 rounded-lg'>
					<div className='flex flex-col items-center gap-y-5'>
						<div className='rounded-full overflow-hidden'>
							<Image src={tutor.image} width={80} height={80} alt={tutor.alt} className='w-20 h-20 object-cover' />
						</div>
						<div className='flex flex-col gap-y-4 items-center justify-center'>
							<div className='flex flex-col gap-y-2 items-center justify-center'>
								<div className='flex flex-col items-center justify-center'>
									<p className='font-medium text-lg leading-7'>{tutor.name}</p>
									<p className='text-eduskill-400 font-normal text-base leading-6'>{tutor.position}</p>
								</div>
								<p className='text-[#667085] font-normal text-base leading-6'>{tutor.description}</p>
							</div>
							<div className='flex gap-x-4'>
								<GithubIcon className='fill-[#98A2B3]' />
								<LinkedinIcon className='fill-[#98A2B3]' />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default TutorsCard;
