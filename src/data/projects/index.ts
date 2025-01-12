import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    shortDescription: 'A brief description of the first project',
    description: 'A detailed description of the first project...',
    image: '/images/projects/project1.jpg',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/username/project1',
    link: 'https://project1.com'
  }
  // Add more projects here
] 