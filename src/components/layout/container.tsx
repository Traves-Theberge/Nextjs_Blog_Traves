import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
  width?: 'small' | 'medium' | 'large'
  className?: string
}

export const Container = ({
  children,
  size = "medium",
  width = "large",
  className = "",
}: ContainerProps) => {
  const sizeClasses = {
    small: 'py-4',
    medium: 'py-8',
    large: 'py-12'
  }

  const widthClasses = {
    small: 'max-w-3xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl'
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${widthClasses[width]} ${className}`}>
      {children}
    </div>
  )
}
