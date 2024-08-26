import { ThemeProvider } from 'next-themes';
import { Inter as Font } from 'next/font/google';
import { Credit } from '@/components/credit/credit';
import { NotReadyResponsive } from '@/components/miscellaneous/not-ready-responsive';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import '@/styles/globals.css';
import { Header } from '@/components/navigation/header';

const font = Font({ subsets: ['latin'] });

export const metadata = {
	title: {
		template: '%s | Eduskill',
		default: 'Eduskill',
	},
	description: 'Eduskill - Learning Course',
};

export const viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1.0,
	userScalable: false,
	targetDensitydpi: 'device-dpi',
};

export default function RootLayout({ children, hideNavbar }) {
	return (
		<html lang='id' suppressHydrationWarning={true} className='scroll-smooth'>
			<body className={font.className}>
				<ThemeProvider attribute='class'>
					<ProgressBarProvider>
						<main className='h-full flex flex-col'>
							{!hideNavbar && <Header />}
							{children}
							<Credit />
						</main>
						{/* <NotReadyResponsive /> */}
					</ProgressBarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
