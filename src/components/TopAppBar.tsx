import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useCtaModal } from '../context/CtaModalContext'
import TicketsLink from './TicketsLink'

const LOGO_URL = '/images/logo-no-background.png'

const NAV_SECTIONS = ['home', 'team', 'about', 'shop', 'sponsors'] as const

type NavSection = (typeof NAV_SECTIONS)[number]

const NAV_LINKS: { section: NavSection; href: string; labelKey: string }[] = [
  { section: 'home', href: '#home', labelKey: 'nav.home' },
  { section: 'team', href: '#team', labelKey: 'nav.team' },
  { section: 'about', href: '#about', labelKey: 'nav.about' },
  { section: 'shop', href: '#shop', labelKey: 'nav.shop' },
  { section: 'sponsors', href: '#sponsors', labelKey: 'nav.sponsors' },
]

const HEADER_OFFSET = 72

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<NavSection>('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, locale, setLocale } = useLanguage()
  const { openCtaModal } = useCtaModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as NavSection)
        }
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -55% 0px`,
        threshold: [0.12, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer.observe(section!))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en')
  }

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const handleNavClick = () => {
    closeMobile()
  }

  const handleJoinClick = () => {
    closeMobile()
    openCtaModal()
  }

  const navLinkClass = (section: NavSection) => {
    const isActive = activeSection === section
    return [
      'relative font-mono text-[12px] font-medium uppercase tracking-[0.1em] transition-colors duration-300',
      isActive
        ? 'text-primary'
        : 'text-secondary hover:text-primary',
    ].join(' ')
  }

  return (
    <>
      <header
        className={[
          'hero-animate-in hero-animate-delay-1 fixed top-0 left-0 right-0 z-[9999] w-full transition-[background-color,box-shadow,border-color] duration-300',
          scrolled
            ? 'border-b-2 border-outline-variant/80 bg-surface/95 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-b border-outline-variant/30 bg-background/70 backdrop-blur-md',
        ].join(' ')}
      >
        {/* Progress accent */}
        <div
          className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-primary-container via-primary to-primary-fixed transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />

        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-[16px] md:h-[72px] md:px-[64px]">
          <a
            href="#home"
            onClick={handleNavClick}
            className="group inline-flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src={LOGO_URL}
              alt="SABLE Logo"
              className="h-11 w-auto md:h-14"
            />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant lg:inline">
              SABLE / 2026
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 rounded-sm border border-outline-variant/40 bg-surface-container-lowest/50 p-1 backdrop-blur-sm md:flex"
            aria-label="Main"
          >
            {NAV_LINKS.map(({ section, href, labelKey }) => (
              <a
                key={section}
                href={href}
                className={[
                  navLinkClass(section),
                  'rounded-sm px-4 py-2.5',
                  activeSection === section
                    ? 'bg-primary-container/30 shadow-[inset_0_0_12px_rgba(209,0,28,0.15)]'
                    : 'hover:bg-surface-container-high/60',
                ].join(' ')}
              >
                {t(labelKey)}
                {activeSection === section && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-primary" />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLocale}
              className="hidden font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-secondary transition-all duration-300 brutalist-border px-3 py-2 hover:border-primary hover:text-primary sm:inline-flex"
              aria-label={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>

            <TicketsLink
              ariaLabel={t('nav.tickets-aria')}
              className="hidden items-center gap-2 bg-primary-container px-4 py-2.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-on-primary-container transition-all duration-300 brutalist-border shadow-[3px_3px_0_#5d0412] hover:-translate-y-0.5 hover:bg-white hover:text-background hover:shadow-[4px_4px_0_#5d0412] active:scale-95 md:inline-flex lg:px-5"
            >
              <span className="material-symbols-outlined text-base">confirmation_number</span>
              {t('nav.tickets')}
            </TicketsLink>

            <button
              type="button"
              onClick={handleJoinClick}
              className="hidden items-center gap-2 border border-outline-variant/60 bg-surface-container-lowest/80 px-4 py-2.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 md:inline-flex lg:px-5"
            >
              <span className="material-symbols-outlined text-base">bolt</span>
              {t('nav.join')}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center border border-outline-variant/60 bg-surface-container-lowest/80 text-secondary transition-colors duration-300 hover:border-primary hover:text-primary md:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? t('nav.menu-close') : t('nav.menu-open')}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={[
          'fixed inset-0 z-[9998] md:hidden transition-opacity duration-300',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={closeMobile}
          tabIndex={mobileOpen ? 0 : -1}
          aria-label={t('nav.menu-close')}
        />

        <nav
          className={[
            'absolute inset-x-0 top-16 border-b-2 border-outline-variant bg-surface/98 px-[16px] py-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 md:top-[72px]',
            mobileOpen ? 'translate-y-0' : '-translate-y-4',
          ].join(' ')}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ section, href, labelKey }) => (
              <li key={section}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className={[
                    'flex items-center justify-between border-l-4 px-4 py-4 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-colors',
                    activeSection === section
                      ? 'border-primary bg-primary-container/20 text-primary'
                      : 'border-transparent text-secondary hover:border-outline-variant hover:bg-surface-container-low hover:text-primary',
                  ].join(' ')}
                >
                  {t(labelKey)}
                  <span className="material-symbols-outlined text-lg opacity-60">
                    arrow_forward
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 border-t border-outline-variant/50 pt-6">
            <TicketsLink
              ariaLabel={t('nav.tickets-aria')}
              onClick={closeMobile}
              className="flex w-full flex-col items-start gap-1 border-l-4 border-white bg-primary-container px-6 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-white shadow-[4px_4px_0_#5d0412]"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined">confirmation_number</span>
                {t('nav.tickets')}
              </span>
              <span className="font-body text-[11px] normal-case tracking-normal text-on-primary-container/85">
                {t('hero.cta-tickets-date')}
              </span>
            </TicketsLink>
            <button
              type="button"
              onClick={toggleLocale}
              className="w-full border border-outline-variant px-4 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              {locale === 'en' ? 'ES — Español' : 'EN — English'}
            </button>
            <button
              type="button"
              onClick={handleJoinClick}
              className="flex w-full items-center justify-center gap-2 border border-outline-variant/60 bg-surface-container-lowest/80 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-secondary"
            >
              <span className="material-symbols-outlined">bolt</span>
              {t('nav.join')}
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
