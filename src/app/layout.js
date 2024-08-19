import { ThemeProvider } from 'next-themes';
import { Inter as Font } from 'next/font/google';
import { Credit } from '@/components/credit/credit';
import { NotReadyResponsive } from '@/components/miscellaneous/not-ready-responsive';
import { StandaloneGradient } from '@/components/miscellaneous/standalone-gradient';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import '@/styles/globals.css';

const font = Font({
	weight: ['400'],
	subsets: ['latin'],
	display: 'block',
	preload: true,
});

export const metadata = {
	title: 'Eduskill Course',
	description: 'Eduskill - Learning Course',
};

export const viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1.0,
	userScalable: false,
	targetDensitydpi: 'device-dpi',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={font.className}>
				<ThemeProvider attribute='class'>
					<ProgressBarProvider>
						{children}
						<StandaloneGradient />
						<Credit />
						<NotReadyResponsive />
					</ProgressBarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
