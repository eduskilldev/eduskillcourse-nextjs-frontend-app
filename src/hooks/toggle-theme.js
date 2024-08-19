'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/shadcn/ui/button';

function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<div className='flex w-full gap-5'>
			<Button className='w-full bg-primary' onClick={() => setTheme('light')}>
				<SunIcon className='h-4 w-4' />
			</Button>
			<Button className='group w-full bg-white dark:bg-primary-foreground dark:hover:bg-primary-foreground/90' onClick={() => setTheme('dark')}>
				<MoonIcon className='h-4 w-4 text-primary group-hover:text-primary-foreground dark:text-primary group-hover:dark:text-primary' />
			</Button>
		</div>
	);
}

export { ToggleTheme };
