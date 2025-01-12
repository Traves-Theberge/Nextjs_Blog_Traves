'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Typography } from '../common/Typography'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import type { Project } from '@/types/project'

interface WorkProjectProps {
  project: Project
}

export function WorkProject({ project }: WorkProjectProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [project.image])

  // Split description into paragraphs
  const descriptionParagraphs = project.description.split('\n\n').filter(Boolean)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        {/* Project Image - Updated background */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-contain p-4 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Action Button - Conditional rendering */}
        <div className="flex">
          <a
            href={project.id === 'golden-earth' ? project.link : "mailto:traves.theberge@gmail.com?subject=Project Preview Request"}
            target={project.id === 'golden-earth' ? "_blank" : undefined}
            rel={project.id === 'golden-earth' ? "noopener noreferrer" : undefined}
            className="group relative px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white 
              overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:via-purple-700 before:to-blue-700
              before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          >
            <span className="relative flex items-center gap-2 font-medium">
              {project.id === 'golden-earth' ? 'Visit Website' : 'Request Preview'}
              <FiExternalLink className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Project Details - Updated */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          {descriptionParagraphs.map((paragraph, index) => (
            <Typography 
              key={index}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"
            >
              {paragraph.trim()}
            </Typography>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 