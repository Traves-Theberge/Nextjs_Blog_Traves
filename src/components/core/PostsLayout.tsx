'use client'

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import type { MDXComponents } from 'mdx/types'
import components from './mdx-components'

export function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components as MDXComponents}>
      {children}
    </MDXProvider>
  )
} 