'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/common/Container'
import { Typography } from '@/components/ui/common/Typography'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container>
      <div className="text-center">
        <Typography variant="h1">
          Looks like you&apos;ve found a page that doesn&apos;t exist.
        </Typography>
        {/* Rest of the component */}
      </div>
    </Container>
  )
} 