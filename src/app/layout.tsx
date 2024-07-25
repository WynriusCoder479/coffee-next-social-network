import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const font = Nunito({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
	title: 'Coffee',
	description: 'Coffee social network'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={cn('antialiased', font.className)}>{children}</body>
		</html>
	)
}

export default RootLayout
