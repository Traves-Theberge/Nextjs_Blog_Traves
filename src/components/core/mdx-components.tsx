'use client'

import React from 'react'
import Image from 'next/image'
import { Typography } from '@/components/ui/common/Typography'
import { cn } from '@/lib/utils'

interface MDXProps {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

const components = {
  h1: ({ children, ...props }: MDXProps) => (
    <Typography 
      variant="h1" 
      className={cn(
        "text-4xl md:text-5xl font-bold mt-8 mb-4",
        props.className
      )}
    >
      {children}
    </Typography>
  ),
  h2: ({ children, ...props }: MDXProps) => (
    <Typography 
      variant="h2" 
      className={cn(
        "text-3xl md:text-4xl font-bold mt-8 mb-4",
        props.className
      )}
    >
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }: MDXProps) => (
    <Typography 
      variant="h3" 
      className={cn(
        "text-2xl md:text-3xl font-bold mt-6 mb-3",
        props.className
      )}
    >
      {children}
    </Typography>
  ),
  p: ({ children, ...props }: MDXProps) => (
    <Typography 
      className={cn(
        "text-gray-600 dark:text-gray-400 mb-4",
        props.className
      )}
    >
      {children}
    </Typography>
  ),
  img: (props: { src: string; alt: string; className?: string }) => (
    <div className="relative aspect-video my-8">
      <Image 
        src={props.src} 
        alt={props.alt} 
        fill
        className={cn(
          "rounded-lg object-cover",
          props.className
        )}
      />
    </div>
  ),
  pre: ({ children, ...props }: MDXProps) => (
    <pre className={cn(
      "bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto",
      props.className
    )}>
      {children}
    </pre>
  ),
}

export default components
