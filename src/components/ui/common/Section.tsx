'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  fullWidth?: boolean
}

export function Section({ 
  children, 
  className,
  containerClassName,
  fullWidth = false 
}: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      {fullWidth ? children : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  )
} 