import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSectionReveal } from '../hooks/useSectionReveal'

const SABLE_LOGO_URL = '/images/logo-no-background.png'
const SOLVEX_LOGO_URL = '/images/logo-solvexsvg.svg'
const MOTORUEDAS_LOGO_URL = '/images/motoruedas.png'
const RBW_LOGO_URL = '/images/autoimport-rbw.png'
const APOLO27_LOGO_URL = '/images/apolo27.png'
const JUNTA_SANLUIS_LOGO_URL = '/images/junta-sanluis.png'

type Partner = {
  id: string
  logo: string
  alt: string
  labelKey: string
  logoClass: string
  zoomLogoClass: string
  lightPad?: boolean
}

const LOGO_LIGHT_PAD = 'rounded-sm bg-white px-3 py-1.5'

const partnerLogoClasses = (partner: Partner) =>
  [partner.logoClass, partner.lightPad ? LOGO_LIGHT_PAD : ''].join(' ')

const PARTNERS: Partner[] = [
  {
    id: '01',
    logo: SOLVEX_LOGO_URL,
    alt: 'Solvex',
    labelKey: 'partners.solvex-label',
    logoClass: 'h-8 w-auto sm:h-9 md:h-10',
    zoomLogoClass: 'h-14 w-auto sm:h-16 md:h-20',
  },
  {
    id: '02',
    logo: MOTORUEDAS_LOGO_URL,
    alt: 'Motoruedas',
    labelKey: 'partners.motoruedas-label',
    logoClass:
      'h-9 w-auto max-w-[11rem] object-contain sm:h-10 sm:max-w-[12rem] md:h-11 md:max-w-[13rem]',
    zoomLogoClass:
      'h-16 w-auto max-w-[min(90vw,18rem)] object-contain sm:h-20 sm:max-w-[20rem] md:h-24',
    lightPad: true,
  },
  {
    id: '03',
    logo: RBW_LOGO_URL,
    alt: 'RBW Auto Import',
    labelKey: 'partners.rbw-label',
    logoClass:
      'h-9 w-auto max-w-[11rem] object-contain sm:h-10 sm:max-w-[12rem] md:h-11 md:max-w-[13rem]',
    zoomLogoClass:
      'h-16 w-auto max-w-[min(90vw,18rem)] object-contain sm:h-20 sm:max-w-[20rem] md:h-24',
    lightPad: true,
  },
  {
    id: '04',
    logo: APOLO27_LOGO_URL,
    alt: 'Apolo 27 GT',
    labelKey: 'partners.apolo27-label',
    logoClass:
      'h-9 w-auto max-w-[9rem] object-contain sm:h-10 sm:max-w-[10rem] md:h-11 md:max-w-[11rem]',
    zoomLogoClass:
      'h-16 w-auto max-w-[min(90vw,16rem)] object-contain sm:h-20 sm:max-w-[18rem] md:h-24',
    lightPad: true,
  },
  {
    id: '05',
    logo: JUNTA_SANLUIS_LOGO_URL,
    alt: 'Junta Municipal San Luis',
    labelKey: 'partners.junta-sanluis-label',
    logoClass:
      'h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12',
    zoomLogoClass:
      'h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28',
    lightPad: true,
  },
]

const SABLE_CARD_CLASS =
  'h-[4.5rem] w-auto opacity-90 sm:h-[5.25rem] md:h-[5.75rem] lg:h-[7.5rem]'

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

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className="border-t border-outline-variant/25 bg-background py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className={`text-center ${revealClass('hero-animate-delay-1')}`}>
          <p className="font-body text-sm uppercase tracking-[0.18em] text-primary">
            {t('partners.subtitle')}
          </p>
          <h2 className="mt-1.5 font-headline text-xl uppercase tracking-wide text-white md:text-2xl">
            {t('partners.heading')}
          </h2>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-on-surface-variant/70">
            {t('partners.tap-hint')}
          </p>
        </div>

        <div className="mt-6 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <button
              key={partner.id}
              type="button"
              onClick={() => setActivePartner(partner)}
              className={[
                'flex w-full min-w-0 cursor-pointer flex-col items-center border border-outline-variant/25 px-6 py-6 text-center sm:px-8 sm:py-7 lg:min-h-[280px] lg:px-10 lg:py-8',
                'transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-lowest/40 active:scale-[0.99]',
                panelClass(),
              ].join(' ')}
              style={staggerStyle(index, 0.08, 0.14)}
              aria-label={`${t('partners.view-partner')}: ${partner.alt}`}
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-secondary">
                {t('partners.slot-code')} {partner.id}
              </span>

              <div className="mt-3 flex w-full flex-col items-center gap-3">
                <img src={SABLE_LOGO_URL} alt="SABLE" className={SABLE_CARD_CLASS} />
                <span className="h-px w-12 bg-outline-variant/40" aria-hidden="true" />
                <img src={partner.logo} alt="" className={partnerLogoClasses(partner)} />
              </div>

              <p className="mt-4 max-w-[18rem] font-body text-xs leading-relaxed text-on-surface-variant sm:text-[13px] md:max-w-none">
                {t(partner.labelKey)}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activePartner && (
        <div
          className="popup-backdrop-in fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8"
          role="presentation"
          onClick={closePreview}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="partner-preview-title"
            className="popup-panel-in relative w-full max-w-lg border-2 border-outline-variant bg-surface-container-low p-5 sm:max-w-xl sm:p-7 md:max-w-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center border border-outline-variant/70 bg-background/80 text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
              aria-label={t('partners.view-close')}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {t('partners.slot-code')} {activePartner.id}
            </span>
            <h3
              id="partner-preview-title"
              className="mt-1 font-headline text-xl uppercase text-white sm:text-2xl"
            >
              {activePartner.alt}
            </h3>

            <div className="mt-6 flex flex-col items-center gap-5 border border-outline-variant/30 bg-background/60 px-4 py-6 sm:gap-6 sm:py-8">
              <img src={SABLE_LOGO_URL} alt="SABLE" className={SABLE_ZOOM_CLASS} />
              <span className="h-px w-16 bg-outline-variant/50" aria-hidden="true" />
              <div
                className={[
                  'flex items-center justify-center',
                  activePartner.lightPad ? 'rounded-sm bg-white px-4 py-3' : '',
                ].join(' ')}
              >
                <img
                  src={activePartner.logo}
                  alt={activePartner.alt}
                  className={activePartner.zoomLogoClass}
                />
              </div>
            </div>

            <p className="mt-5 text-center font-body text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
              {t(activePartner.labelKey)}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
