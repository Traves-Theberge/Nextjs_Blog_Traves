'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  id?: string
}

export function Section({ 
  children, 
  className = '',
  size = 'md',
  id
}: SectionProps) {
  const sizeClasses = {
    sm: 'min-h-[50vh] py-12',
    md: 'min-h-[60vh] py-16',
    lg: 'min-h-[70vh] py-20',
    xl: 'min-h-[80vh] py-24',
    '2xl': 'min-h-[90vh] py-32'
  }

  return (
    <section 
      id={id}
      className={`w-full flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      {children}
    </section>
  )
} 