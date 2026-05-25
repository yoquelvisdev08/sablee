import { useEffect, useRef, useState } from 'react'

type SectionRevealOptions = {
  threshold?: number
  rootMargin?: string
}

export function useSectionReveal(options: SectionRevealOptions = {}) {
  const { threshold = 0.08, rootMargin = '0px 0px -6% 0px' } = options
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionVisible, setSectionVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const revealClass = (delayClass = 'hero-animate-delay-1') =>
    [
      'section-reveal',
      sectionVisible ? 'section-reveal-visible' : 'section-reveal-hidden',
      delayClass,
    ].join(' ')

  const panelClass = () =>
    sectionVisible
      ? 'section-reveal section-reveal-visible'
      : 'section-reveal section-reveal-hidden'

  const staggerStyle = (index: number, step = 0.1, base = 0.12) =>
    sectionVisible ? { transitionDelay: `${base + index * step}s` } : undefined

  return {
    sectionRef,
    sectionVisible,
    revealClass,
    panelClass,
    staggerStyle,
  }
}
