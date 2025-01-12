import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface AvatarProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export const Avatar = ({
  src,
  alt,
  size = 40,
  className,
}: AvatarProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full',
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  )
} 