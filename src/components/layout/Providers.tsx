'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useState, useEffect } from 'react'
import { LoadingSpinner } from '@/components/ui/common/LoadingSpinner'
import { Layout } from './layout'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingSpinner />
  }

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
    </ThemeProvider>
  )
} 