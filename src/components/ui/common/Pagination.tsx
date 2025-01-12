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

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const { resolvedTheme } = useTheme()

  const renderPageNumbers = () => {
    const pages: Array<number | string> = []
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
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition-colors ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : resolvedTheme === 'dark'
            ? 'hover:bg-gray-800'
            : 'hover:bg-gray-100'
        }`}
        aria-label="Previous page"
      >
        <FiChevronLeft className="w-5 h-5" />
      </motion.button>

      {renderPageNumbers().map((page, index) => (
        <motion.button
          key={`page-${index}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page !== 'number'}
          className={`w-10 h-10 rounded-lg transition-colors ${
            typeof page !== 'number'
              ? 'cursor-default'
              : page === currentPage
              ? resolvedTheme === 'dark'
                ? 'bg-blue-500 text-white'
                : 'bg-blue-600 text-white'
              : resolvedTheme === 'dark'
              ? 'hover:bg-gray-800'
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition-colors ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : resolvedTheme === 'dark'
            ? 'hover:bg-gray-800'
            : 'hover:bg-gray-100'
        }`}
        aria-label="Next page"
      >
        <FiChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  )
} 