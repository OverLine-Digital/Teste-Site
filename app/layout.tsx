import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'OverLine Digital — Connecting Businesses. Building Digital Futures.',
  description:
    'OverLine Digital is a premium African technology company helping businesses, entrepreneurs and organizations build their digital future through websites, applications, software, AI and cybersecurity.',
  keywords: [
    'OverLine Digital',
    'web development',
    'mobile applications',
    'software',
    'AI assistant',
    'cybersecurity',
    'digital marketing',
    'Brazzaville',
    'Congo',
    'Africa technology',
  ],
  openGraph: {
    title: 'OverLine Digital',
    description: 'Connecting Businesses. Building Digital Futures.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`bg-background dark ${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
