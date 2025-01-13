import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components/core/Providers'
import { ScrollProvider } from '@/providers/ScrollProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Traves Theberge | Full Stack Developer',
    template: '%s | Traves Theberge'
  },
  description: 'Full Stack Developer specializing in modern web technologies and digital experiences.',
  openGraph: {
    title: 'Traves Theberge | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies and digital experiences.',
    siteName: 'Traves Theberge',
    images: [
      {
        url: '/images/Thumb.webp',
        width: 1200,
        height: 630,
        alt: 'Traves Theberge - Full Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traves Theberge | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies and digital experiences.',
    images: ['/images/Thumb.webp'],
    creator: '@Traves_Theberge'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="bg-white dark:bg-gray-900">
        <ScrollProvider>
          <Providers>{children}</Providers>
        </ScrollProvider>
      </body>
    </html>
  )
}
