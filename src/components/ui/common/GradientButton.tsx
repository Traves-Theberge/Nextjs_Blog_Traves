import { cn } from '@/lib/utils'
import { gradients, ButtonVariant } from '@/lib/styles/gradients'
import Link from 'next/link'
import { ReactNode } from 'react'

interface GradientButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  external?: boolean
}

export const GradientButton = ({
  href,
  onClick,
  children,
  variant = 'primary',
  className,
  external
}: GradientButtonProps) => {
  const baseStyles = cn(
    'group relative px-6 py-3 rounded-2xl overflow-hidden transition-all duration-300',
    'hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25',
    'before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
    gradients.button[variant],
    className
  )

  const content = (
    <span className="relative flex items-center gap-2 font-medium text-white">
      {children}
    </span>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseStyles}
      >
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  )
} 