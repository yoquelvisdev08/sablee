import { useLanguage } from '../context/LanguageContext'
import { useCtaModal } from '../context/CtaModalContext'
import InstagramLink from './InstagramLink'
import TicketsLink from './TicketsLink'
import { useSectionReveal } from '../hooks/useSectionReveal'

const LOGO_URL = '/images/logo-no-background.png'

export default function Footer() {
  const { t, locale, setLocale } = useLanguage()
  const { openCtaModal } = useCtaModal()
  const { sectionRef, revealClass } = useSectionReveal({ threshold: 0.12 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en')
  }

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="relative overflow-hidden border-t-2 border-primary-container bg-background"
    >
      <div className="pointer-events-none absolute inset-0 halftone-bg opacity-[0.07]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-8 sm:px-6 md:px-12 md:py-9 lg:px-16">
        <div
          className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 ${revealClass('hero-animate-delay-1')}`}
        >
          <div className="flex min-w-0 items-center gap-4 md:gap-5">
            <a
              href="#home"
              className="shrink-0 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img src={LOGO_URL} alt="SABLE Logo" className="h-11 w-auto md:h-14" />
            </a>
            <div className="min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                {t('footer.badge')}
              </span>
              <p className="mt-1 line-clamp-2 font-body text-[14px] leading-snug text-on-surface-variant md:line-clamp-1">
                {t('footer.tagline')}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
            <div className="flex items-center gap-2 border-l-2 border-primary-container bg-surface-container-lowest/80 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em]">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
              <span className="text-primary-fixed">{t('footer.status')}</span>
              <span className="text-outline">/</span>
              <span className="font-bold text-secondary">{t('footer.status-value')}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={toggleLocale}
                className="px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-secondary transition-colors duration-300 brutalist-border hover:border-primary hover:text-primary"
              >
                {locale === 'en' ? 'ES' : 'EN'}
              </button>

              <TicketsLink
                ariaLabel={t('footer.tickets-aria')}
                className="inline-flex items-center gap-1.5 bg-primary-container px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-on-primary-container transition-all duration-300 brutalist-border hover:bg-white hover:text-background active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">confirmation_number</span>
                {t('footer.tickets')}
              </TicketsLink>

              <button
                type="button"
                onClick={openCtaModal}
                className="inline-flex items-center gap-1.5 border border-outline-variant/60 bg-surface-container-lowest/80 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">bolt</span>
                {t('nav.join')}
              </button>

              <InstagramLink
                ariaLabel={t('nav.instagram')}
                className="inline-flex h-9 w-9 items-center justify-center border border-outline-variant/60 bg-surface-container-lowest/80 text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">photo_camera</span>
              </InstagramLink>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex h-9 w-9 items-center justify-center border border-outline-variant/60 bg-surface-container-lowest/80 text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
                aria-label={t('footer.back-to-top')}
              >
                <span className="material-symbols-outlined text-xl">north</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 flex flex-col items-center justify-between gap-2 border-t border-outline-variant/40 pt-4 sm:flex-row ${revealClass('hero-animate-delay-2')}`}
        >
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-outline sm:text-left">
            {t('footer.copyright')}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-on-surface-variant/70">
            SABLE / 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
