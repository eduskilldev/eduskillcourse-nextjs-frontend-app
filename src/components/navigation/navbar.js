// 'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleTheme from '@/hooks/toggle-theme';
import { navMenuItem } from '@/utils/constants';

function Navbar() {
	const pathname = usePathname();

	return (
		<nav className='container mx-auto w-full h-[100px] flex items-center justify-between'>
			<Image src='/images/navbar/logo.png' width={173} height={54} alt='logo_eduskill' />
			<div className='flex gap-x-[25px] items-center'>
				{navMenuItem.map((item) => (
					<Link href={item.slug} key={item.id}>
						<p className={`text-base font-medium leading-6 ${pathname === item.slug ? 'font-bold text-eduskill' : 'text-[#101828] dark:text-gray-200 hover:text-eduskill-400'}`}>{item.name}</p>
					</Link>
				))}
				<Link href='https://eduskill.myr.id/pl/basic-web-development'>
					<button className='text-white bg-eduskill px-4 py-[10px] h-10 w-[115px] text-sm font-semibold leading-5 rounded-lg shadow-2xl shadow-black/5 dark:shadow-gray-100/5'>Daftar Kelas</button>
				</Link>
				<ToggleTheme />
			</div>
		</nav>
	);
}

export { Navbar };
