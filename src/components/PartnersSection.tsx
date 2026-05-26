import { useCallback, useEffect, useState } from 'react'
import { PARTNERS, partnerTranslationKey, type Partner } from '../data/partners'
import { useLanguage } from '../context/LanguageContext'
import { useSectionReveal } from '../hooks/useSectionReveal'

const SABLE_LOGO_URL = '/images/logo-no-background.png'
const LOGO_LIGHT_PAD = 'rounded-sm bg-white px-3 py-1.5'

const partnerLogoClasses = (partner: Partner) =>
  [partner.logoClass, partner.lightPad ? LOGO_LIGHT_PAD : ''].join(' ')

const SABLE_CARD_CLASS =
  'h-[3.25rem] w-auto opacity-90 transition-transform duration-500 sm:h-[3.75rem] md:h-[4.25rem]'

const SABLE_ZOOM_CLASS = 'h-20 w-auto sm:h-24 md:h-28'

export default function PartnersSection() {
  const { t } = useLanguage()
  const { sectionRef, revealClass, panelClass, staggerStyle } = useSectionReveal()
  const [activePartner, setActivePartner] = useState<Partner | null>(null)

  const closePreview = useCallback(() => setActivePartner(null), [])

  useEffect(() => {
    if (!activePartner) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreview()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activePartner, closePreview])

  const categoryLabel = (category: Partner['category']) =>
    t(`partners.category.${category}`)

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className="relative overflow-hidden border-t border-outline-variant/25 bg-background py-10 md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 halftone-bg opacity-[0.05]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16">
        <header className={`mx-auto max-w-2xl text-center ${revealClass('hero-animate-delay-1')}`}>
          <p className="font-body text-sm uppercase tracking-[0.18em] text-primary">
            {t('partners.subtitle')}
          </p>
          <h2 className="mt-1.5 font-headline text-xl uppercase tracking-wide text-white md:text-2xl lg:text-3xl">
            {t('partners.heading')}
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
            {t('partners.intro')}
          </p>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-on-surface-variant/70">
            {t('partners.tap-hint')}
          </p>
        </header>

        <div className="mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7 xl:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <button
              key={partner.id}
              type="button"
              onClick={() => setActivePartner(partner)}
              className={[
                'partner-card group flex w-full min-w-0 cursor-pointer flex-col border border-outline-variant/30 bg-surface-container-low/50 px-5 py-5 text-left sm:px-6 sm:py-6',
                'hover:border-primary/45 hover:bg-surface-container-low active:scale-[0.99]',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                panelClass(),
              ].join(' ')}
              style={staggerStyle(index, 0.08, 0.12)}
              aria-label={`${t('partners.view-partner')}: ${t(partnerTranslationKey(partner.slug, 'name'))}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-secondary">
                  {t('partners.slot-code')} {partner.id}
                </span>
                <span className="border border-primary-container/40 bg-primary-container/15 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-primary-fixed">
                  {categoryLabel(partner.category)}
                </span>
              </div>

              <div className="partner-card-logos mt-4 flex w-full flex-col items-center gap-3">
                <img
                  src={SABLE_LOGO_URL}
                  alt="SABLE"
                  className={`${SABLE_CARD_CLASS} group-hover:scale-[1.03]`}
                />
                <span
                  className="partner-card-bridge partner-card-glow h-px w-10 bg-outline-variant/50"
                  aria-hidden="true"
                />
                <img src={partner.logo} alt="" className={partnerLogoClasses(partner)} />
              </div>

              <div className="mt-5 flex flex-1 flex-col gap-2">
                <h3 className="font-headline text-lg uppercase leading-tight tracking-tight text-white md:text-xl">
                  {t(partnerTranslationKey(partner.slug, 'name'))}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">
                  {t(partnerTranslationKey(partner.slug, 'role'))}
                </p>
                <p className="line-clamp-3 font-body text-xs leading-relaxed text-on-surface-variant sm:text-[13px]">
                  {t(partnerTranslationKey(partner.slug, 'desc'))}
                </p>
              </div>

              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-secondary transition-colors duration-300 group-hover:text-primary">
                {t('partners.read-more')}
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activePartner && (
        <div
          className="popup-backdrop-in fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto p-4 sm:p-8"
          role="presentation"
          onClick={closePreview}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="partner-preview-title"
            className="popup-panel-in relative my-auto w-full max-w-lg border-2 border-outline-variant bg-surface-container-low sm:max-w-xl md:max-w-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center border border-outline-variant/70 bg-background/90 text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
              aria-label={t('partners.view-close')}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  {t('partners.slot-code')} {activePartner.id}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-secondary">
                  {categoryLabel(activePartner.category)}
                </span>
              </div>

              <h3
                id="partner-preview-title"
                className="mt-2 font-headline text-2xl uppercase tracking-tight text-white sm:text-3xl"
              >
                {t(partnerTranslationKey(activePartner.slug, 'name'))}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-fixed">
                {t(partnerTranslationKey(activePartner.slug, 'role'))}
              </p>

              <div className="mt-6 flex flex-col items-center gap-5 border border-outline-variant/30 bg-background/60 px-4 py-6 sm:gap-6 sm:py-8">
                <img src={SABLE_LOGO_URL} alt="SABLE" className={SABLE_ZOOM_CLASS} />
                <span className="h-px w-16 bg-primary-container/60" aria-hidden="true" />
                <div
                  className={[
                    'flex items-center justify-center',
                    activePartner.lightPad ? 'rounded-sm bg-white px-4 py-3' : '',
                  ].join(' ')}
                >
                  <img
                    src={activePartner.logo}
                    alt={t(partnerTranslationKey(activePartner.slug, 'name'))}
                    className={activePartner.zoomLogoClass}
                  />
                </div>
              </div>

              <p className="mt-5 font-body text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                {t(partnerTranslationKey(activePartner.slug, 'desc'))}
              </p>

              <blockquote className="mt-4 border-l-2 border-primary-container bg-surface-container-lowest/60 px-4 py-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-secondary">
                  {t('partners.thanks-heading')}
                </p>
                <p className="mt-2 font-body text-sm italic leading-relaxed text-on-surface-variant sm:text-[15px]">
                  {t(partnerTranslationKey(activePartner.slug, 'thanks'))}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
