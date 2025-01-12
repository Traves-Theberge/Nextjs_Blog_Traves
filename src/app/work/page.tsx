import { Metadata } from 'next'
import { WorkLayout } from '@/components/ui/work/WorkLayout'

export const metadata: Metadata = {
  title: 'Projects | Traves Theberge',
  description: 'Showcasing my projects and professional work in software development and automation.'
}

export default function WorkPage() {
  return <WorkLayout />
} 