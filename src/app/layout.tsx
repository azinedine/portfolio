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
  metadataBase: new URL('https://azineddine.dev'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'A.ZINEDDINE | Full Stack Developer - 4+ Years Experience',
    template: '%s | A.ZINEDDINE Portfolio'
  },
  description: 'A.ZINEDDINE - Expert Full Stack Developer with 5+ years experience. Delivered 50+ cutting-edge web & mobile applications using React v19, Next.js 15, React Native v0.79, Vue.js, Node.js & Laravel. 98% client satisfaction rate.',
  keywords: [
    'A.ZINEDDINE',
    'Full Stack Developer',
    'React v19 Developer',
    'Next.js 15 Expert',
    'React Native v0.79',
    'Vue.js Developer', 
    'TypeScript Expert',
    'Laravel 12 Developer',
    'Node.js Developer',
    'Modern Web Applications',
    'Mobile App Development',
    'Freelance Developer',
    '5+ Years Experience',
    '50+ Projects Delivered'
  ],
  authors: [{ name: 'A.ZINEDDINE', url: 'https://azineddine.dev' }],
  creator: 'A.ZINEDDINE',
  publisher: 'A.ZINEDDINE',
  category: 'Technology',
  classification: 'Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azineddine.dev',
    title: 'A.ZINEDDINE | Expert Full Stack Developer - 5+ Years',
    description: 'Transforming ideas into reality with cutting-edge technologies. 50+ projects delivered, 30+ satisfied clients, 98% success rate.',
    siteName: 'A.ZINEDDINE - Full Stack Developer Portfolio',
    images: [
      {
        url: 'https://azineddine.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A.ZINEDDINE - Full Stack Developer Portfolio Preview',
        type: 'image/jpeg',
      },
      {
        url: 'https://azineddine.dev/og-square.jpg',
        width: 600,
        height: 600,
        alt: 'A.ZINEDDINE - Developer Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@azineddine_dev',
    creator: '@azineddine_dev',
    title: 'A.ZINEDDINE | Full Stack Developer - Modern Web & Mobile Apps',
    description: '5+ years crafting cutting-edge applications with React v19, Next.js 15, React Native & Laravel. 50+ successful projects delivered.',
    images: {
      url: 'https://azineddine.dev/twitter-card.jpg',
      alt: 'A.ZINEDDINE Full Stack Developer Portfolio',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
  other: {
    'theme-color': '#6d4aec',
    'color-scheme': 'dark',
    'format-detection': 'telephone=no',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#6d4aec' },
    ],
  },
  manifest: '/manifest.json',
};


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