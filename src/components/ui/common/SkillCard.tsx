'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/types/skills'

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1 
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="relative w-full aspect-[3/4] group"
    >
      {/* Card content */}
      <div className={`relative h-full p-6 rounded-2xl backdrop-blur-xl overflow-hidden
        bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-900/50 dark:to-gray-900/60
        shadow-lg hover:shadow-xl transition-all duration-300
        border border-white/10 dark:border-gray-800/50`}
      >
        {/* Gradient background effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-10`} />
        </div>

        <div className="relative h-full flex flex-col">
          {/* Icon with animation */}
          <motion.span 
            className="text-3xl mb-4 block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {skill.icon}
          </motion.span>

          {/* Category and Title */}
          <div className="space-y-1 mb-4">
            <h3 className="text-gray-400 dark:text-gray-500 text-sm font-medium uppercase tracking-wider">
              {skill.category}
            </h3>
            <h4 className="text-gray-800 dark:text-white text-lg font-bold">
              {skill.title}
            </h4>
          </div>

          {/* Divider */}
          <div className={`h-px w-full bg-gradient-to-r ${skill.gradient} opacity-20 mb-4`} />

          {/* Skills list */}
          <ul className="flex-1 space-y-2">
            {skill.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-2 group/item"
              >
                <motion.div 
                  className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r ${skill.gradient}
                    flex items-center justify-center`}
                  whileHover={{ scale: 1.2 }}
                >
                  <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium
                  group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 