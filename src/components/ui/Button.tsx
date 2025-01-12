'use client'

import { forwardRef, useRef, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { motion, HTMLMotionProps } from 'framer-motion'
import anime from 'animejs'

const Loader2 = dynamic(() => import('lucide-react').then(mod => mod.Loader2), {
  ssr: false,
  loading: () => <span className="animate-spin">⟳</span>
})

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
      if (!buttonRef.current) return

      const button = buttonRef.current
      let rippleTimeout: NodeJS.Timeout

      const handleRipple = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const ripple = document.createElement('span')
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = `${size}px`
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none animate-ripple'

        button.appendChild(ripple)

        rippleTimeout = setTimeout(() => {
          ripple.remove()
        }, 1000)
      }

      button.addEventListener('click', handleRipple)

      return () => {
        button.removeEventListener('click', handleRipple)
        clearTimeout(rippleTimeout)
      }
    }, [])

    return (
      <motion.button
        ref={buttonRef}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading || disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {children}
            </>
          ) : (
            children
          )}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 group-hover:animate-shimmer" />
      </motion.button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 