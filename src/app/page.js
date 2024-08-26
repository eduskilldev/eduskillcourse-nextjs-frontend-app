import Image from 'next/image';
import Link from 'next/link';
import TutorsCard from '@/components/cards/tutors-card';
import { Section } from '@/components/section/section';
import CoursesSlider from '@/components/slders/courses-slider';
import { collaborations, svgs } from '@/utils/constants';

export default function HomePage() {
	return (
		<>
			<Image data-aos='zoom-in' src='/svgs/eclipse-orbit-left.svg' width={407} height={489} alt='orbit-left' className='absolute z-0 top-[83px] -left-6' />
			<Image data-aos='zoom-in' src='/svgs/eclipse-left.svg' width={285} height={476} alt='eclipse-left' className='absolute z-0 top-[359px] left-0' />
			<Image data-aos='zoom-in' src='/svgs/eclipse-right.svg' width={300} height={490} alt='eclipse-right' className='absolute z-0 top-0 right-0' />
			<Image data-aos='zoom-in' src='/svgs/eclipse-orbit-right.svg' width={407} height={489} alt='orbit-right' className='absolute z-0 top-[380px] right-0' />
			<div className='w-[22px] h-[22px] bg-[#7F56D9]/80 absolute top-[739px] left-[360px] rounded-full' />

			<Section id={'hero'} className={'bg-white dark:bg-gray-950'}>
				<div className='container relative mx-auto'>
					<div className='flex items-center justify-between relative mt-[200px]'>
						<div className='z-10 h-fit flex flex-col gap-y-[50px]'>
							<div className='flex flex-col gap-y-9'>
								<div className='flex flex-col gap-y-5'>
									<p className='leading-[82px] w-[602px] text-[60px] tracking-[-0.5px] font-bold text-[#101828] dark:text-gray-100'>
										Upgrade <span className='text-eduskill'>Skillmu</span> <br /> Bersama <span className='text-eduskill uppercase'>eduskill</span>
									</p>
									<p data-aos='fade-right' data-aos-delay='500' className='leading-[180%] text-sm text-[#646464] dark:text-gray-300 max-w-md'>
										Eduskill Menyediakan Kelas Design, Web Development, Business Plan Yang Cocok Untuk Mahasiswa Maupun Pemula{' '}
									</p>
								</div>
								<div className='flex gap-x-7'>
									<Link href='https://eduskill.mayar.link/pl/basic-web-development'>
										<button data-aos='zoom-in' data-aos-delay='600' className='px-7 py-4 font-semibold text-white bg-eduskill rounded-lg text-lg shadow-2xl shadow-[#101828]/5'>
											Daftar
										</button>
									</Link>
									<Link href='https://wa.me/6281553546308?text=Saya%20memiliki%20kendala,%20yaitu...'>
										<button data-aos='zoom-in' data-aos-delay='700' className='px-7 py-4 font-semibold bg-[#F4EBFF] dark:bg-gray-50 rounded-lg text-lg text-eduskill-400 shadow-2xl shadow-[#101828]/5'>
											CS Admin
										</button>
									</Link>
								</div>
							</div>
							<div className='flex gap-x-[34px]'>
								{svgs.map((item) => (
									<div data-aos='flip-down' className='md:flex md:items-center md:justify-start flex gap-x-[10px] md:gap-2' key={item.id}>
										<Image src={item.icon} alt={item.alt} width={32} height={32} className='md:w-5 md:mx-0 md:h-auto w-8 h-8 mx-auto' />
										<div>
											<p className='md:text-mini md:mt-0 md:text-left text-center text-base text-[#1D2939] dark:text-gray-200 opacity-70 mt-2 font-normal'>{item.name}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div id='headerBlur' className='relative top-[0px] right-0'>
							<div className='z-10 w-[495px] h-[495px] bg-eduskill rounded-full relative overflow-hidden'>
								<Image src='/images/home/person.png' width={366} height={432} alt='person' className='absolute top-[68px] left-[46px] -bottom-[5px]' />
							</div>

							<div className='z-0 absolute -top-[21px] -left-[22.56px] border-2 border-eduskill w-[495.72px] h-[495.72px] rounded-full' />

							<div className='z-10 absolute -top-[19px] -right-[35.72px] w-fit p-[18px] gap-y-3 bg-eduskill-card dark:bg-gray-100 border-eduskill border rounded-[18px] flex flex-col items-center justify-center '>
								<Image src='/svgs/online-courses.svg' alt='online-courses' width='81' height='80' />
								<p className='text-[#101828] font-bold text-[25px]'>15+</p>
								<p className='text-[#101828]/80 font-normal text-[15px]'>Online Courses</p>
								{/* <div class='relative w-20 h-20'>
									<div className='absolute inset-0 rounded-full border-8 border-[#EAECF0]'></div>

									<div className='absolute inset-0 rounded-full border-8 border-r-eduskill border-[#EAECF0]'></div>
								</div> */}
							</div>

							<div className='z-10 absolute top-[155px] -left-[93px] w-fit p-[18px] gap-x-6 bg-eduskill-card dark:bg-gray-100 border-eduskill border rounded-[18px] flex items-center justify-center '>
								<div className='flex items-center bg-eduskill rounded-xl p-1.5'>
									<Image src='/svgs/video.svg' alt='video-courses' width='36' height='36' />
								</div>
								<div className='flex flex-col gap-y-1.5'>
									<p className='text-[#101828] font-bold text-[25px]'>20+</p>
									<p className='text-[#101828]/80 font-normal text-[15px]'>Video Courses</p>
								</div>
							</div>

							<div className='z-10 absolute bottom-[39.28px] -right-[2.96px] w-fit p-[18px] gap-x-3 bg-eduskill-card dark:bg-gray-100 border-eduskill border rounded-[18px] flex items-center justify-center '>
								<div className='flex items-center bg-eduskill rounded-xl p-1.5'>
									<Image src='/svgs/tutor.svg' alt='tutors' width='36' height='36' />
								</div>
								<div className='flex flex-col gap-y-0'>
									<p className='text-[#101828]/80 font-normal text-[15px]'>Tutors</p>
									<p className='text-[#101828] font-bold text-[25px]'>10+</p>
								</div>
							</div>

							<div className='z-10 absolute bottom-[37.11px] left-[9.56px] bg-eduskill rounded-full w-[42px] h-[42px]' />
						</div>
					</div>

					<div className='flex mt-[125px] flex-col md:flex-row items-center justify-start gap-x-[55px] md:justify-start'>
						<div className='flex flex-col gap-y-0'>
							<p className='font-bold leading-[34px] text-[30px] md:text-xl text-eduskill'>10+</p>
							<p className='text-[25px] leading-[34px] md:text-xl font-light text-[#101828] dark:text-gray-100'>Collaborations</p>
						</div>
						<div className='flex items-center justify-start md:justify-center flex-wrap gap-x-[60px]'>
							{collaborations.map((item, index) => (
								<div data-aos='flip-left' data-aos-delay='200' key={index} style={{ width: item.width, height: item.height, position: 'relative' }} className='relative'>
									<Image src={item.image} alt={item.alt} layout='fill' objectFit='cover' className='object-cover' />
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>
			{/* <Services />
					<Classes />
					<Teacher /> */}
			{/* </div> */}
			<Section id={'courses-recent'} className={'bg-white dark:bg-gray-950'}>
				<div className='container mx-auto mt-[8.25rem]'>
					<CoursesSlider />
				</div>
			</Section>

			<Section id={'tutors'} className={'bg-white dark:bg-gray-950'}>
				<div className='container mx-auto mt-[5.125rem]'>
					<div className='w-full flex flex-col justify-center items-center gap-y-8'>
						<div className='w-[48rem] flex flex-col items-center gap-y-5'>
							<div className='gap-y-3 flex flex-col'>
								<p className='font-semibold text-base leading-6 text-eduskill text-center'>Tutor</p>
								<h1 className='font-semibold text-4xl leading-[2.75rem] text-[#101828] dark:text-gray-100 text-center'>Para Mentor</h1>
							</div>
							<p className='font-normal text-lg leading-[1.875rem] text-[#667085] dark:text-gray-400 text-center'>Di EDUSKILL, instruktur dari seluruh dunia mengajar jutaan siswa. Kami menawarkan pengetahuan dan kemampuan.</p>
						</div>

						<TutorsCard />
					</div>
				</div>
			</Section>
			<Section id={'services'} className={'bg-white dark:bg-gray-950'}></Section>
		</>
	);
}
