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
        "text-4xl md:text-5xl lg:text-6xl font-bold mb-8",
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
        "text-2xl md:text-3xl lg:text-4xl font-bold mt-12 mb-6",
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
        "text-xl md:text-2xl lg:text-3xl font-semibold mt-8 mb-4",
        props.className
      )}
    >
      {children}
    </Typography>
  ),
  p: ({ children, ...props }: MDXProps) => (
    <div className={cn(
      "mb-6 prose prose-lg dark:prose-invert max-w-none",
      props.className
    )}>
      <Typography className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </Typography>
    </div>
  ),
  ul: ({ children, ...props }: MDXProps) => (
    <ul className={cn(
      "mb-6 ml-6 space-y-2 list-disc prose prose-lg dark:prose-invert",
      props.className
    )}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }: MDXProps) => (
    <li className={cn(
      "text-gray-600 dark:text-gray-300 leading-relaxed pl-2",
      props.className
    )}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }: MDXProps) => (
    <strong className={cn(
      "font-semibold text-gray-900 dark:text-white",
      props.className
    )}>
      {children}
    </strong>
  ),
  img: ({ src, alt, ...props }: { src: string; alt: string; className?: string }) => (
    <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
      <Image 
        src={src} 
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  ),
}

export default components
