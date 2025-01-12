"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "../common/Container";
import { Typography } from "../common/Typography";
import { BlogCard } from "../common/BlogCard";
import { useTheme } from 'next-themes';
import type { BlogPost } from '@/types/blog';

interface LatestPostsProps {
  posts: BlogPost[];
}

export const LatestPosts = ({ posts }: LatestPostsProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-start pt-20">
      <Container className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                Latest Posts
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-lg font-medium relative overflow-hidden rounded-xl px-6 py-2"
              >
                <span className={`relative z-10 transition-colors duration-300
                  ${resolvedTheme === 'dark' 
                    ? 'text-blue-400 group-hover:text-white' 
                    : 'text-blue-600 group-hover:text-white'
                  }`}
                >
                  View all posts
                  <FiArrowRight className="inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
