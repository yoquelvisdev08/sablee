import { useCallback, useEffect } from 'react'
import { useCtaModal } from '../context/CtaModalContext'
import { useLanguage } from '../context/LanguageContext'
import InstagramLink from './InstagramLink'
import TicketsLink from './TicketsLink'

const TEAM_IMAGE_URL = '/images/team-sables.jpg'

export default function CtaModal() {
  const { isOpen, closeCtaModal } = useCtaModal()
  const { t } = useLanguage()

  const dismiss = useCallback(() => {
    closeCtaModal(true)
  }, [closeCtaModal])

  const goToSponsors = useCallback(() => {
    closeCtaModal(true)
    window.setTimeout(() => {
      document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }, [closeCtaModal])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [dismiss, isOpen])

  if (!isOpen) return null

  return (
    <div
      className="popup-backdrop-in fixed inset-0 z-[10000] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cta-modal-title"
        className="popup-panel-in relative w-full max-w-[min(100%,22rem)] overflow-hidden border-2 border-outline-variant bg-background shadow-[0_24px_80px_rgba(0,0,0,0.65)] sm:max-w-md md:max-w-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[3/4] w-full sm:aspect-[5/6] md:aspect-[16/14]">
          <img
            src={TEAM_IMAGE_URL}
            alt={t('cta-modal.image-alt')}
            className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/88 to-background/20" />
          <div className="absolute inset-0 grunge opacity-25 mix-blend-overlay" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/85 to-transparent"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={dismiss}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center border border-outline-variant/70 bg-background/80 text-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
            aria-label={t('cta-modal.close')}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-4 sm:p-5">
            <div>
              <span className="border-l-2 border-primary pl-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                {t('cta-modal.badge')}
              </span>
              <h2
                id="cta-modal-title"
                className="mt-2 font-headline text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-3xl"
              >
                {t('cta-modal.title')}
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                {t('cta-modal.desc')}
              </p>
            </div>

            <TicketsLink
              ariaLabel={t('cta-modal.tickets-aria')}
              onClick={() => closeCtaModal(true)}
              className="group flex min-h-[88px] w-full flex-col items-start justify-between border-l-4 border-white bg-primary-container p-3 text-left transition-all duration-300 brutalist-border shadow-[3px_3px_0_#5d0412] hover:-translate-y-0.5 hover:bg-white hover:text-background hover:shadow-[4px_4px_0_#5d0412] active:scale-[0.98] sm:min-h-[96px] sm:p-4"
            >
              <span className="flex w-full items-start justify-between gap-2">
                <span className="material-symbols-outlined text-xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-background">
                  confirmation_number
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-on-primary-container/90 transition-colors duration-300 group-hover:text-background/80">
                  {t('hero.cta-tickets-date')}
                </span>
              </span>
              <span>
                <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white group-hover:text-background sm:text-[12px]">
                  {t('cta-modal.tickets')}
                </span>
                <span className="mt-1 block font-body text-[11px] leading-snug text-on-primary-container/85 group-hover:text-background/80 sm:text-xs">
                  {t('cta-modal.tickets-desc')}
                </span>
              </span>
            </TicketsLink>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={goToSponsors}
                className="group flex min-h-[88px] flex-col items-start justify-between border border-outline-variant/60 bg-surface-container-lowest/90 p-3 text-left transition-all duration-300 hover:border-primary hover:bg-surface-container-low active:scale-[0.98] sm:min-h-[96px] sm:p-4"
              >
                <span className="material-symbols-outlined text-xl text-primary transition-transform duration-300 group-hover:scale-110">
                  handshake
                </span>
                <span>
                  <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white sm:text-[12px]">
                    {t('cta-modal.sponsor')}
                  </span>
                  <span className="mt-1 block font-body text-[11px] leading-snug text-on-surface-variant sm:text-xs">
                    {t('cta-modal.sponsor-desc')}
                  </span>
                </span>
              </button>

              <InstagramLink
                onClick={() => closeCtaModal(true)}
                className="group flex min-h-[88px] flex-col items-start justify-between border border-outline-variant/60 bg-surface-container-lowest/90 p-3 text-left transition-all duration-300 hover:border-primary hover:bg-surface-container-low active:scale-[0.98] sm:min-h-[96px] sm:p-4"
              >
                <span className="material-symbols-outlined text-xl text-primary transition-transform duration-300 group-hover:scale-110">
                  photo_camera
                </span>
                <span>
                  <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white sm:text-[12px]">
                    {t('cta-modal.support')}
                  </span>
                  <span className="mt-1 block font-body text-[11px] leading-snug text-on-surface-variant sm:text-xs">
                    {t('cta-modal.support-desc')}
                  </span>
                </span>
              </InstagramLink>
            </div>

            <button
              type="button"
              onClick={dismiss}
              className="w-full py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant/75 transition-colors duration-300 hover:text-primary"
            >
              {t('cta-modal.dismiss')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
