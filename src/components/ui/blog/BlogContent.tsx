'use client'

import { MDXProvider } from '@mdx-js/react'
import { Typography } from '../common/Typography'

export const MDXComponents = {
  h1: (props: any) => (
    <Typography
      variant="h1"
      className="text-4xl md:text-5xl font-bold mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography
      variant="h2"
      className="text-3xl md:text-4xl font-bold mt-8 mb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      variant="h3"
      className="text-2xl md:text-3xl font-bold mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: any) => (
    <Typography className="text-gray-600 dark:text-gray-400 mb-4" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => (
    <li className="text-gray-600 dark:text-gray-400 mb-2" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-sm"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
      {props.children}
    </pre>
  ),
}

export function BlogContent({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>
} 