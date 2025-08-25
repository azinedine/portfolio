import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/sections/Footer'
import { ScrollIndicator } from '@/components/common/ScrollIndicator'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Developer Portfolio | Full Stack Developer',
    template: '%s | Developer Portfolio'
  },
  description: 'Full Stack Developer specializing in React, Next.js, React Native, Vue.js, Node.js, and Laravel. Crafting modern web and mobile applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'React Native', 'Vue.js', 'Node.js', 'Laravel', 'TypeScript'],
  authors: [{ name: 'A.ZINEDDINE' }],
  creator: 'A.ZINEDDINE',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Developer Portfolio | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web and mobile applications.',
    siteName: 'Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web and mobile applications.',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-dark-950 text-dark-900 dark:text-dark-100 transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ScrollIndicator />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}