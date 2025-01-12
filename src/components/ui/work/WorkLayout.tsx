'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../common/Container'
import { Typography } from '../common/Typography'
import { useTheme } from 'next-themes'
import { WorkProject } from './WorkProject'
import { projects } from '@/data/projects'
import type { Project } from '@/types/project'
import { ErrorBoundary } from '@/components/core/ErrorBoundary'

const ProjectSkeleton = () => (
  <div className="space-y-8 animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
)

export function WorkLayout() {
  const [activeProject, setActiveProject] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setIsLoading(true)
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [activeProject, mounted])

  if (!mounted) {
    return <ProjectSkeleton />
  }

  return (
    <ErrorBoundary>
      <section className="min-h-screen flex flex-col lg:flex-row items-stretch">
        {/* Left Panel */}
        <div className="w-full lg:w-[60%] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Container className="h-full p-6 lg:p-12">
            <div className="sticky top-32 space-y-12">
              <AnimatePresence mode="wait">
                <div className="space-y-8">
                  {projects.map((project: Project, index: number) => (
                    <motion.button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`w-full text-left transition-all duration-300
                        ${index === activeProject
                          ? 'scale-100'
                          : 'scale-95 opacity-50 hover:opacity-75'
                        }
                      `}
                      whileHover={{ x: 20 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Typography 
                        variant="h2"
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent
                          ${resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-white via-blue-400 to-white'
                            : 'bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900'
                          }
                        `}
                      >
                        {project.title}
                      </Typography>
                      <Typography className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                        {project.shortDescription}
                      </Typography>
                    </motion.button>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </Container>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-[40%] bg-white dark:bg-gray-900">
          <Container className="h-full p-6 lg:p-12">
            <div className="sticky top-32">
              <ErrorBoundary>
                {isLoading ? (
                  <ProjectSkeleton />
                ) : (
                  <WorkProject project={projects[activeProject]} />
                )}
              </ErrorBoundary>
            </div>
          </Container>
        </div>
      </section>
    </ErrorBoundary>
  )
} 