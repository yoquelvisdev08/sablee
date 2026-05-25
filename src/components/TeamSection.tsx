import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { TEAM_MEMBERS } from '../data/teamMembers'
import { useLanguage } from '../context/LanguageContext'
import { useSectionReveal } from '../hooks/useSectionReveal'

const SWIPE_THRESHOLD = 48
const SLIDE_EXIT_MS = 280
const SLIDE_ENTER_MS = 520

type SlidePhase = 'idle' | 'exit' | 'enter'

export default function TeamSection() {
  const touchStartX = useRef<number | null>(null)
  const { sectionRef, revealClass } = useSectionReveal({ threshold: 0.12 })

  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1)
  const [slidePhase, setSlidePhase] = useState<SlidePhase>('idle')
  const [isAnimating, setIsAnimating] = useState(false)
  const [statsKey, setStatsKey] = useState(0)

  const memberCount = TEAM_MEMBERS.length
  const activeMember = TEAM_MEMBERS[activeIndex]

  const memberKey = (field: 'name' | 'role' | 'desc' | 'quote') =>
    `team.members.${activeMember.id}.${field}`

  const goTo = useCallback(
    (index: number, direction: 1 | -1) => {
      if (memberCount <= 1 || isAnimating) return

      const nextIndex = ((index % memberCount) + memberCount) % memberCount
      if (nextIndex === activeIndex) return

      setSlideDirection(direction)
      setIsAnimating(true)
      setSlidePhase('exit')

      window.setTimeout(() => {
        setActiveIndex(nextIndex)
        setStatsKey((value) => value + 1)
        setSlidePhase('enter')

        window.setTimeout(() => {
          setSlidePhase('idle')
          setIsAnimating(false)
        }, SLIDE_ENTER_MS)
      }, SLIDE_EXIT_MS)
    },
    [activeIndex, isAnimating, memberCount],
  )

  const goNext = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo])

  const goToIndex = useCallback(
    (index: number) => {
      if (index === activeIndex) return
      const direction: 1 | -1 =
        index > activeIndex || (activeIndex === memberCount - 1 && index === 0) ? 1 : -1
      goTo(index, direction)
    },
    [activeIndex, goTo, memberCount],
  )

  useEffect(() => {
    if (memberCount <= 1) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, memberCount])

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null || memberCount <= 1) return

    const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    touchStartX.current = null

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
    if (deltaX < 0) goNext()
    else goPrev()
  }

  const slideMotionClass =
    slidePhase === 'exit'
      ? slideDirection === 1
        ? 'team-slide-exit-left'
        : 'team-slide-exit-right'
      : slidePhase === 'enter'
        ? slideDirection === 1
          ? 'team-slide-enter-right'
          : 'team-slide-enter-left'
        : ''

  const statsMotionClass = slidePhase === 'enter' ? 'team-panel-enter' : ''

  const showControls = memberCount > 1
  const counterLabel = `${String(activeIndex + 1).padStart(2, '0')} / ${String(memberCount).padStart(2, '0')}`

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative w-full overflow-hidden bg-surface py-8 md:py-10"
    >
      <div className="pointer-events-none absolute inset-0 halftone-bg opacity-[0.06]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-primary-container/40" aria-hidden="true" />

      <div className="relative z-10 w-full">
        <div
          className={`mb-5 flex flex-wrap items-end justify-between gap-3 px-4 md:mb-6 md:px-8 lg:px-12 ${revealClass('hero-animate-delay-1')}`}
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
              {t('team.subtitle')}
            </span>
            <h2 className="mt-1 font-headline text-3xl uppercase text-white md:text-4xl">
              {t('team.heading')}
            </h2>
          </div>

          {showControls && (
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-on-surface-variant">
                {counterLabel}
              </span>
              <button
                type="button"
                onClick={goPrev}
                disabled={isAnimating}
                className="inline-flex h-9 w-9 items-center justify-center border border-outline-variant/60 bg-surface-container-lowest/80 text-secondary transition-colors duration-300 hover:border-primary hover:text-primary disabled:opacity-50"
                aria-label={t('team.prev')}
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={isAnimating}
                className="inline-flex h-9 w-9 items-center justify-center border border-outline-variant/60 bg-surface-container-lowest/80 text-secondary transition-colors duration-300 hover:border-primary hover:text-primary disabled:opacity-50"
                aria-label={t('team.next')}
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          )}
        </div>

        <div
          className={`w-full overflow-hidden border-y border-outline-variant/50 bg-surface-container-low ${revealClass('hero-animate-delay-2')}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeMember.id}
            className={[
              'grid w-full grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_387px]',
              slideMotionClass,
            ].join(' ')}
          >
            <div className="grid min-h-[180px] grid-cols-1 md:grid-cols-[minmax(320px,52%)_1fr] md:min-h-[220px] lg:grid-cols-[minmax(400px,58%)_1fr] lg:min-h-[280px] xl:min-h-[320px]">
              <div className="relative h-[180px] md:h-full md:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px]">
                <img
                  src={activeMember.photo}
                  alt={t(memberKey('name'))}
                  className="h-full w-full object-cover object-[center_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
                <span className="absolute left-3 top-3 border-l-2 border-primary bg-background/85 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary-fixed">
                  {activeMember.badge}
                </span>
              </div>

              <div className="flex min-h-[160px] flex-col justify-center gap-1.5 border-outline-variant/40 p-3 md:min-h-0 md:border-l md:p-4 lg:gap-2 lg:p-4">
                <div>
                  <h3 className="font-headline text-3xl uppercase tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                    {t(memberKey('name'))}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary md:text-[12px]">
                    {t(memberKey('role'))}
                  </p>
                </div>
                <p className="line-clamp-4 font-body text-[15px] leading-relaxed text-on-surface-variant md:text-base">
                  {t(memberKey('desc'))}
                </p>
                <p className="font-headline text-base font-black uppercase leading-snug tracking-tight text-primary-fixed/90 md:text-lg">
                  &ldquo;{t(memberKey('quote'))}&rdquo;
                </p>
              </div>
            </div>

            <div
              key={`stats-${activeMember.id}-${statsKey}`}
              className={[
                'flex min-h-[120px] flex-col justify-center gap-2 border-t border-outline-variant/40 p-3 lg:min-h-[280px] lg:border-l lg:border-t-0 lg:p-4 xl:min-h-[320px]',
                statsMotionClass,
              ].join(' ')}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary">
                {t('team.telemetry')}
              </span>
              <div>
                <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.08em]">
                  <span className="text-on-surface">{t('team.aero-label')}</span>
                  <span className="font-bold text-primary">{activeMember.stats.aero}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
                  <div
                    key={`aero-${statsKey}`}
                    className="hero-progress-bar h-full rounded-full bg-gradient-to-r from-primary-container to-primary"
                    style={{ width: `${Math.min(activeMember.stats.aero, 100)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.08em]">
                  <span className="text-on-surface">{t('team.structural-label')}</span>
                  <span className="font-bold text-error">{activeMember.stats.structural}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
                  <div
                    key={`struct-${statsKey}`}
                    className="hero-progress-bar h-full rounded-full bg-gradient-to-r from-error-container to-error"
                    style={{
                      width: `${Math.min(activeMember.stats.structural, 100)}%`,
                      animationDelay: '0.12s',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {showControls && (
            <div className="flex flex-wrap items-center gap-2 border-t border-outline-variant/40 bg-surface-container-lowest/50 px-3 py-2">
              {TEAM_MEMBERS.map((member, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => goToIndex(index)}
                    disabled={isAnimating}
                    aria-label={`${t('team.select')}: ${t(`team.members.${member.id}.name`)}`}
                    aria-current={isActive}
                    className={[
                      'flex items-center gap-1.5 border px-2 py-1 transition-all duration-300 disabled:opacity-60',
                      isActive
                        ? 'scale-100 border-primary bg-primary-container/20'
                        : 'scale-[0.98] border-outline-variant/40 opacity-80 hover:scale-100 hover:border-primary/50 hover:opacity-100',
                    ].join(' ')}
                  >
                    <img
                      src={member.photo}
                      alt=""
                      className="h-6 w-6 object-cover object-[center_20%] transition-transform duration-300"
                    />
                    <span
                      className={[
                        'font-mono text-[9px] uppercase tracking-[0.1em] transition-colors duration-300',
                        isActive ? 'text-primary' : 'text-on-surface-variant',
                      ].join(' ')}
                    >
                      {t(`team.members.${member.id}.name`)}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
