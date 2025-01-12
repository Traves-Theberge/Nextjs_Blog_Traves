import { Container } from '@/components/ui/common/Container'
import { Typography } from '@/components/ui/common/Typography'
import { SocialLinks } from '@/components/ui/common/SocialLinks'

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Container>
        <div className="h-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <Typography variant="small" className="text-center">
            © {new Date().getFullYear()} Traves Theberge. All rights reserved.
          </Typography>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  )
} 