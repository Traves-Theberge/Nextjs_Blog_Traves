'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface BlogFilterProps {
  tags: string[]
  selectedTags: string[]
  onTagSelect: (tags: string[]) => void
}

export function BlogFilter({ tags, selectedTags, onTagSelect }: BlogFilterProps) {
  const { resolvedTheme } = useTheme()

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagSelect(selectedTags.filter(t => t !== tag))
    } else {
      onTagSelect([...selectedTags, tag])
    }
  }

  // Sort tags to ensure consistent order
  const sortedTags = [
    'AI',
    'Hardware',
    'Machine Learning',
    'Web Development',
    'Workflows',
    'Agents',
    'Automation'
  ].filter(tag => tags.includes(tag))

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {sortedTags.map(tag => (
        <motion.button
          key={tag}
          onClick={() => handleTagClick(tag)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Filter by ${tag}`}
          aria-pressed={selectedTags.includes(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedTags.includes(tag)
              ? resolvedTheme === 'dark'
                ? 'bg-blue-500 text-white'
                : 'bg-blue-600 text-white'
              : resolvedTheme === 'dark'
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  )
} 