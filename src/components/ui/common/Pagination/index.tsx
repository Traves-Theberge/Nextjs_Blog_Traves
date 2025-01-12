'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

type PageNumber = number | '...'

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const { resolvedTheme } = useTheme()

  const renderPageNumbers = (): PageNumber[] => {
    const pages: PageNumber[] = []
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i)
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push('...')
      }
    }
    return pages
  }

  return (
    <div className="flex justify-center items-center gap-2">
      {/* Rest of the component code... */}
    </div>
  )
} 