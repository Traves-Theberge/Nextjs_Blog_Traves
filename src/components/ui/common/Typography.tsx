import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'large'
  className?: string
}

export const gradientTextStyles = {
  dark: {
    primary: 'bg-gradient-to-r from-white via-blue-400 to-white',
    secondary: 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400'
  },
  light: {
    primary: 'bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900',
    secondary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
  }
}

export const Typography = ({ 
  children, 
  variant = 'p', 
  className 
}: TypographyProps) => {
  const Component = variant === 'small' || variant === 'large' ? 'p' : variant

  const styles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h4: 'text-xl md:text-2xl lg:text-3xl font-bold',
    h5: 'text-lg md:text-xl lg:text-2xl font-bold',
    h6: 'text-base md:text-lg lg:text-xl font-bold',
    p: 'text-base leading-relaxed',
    small: 'text-sm text-gray-600 dark:text-gray-400',
    large: 'text-lg md:text-xl leading-relaxed'
  }

  return (
    <Component className={cn(styles[variant], className)}>
      {children}
    </Component>
  )
} 