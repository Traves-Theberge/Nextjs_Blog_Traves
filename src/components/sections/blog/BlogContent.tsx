'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface BlogContentImageProps {
  image: string
  alt: string
}

export const BlogContentImage = ({ image, alt }: BlogContentImageProps) => {
  return (
    <div className="relative w-full aspect-[16/9] my-8">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 80vw,
               70vw"
        quality={90}
      />
    </div>
  )
} 