import type { ReactNode } from 'react'
import { INSTAGRAM_URL } from '../constants/externalLinks'

type InstagramLinkProps = {
  className?: string
  children: ReactNode
  onClick?: () => void
  ariaLabel?: string
}

export default function InstagramLink({
  className,
  children,
  onClick,
  ariaLabel = 'Instagram @sablee.st',
}: InstagramLinkProps) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  )
}
