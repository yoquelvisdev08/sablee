import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSectionReveal } from '../hooks/useSectionReveal'
import TicketsLink from './TicketsLink'

const SLOT_RACING_URL = '/images/slot-racing.jpg'
const STEM_VIDEO_URL = '/images/video.mp4'

const FEATURES = [
  {
    id: 'engineering',
    icon: 'precision_manufacturing',
    titleKey: 'about.feat1-title',
    descKey: 'about.feat1-desc',
    code: 'ENG-01',
  },
  {
    id: 'aerodynamics',
    icon: 'air',
    titleKey: 'about.feat2-title',
    descKey: 'about.feat2-desc',
    code: 'AERO-02',
  },
] as const

export default function AboutSection() {
  const { sectionRef, revealClass, panelClass, staggerStyle } = useSectionReveal()
  const { t } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openVideo = useCallback(() => setVideoOpen(true), [])

  const closeVideo = useCallback(() => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setVideoOpen(false)
  }, [])

  useEffect(() => {
    if (!videoOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo()
    }

    window.addEventListener('keydown', onKeyDown)

    const playTimer = window.setTimeout(() => {
      void videoRef.current?.play()
    }, 120)

    return () => {
      window.clearTimeout(playTimer)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [videoOpen, closeVideo])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden bg-surface-dim py-8 md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 halftone-bg opacity-[0.07]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-primary-container/35" aria-hidden="true" />

      <div className="relative z-10 w-full">
        <div
          className={`mb-5 flex flex-wrap items-end justify-between gap-4 px-4 md:mb-7 md:px-8 lg:px-12 ${revealClass('hero-animate-delay-1')}`}
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
              {t('about.subtitle')}
            </span>
            <h2 className="mt-1 font-headline text-3xl uppercase text-white md:text-4xl lg:text-[2.75rem]">
              {t('about.heading')}
            </h2>
          </div>

          <div className="flex items-center gap-2 border border-outline-variant/50 bg-surface-container-lowest/80 px-3 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant">
              {t('about.watermark')}
            </span>
          </div>
        </div>

        <div
          className={`relative w-full overflow-hidden border-y border-outline-variant/50 bg-surface-container-low ${revealClass('hero-animate-delay-2')}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr]">
            <aside className="hidden flex-col justify-center gap-4 border-b border-outline-variant/40 p-5 lg:flex lg:border-b-0 lg:border-r lg:p-6 xl:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary">
                {t('about.subtitle')}
              </span>

              {FEATURES.map((feature, index) => (
                <article
                  key={feature.id}
                  className={`border border-outline-variant/45 bg-surface-container-lowest/60 p-4 transition-colors duration-300 hover:border-primary/40 ${panelClass()}`}
                  style={staggerStyle(index, 0.12, 0.2)}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary-container/50 bg-primary-container/15">
                      <span className="material-symbols-outlined text-xl text-primary">
                        {feature.icon}
                      </span>
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-secondary">
                      {feature.code}
                    </span>
                  </div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-white">
                    {t(feature.titleKey)}
                  </h4>
                  <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                    {t(feature.descKey)}
                  </p>
                </article>
              ))}

              <div className="mt-1 border-t border-outline-variant/30 pt-4">
                <p className="font-headline text-2xl font-black uppercase tracking-tighter text-white/10">
                  {t('about.watermark')}
                </p>
              </div>
            </aside>

            <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-[1fr_minmax(320px,55%)] md:min-h-[380px] lg:min-h-[460px] xl:min-h-[500px]">
              <div className="order-2 flex flex-col justify-center gap-4 border-outline-variant/40 p-5 md:order-1 md:border-r md:p-6 lg:gap-5 lg:p-8">
                <div>
                  <h3 className="font-headline text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
                    {t('about.title')}
                  </h3>
                  <p className="mt-1 font-headline text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase tracking-tight text-primary">
                    {t('about.title-accent')}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="font-body text-[15px] leading-relaxed text-on-surface-variant md:text-base md:leading-relaxed">
                    {t('about.desc1')}
                  </p>
                  <p className="font-body text-[15px] leading-relaxed text-on-surface-variant md:text-base md:leading-relaxed">
                    {t('about.desc2')}
                  </p>
                </div>

                <div
                  className={`flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap ${revealClass('hero-animate-delay-3')}`}
                >
                  <TicketsLink
                    ariaLabel={t('about.tickets-aria')}
                    className="group inline-flex flex-1 flex-col items-start gap-1 border-l-4 border-white bg-primary-container px-4 py-3 text-left transition-all duration-300 brutalist-border shadow-[4px_4px_0_#5d0412] hover:-translate-y-0.5 hover:bg-white hover:text-background hover:shadow-[6px_6px_0_#5d0412] active:scale-[0.99] sm:min-w-[240px] sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-3.5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-2xl text-white transition-colors duration-300 group-hover:text-background">
                        confirmation_number
                      </span>
                      <span className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-white transition-colors duration-300 group-hover:text-background">
                        {t('about.tickets-cta')}
                      </span>
                    </span>
                    <span className="font-body text-[11px] leading-snug text-on-primary-container/85 transition-colors duration-300 group-hover:text-background/80 sm:ml-auto sm:text-xs">
                      {t('about.tickets-cta-hint')}
                    </span>
                  </TicketsLink>

                  <button
                    type="button"
                    onClick={openVideo}
                    className="group inline-flex flex-1 flex-col items-start gap-1 border border-outline-variant/60 bg-surface-container-lowest/90 px-4 py-3 text-left transition-all duration-300 hover:border-primary hover:bg-surface-container-low active:scale-[0.99] sm:min-w-[220px] sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-3.5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-2xl text-primary transition-transform duration-300 group-hover:scale-110">
                        play_circle
                      </span>
                      <span className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-white">
                        {t('about.video-cta')}
                      </span>
                    </span>
                    <span className="font-body text-[11px] leading-snug text-on-surface-variant sm:ml-auto sm:text-xs">
                      {t('about.video-cta-hint')}
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
                  {FEATURES.map((feature, index) => (
                    <article
                      key={feature.id}
                      className={`border border-outline-variant/45 bg-surface-container-lowest/60 p-4 ${panelClass()}`}
                      style={staggerStyle(index, 0.1, 0.15)}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center border border-primary-container/50 bg-primary-container/15">
                          <span className="material-symbols-outlined text-lg text-primary">
                            {feature.icon}
                          </span>
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-secondary">
                          {feature.code}
                        </span>
                      </div>
                      <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-white">
                        {t(feature.titleKey)}
                      </h4>
                      <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                        {t(feature.descKey)}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="relative order-1 h-[300px] md:order-2 md:h-full md:min-h-[380px] lg:min-h-[460px] xl:min-h-[500px]">
                <img
                  src={SLOT_RACING_URL}
                  alt={t('about.heading')}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-background/25" />
                <div className="absolute inset-0 speed-lines opacity-20 mix-blend-overlay" aria-hidden="true" />

                <span className="absolute right-3 top-3 border-r-2 border-primary bg-background/85 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary-fixed">
                  {t('about.image-badge')}
                </span>
                <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                  {t('about.image-tag')}
                </span>

                <button
                  type="button"
                  onClick={openVideo}
                  className="absolute bottom-3 left-3 inline-flex items-center gap-2 border border-outline-variant/60 bg-background/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
                  aria-label={t('about.video-play')}
                >
                  <span className="material-symbols-outlined text-lg text-primary">smart_display</span>
                  {t('about.video-cta')}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-outline-variant/40 bg-surface-container-lowest/40 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-on-surface-variant">
            <span>{t('about.watermark')}</span>
            <span className="text-primary">{t('about.footer-status')}</span>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          className="popup-backdrop-in fixed inset-0 z-[10000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-video-title"
          onClick={closeVideo}
        >
          <div
            className="popup-panel-in relative flex w-full max-w-3xl flex-col overflow-hidden border-2 border-outline-variant bg-background shadow-[0_24px_80px_rgba(0,0,0,0.75)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center border border-outline-variant/70 bg-background/90 text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
              aria-label={t('about.video-close')}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="border-b border-outline-variant/40 bg-surface-container-low px-4 py-4 pr-14 sm:px-5 sm:py-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                {t('about.video-modal-badge')}
              </span>
              <h3
                id="about-video-title"
                className="mt-1 font-headline text-2xl uppercase tracking-tight text-white sm:text-3xl"
              >
                {t('about.video-modal-title')}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant sm:text-base">
                {t('about.video-modal-desc')}
              </p>
            </div>

            <div className="bg-black">
              <video
                ref={videoRef}
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="metadata"
                src={STEM_VIDEO_URL}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
