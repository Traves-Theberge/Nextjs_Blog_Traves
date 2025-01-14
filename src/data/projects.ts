import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'lonestar-ai',
    title: 'Lonestar AI',
    shortDescription: 'AI-powered sales companion for door-to-door professionals',
    description: `Lonestar AI revolutionizes door-to-door sales with an innovative AI-powered companion. 
    This cutting-edge platform delivers real-time, context-aware assistance to sales professionals in the field.

    At its core, Lonestar AI features an intelligent knowledge base that continuously adapts to different 
    sales scenarios. It analyzes successful sales patterns to provide personalized coaching, helping 
    representatives handle objections effectively and close deals with confidence. The system also processes 
    technical data sheets and specifications, providing in-context mathematical calculations and technical 
    insights to support informed decision-making.

    Key Features:
    • Smart Learning System - Delivers relevant sales techniques in real-time
    • Technical Analysis - Processes data sheets and provides mathematical calculations
    • Objection Assistant - Provides strategic responses to common challenges
    • Interactive Training - Practice modules based on real-world scenarios
    • Performance Analytics - Track progress with detailed insights
    • Mobile Optimization - Designed for seamless field use`,
    image: '/images/Lonestar.webp',
    technologies: [
      'Next.js',
      'OpenAI API',
      'Pinecone',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Supabase',
      'Vercel',
      'Mobile-first Design'
    ],
  },
  {
    id: 'golden-earth',
    title: 'Golden Earth Mini Homes',
    shortDescription: 'Sustainable luxury mini homes with integrated AI assistance',
    description: `A showcase website for Golden Earth Mini Homes, featuring our collection of sustainable 
    luxury housing solutions. The platform presents our range of eco-friendly homes through an intuitive 
    catalog system, complete with detailed specifications and environmental certifications.

    Visitors can explore:
    • One-bedroom luxury spaces
    • Two-bedroom family homes
    • Custom-designed luxury villas
    • Sustainable material specifications
    • Solar power integration details
    • Green building practices

    The site includes an AI-powered chatbot to assist with inquiries about home specifications, 
    customization options, and sustainability features.`,
    image: '/images/golden_earth.webp',
    technologies: [
      'Next.js 14',
      'Three.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Azure Web App',
      'Azure AI Foundary'
    ],
    link: 'https://golden-earth.com'
  }
] 