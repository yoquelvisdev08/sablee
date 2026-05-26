import type { ReactNode } from 'react'
import { TICKETS_URL } from '../constants/externalLinks'

type TicketsLinkProps = {
  className?: string
  children: ReactNode
  onClick?: () => void
  ariaLabel?: string
}

export default function TicketsLink({
  className,
  children,
  onClick,
  ariaLabel = 'Comprar boletas — Evento Nacional STEM Racing en TIX',
}: TicketsLinkProps) {
  return (
    <a
      href={TICKETS_URL}
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
