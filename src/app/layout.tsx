import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components/core/Providers'
import { ScrollProvider } from '@/providers/ScrollProvider'
import { LayoutProvider } from '@/components/layout/layout-context'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

// Dynamically import Favicons with no SSR
const DynamicFavicons = dynamic(
  () => import('@/components/core/Favicons').then((mod) => mod.default),
  { ssr: false }
)

export const metadata: Metadata = {
  title: {
    default: 'Traves Theberge | Full Stack Developer',
    template: '%s | Traves Theberge'
  },
  description: 'Full Stack Developer specializing in modern web technologies and digital experiences.',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', url: '/favicon/favicon.ico' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'Traves Theberge | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies and digital experiences.',
    siteName: 'Traves Theberge',
    url: 'https://traves-theberge.vercel.app',
    images: [
      {
        url: 'https://traves-theberge.vercel.app/images/Thumb.webp',
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
      <head>
        <DynamicFavicons />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <LayoutProvider>
          <ScrollProvider>
            <Providers>{children}</Providers>
          </ScrollProvider>
        </LayoutProvider>
      </body>
    </html>
  )
}
