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
  metadataBase: new URL('https://yourportfolio.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'A.ZINEDDINE | Full Stack Developer Portfolio',
    template: '%s | A.ZINEDDINE Portfolio',
  },
  description:
    'A.ZINEDDINE — Full Stack Developer with 5+ years of experience. Specialized in building high-performance web & mobile applications using React, Next.js, React Native, Vue.js, Node.js, Laravel, and TypeScript. Delivered 50+ successful projects with 30+ satisfied clients.',
  keywords: [
    'A.ZINEDDINE',
    'Full Stack Developer Portfolio',
    'React Developer',
    'Next.js Expert',
    'React Native Developer',
    'Vue.js Developer',
    'Laravel Developer',
    'Node.js Developer',
    'TypeScript',
    'Web and Mobile Applications',
    'Freelance Developer',
  ],
  authors: [{ name: 'A.ZINEDDINE' }],
  creator: 'A.ZINEDDINE',
  publisher: 'A.ZINEDDINE',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'A.ZINEDDINE | Full Stack Developer Portfolio',
    description:
      'Full Stack Developer crafting modern web & mobile applications. 50+ projects delivered with 98% client satisfaction.',
    siteName: 'A.ZINEDDINE Developer Portfolio',
    images: [
      {
        url: 'https://yourportfolio.com/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'A.ZINEDDINE Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.ZINEDDINE | Full Stack Developer Portfolio',
    description:
      'Full Stack Developer specializing in React, Next.js, React Native, Vue.js, Node.js, and Laravel. Building fast, modern apps.',
    creator: '@yourhandle',
    images: ['https://yourportfolio.com/preview.jpg'],
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
  other: {
    // Inject JSON-LD for structured data
    'script:type': 'application/ld+json',
    'script:content': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'A.ZINEDDINE',
      url: 'https://yourportfolio.com',
      sameAs: [
        'https://github.com/yourprofile',
        'https://linkedin.com/in/yourprofile',
        'https://twitter.com/yourhandle',
      ],
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance / Independent',
      },
      knowsAbout: [
        'React',
        'Next.js',
        'React Native',
        'Vue.js',
        'Node.js',
        'Laravel',
        'TypeScript',
      ],
    }),
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