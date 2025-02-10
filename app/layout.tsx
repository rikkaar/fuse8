import localFont from 'next/font/local'
import {QueryClientContextProvider} from '@/app/providers/query-client-provider'
import {ThemeProvider} from '@/app/providers/theme-privider'
import {cn} from '@/shared/lib/utils'
import {Metadata} from 'next'
import '@/app/globals.css'

const Montserrat = localFont({
	src: './fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
	display: 'swap',
	variable: '--font-montserrat',
	fallback: ['system-ui', 'inter'],
	adjustFontFallback: false,
})

const FiraSans = localFont({
	src: [
		{
			path: './fonts/Fira_Sans/FiraSans-Regular.ttf',
			weight: '400',
		},
		{
			path: './fonts/Fira_Sans/FiraSans-Bold.ttf',
			weight: '700',
		},
	],
	display: 'swap',
	variable: '--font-fira-sans',
	fallback: ['system-ui', 'inter'],
	adjustFontFallback: false,
})

export const metadata: Metadata = {
	title: {
		template: '%s | Fuse8',
		default: 'Fuse8',
	},
	description: 'RiM search page',
}

export const revalidate = 86400 // One day

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			className='h-full scroll-smooth antialiased'
			lang='en'
			suppressHydrationWarning
		>
			<body className={cn(Montserrat.variable, FiraSans.variable, 'flex min-h-full flex-col gap-y-5')}>
				<QueryClientContextProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						disableTransitionOnChange
						storageKey={'theme'}
					>
						{children}
					</ThemeProvider>
				</QueryClientContextProvider>
			</body>
		</html>
	)
}
