'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { HeroSection } from '@/components/sections/about/HeroSection'
import { SkillsSection } from '@/components/sections/about/SkillsSection'
import { ContactSection } from '@/components/sections/about/ContactSection'

export default function AboutPage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if we have a hash in the URL
    const hash = window.location.hash
    if (hash === '#contact') {
      // Find the contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        // Smooth scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  return (
    <main className="flex flex-col min-h-screen">
      <div className="h-16" /> {/* Navbar spacer */}
      <div className="flex-1 flex flex-col justify-center">
        <HeroSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  )
} 