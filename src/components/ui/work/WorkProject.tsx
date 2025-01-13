'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Typography } from '../common/Typography'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import type { Project } from '@/types/project'
import { GradientButton } from '../common/GradientButton'

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

        {/* Action Button - Updated to use shared component */}
        <div className="flex">
          <GradientButton
            href={project.id === 'golden-earth' ? project.link : "mailto:traves.theberge@gmail.com?subject=Project Preview Request"}
            external={project.id === 'golden-earth'}
          >
            {project.id === 'golden-earth' ? 'Visit Website' : 'Request Preview'}
            <FiExternalLink className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </GradientButton>
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