import { useLanguage } from '../context/LanguageContext'
import InstagramLink from './InstagramLink'

const HERO_TEAM_IMAGE_URL = '/images/team-sables.jpg'

const HERO_BTN_BASE =
  'group relative flex min-h-[56px] w-full items-center justify-center gap-3 overflow-hidden px-6 py-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] transition-all duration-300 active:scale-[0.98]'

const HERO_BTN_PRIMARY = `${HERO_BTN_BASE} border-l-4 border-white bg-primary-container text-white brutalist-border shadow-[4px_4px_0_#5d0412] hover:-translate-y-0.5 hover:bg-white hover:text-background hover:shadow-[6px_6px_0_#5d0412]`

const HERO_BTN_SECONDARY = `${HERO_BTN_BASE} border border-outline-variant bg-surface-container-lowest/90 text-secondary backdrop-blur-md hover:-translate-y-0.5 hover:border-primary hover:bg-surface-container-high hover:text-primary hover:shadow-[4px_4px_0_#5d0412]`

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-background"
    >
      {/* Full-bleed team visual */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={HERO_TEAM_IMAGE_URL}
          alt={t('hero.image-alt')}
          className="hero-ken-burns absolute inset-0 h-full w-full object-cover object-[center_42%] sm:object-[center_38%] md:object-[center_32%]"
          fetchPriority="high"
          decoding="async"
        />

        {/* Readability gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/10 md:via-background/75 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background/90 to-transparent" />

        {/* Atmospheric overlays */}
        <div className="absolute inset-0 grunge opacity-30 mix-blend-overlay" />
        <div className="hero-speed-drift absolute inset-0 halftone-bg opacity-15 mix-blend-overlay" />
        <div className="hero-speed-drift absolute inset-0 speed-lines opacity-25" />
        <div className="hero-glow-pulse absolute bottom-0 left-1/2 h-48 w-[min(90vw,720px)] -translate-x-1/2 bg-primary-container/25 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-primary-container/60" />

        {/* Scan line */}
        <div className="hero-scan-line pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary-container/25 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[16px] md:px-[64px] pt-28 pb-10 md:pb-16">
        <div className="flex max-w-3xl flex-col gap-5 md:gap-7">
          <div className="hero-animate-in hero-animate-delay-1 flex flex-wrap items-center gap-3">
            <span className="border-l-2 border-primary pl-3 font-mono text-label-sm uppercase tracking-[0.15em] text-primary">
              {t('hero.badge')}
            </span>
            <span className="border border-outline-variant/60 bg-surface-container-lowest/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-on-surface-variant backdrop-blur-sm">
              {t('hero.pilots')}
            </span>
          </div>

          <h1 className="hero-animate-in hero-animate-delay-2 font-headline text-5xl font-black uppercase italic leading-[0.92] tracking-tighter text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {t('hero.headline-1')}
            <span className="mt-1 block bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              {t('hero.headline-2')}
            </span>
          </h1>

          <p className="hero-animate-in hero-animate-delay-3 max-w-md font-body text-body-md leading-relaxed text-on-surface-variant">
            {t('hero.tagline')}
          </p>
        </div>

        {/* Bottom HUD */}
        <div className="hero-animate-in hero-animate-delay-4 mt-10 grid grid-cols-1 gap-4 md:mt-14 lg:grid-cols-[1fr_300px] lg:items-stretch lg:gap-5 xl:grid-cols-[1fr_320px]">
          {/* Telemetry */}
          <div className="grid grid-cols-1 gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.1em] sm:grid-cols-2">
            <div className="flex flex-col justify-between gap-3 border-t-2 border-primary-container bg-surface-container-lowest/85 p-4 shadow-[inset_0_0_20px_rgba(209,0,28,0.1)] backdrop-blur-md transition-colors duration-300 hover:border-primary hover:bg-surface-container-low/90">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="tracking-widest text-primary-fixed">{t('hero.system')}</span>
                </div>
                <span className="font-bold text-secondary">{t('hero.system-value')}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
                <div className="hero-progress-bar h-full w-full rounded-full bg-gradient-to-r from-primary-container to-primary" />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3 border-t-2 border-outline bg-surface-container-lowest/85 p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-colors duration-300 hover:border-primary-container hover:bg-surface-container-low/90">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-base text-outline">air</span>
                  <span className="tracking-widest text-outline">{t('hero.aero')}</span>
                </div>
                <span className="font-bold text-secondary">{t('hero.aero-value')}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
                <div
                  className="hero-progress-bar h-full w-full rounded-full bg-gradient-to-r from-outline to-secondary"
                  style={{ animationDelay: '1.05s' }}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="hero-animate-in hero-animate-delay-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
            <a href="#team" className={HERO_BTN_PRIMARY}>
              <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                groups
              </span>
              <span className="flex-1 text-center">{t('hero.cta')}</span>
              <span className="material-symbols-outlined text-lg opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                arrow_forward
              </span>
            </a>
            <InstagramLink className={HERO_BTN_PRIMARY}>
              <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:scale-110">
                photo_camera
              </span>
              <span className="flex-1 text-center">{t('hero.cta-instagram')}</span>
              <span className="material-symbols-outlined text-lg opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                arrow_outward
              </span>
            </InstagramLink>
            <a href="#shop" className={HERO_BTN_SECONDARY}>
              <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                redeem
              </span>
              <span className="flex-1 text-center">{t('hero.cta-secondary')}</span>
              <span className="material-symbols-outlined text-lg opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
