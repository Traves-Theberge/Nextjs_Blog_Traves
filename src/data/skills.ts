import { Skill } from '@/types/skills'

export const skills: Skill[] = [
  {
    category: 'Frontend',
    title: ' Web Development',
    items: ['React/Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Python', 'HTML', 'CSS'],
    icon: '💻',
    gradient: 'from-[#5E3AEE] to-[#C56BF0]'
  },
  {
    category: 'Backend',
    title: 'Server Architecture',
    items: ['Node.js', 'Flask', 'Azure', 'PostgreSQL', 'REST API', 'Vector databases'],
    icon: '⚙️',
    gradient: 'from-[#845EEE] to-[#C56BF0]'
  },
  {
    category: 'AI & ML',
    title: 'Artificial Intelligence',
    items: ['Agents', 'Chatbots', 'OpenAI', 'Azure AI', 'Prompt Engineering', 'Automation'],
    icon: '✨',
    gradient: 'from-[#7B3AEE] to-[#D56BF0]'
  },
  {
    category: 'Design',
    title: 'User Experience',
    items: ['UI/UX', 'Design Systems', 'Accessibility', 'Design Thinking', 'Responsive Design'],
    icon: '🎨',
    gradient: 'from-[#6E3AEE] to-[#E56BF0]'
  }
] 