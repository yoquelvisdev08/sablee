import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import { TEAM_MEMBERS, type TeamMember } from '../data/teamMembers'
import { useLanguage } from '../context/LanguageContext'
import { useSectionReveal } from '../hooks/useSectionReveal'

function memberKey(id: string, field: 'name' | 'role' | 'desc' | 'image-alt') {
  return `team.members.${id}.${field}` as const
}

type MemberCardProps = {
  member: TeamMember
  index: number
  onSelect: (member: TeamMember) => void
  revealClass: (delay?: string) => string
  panelClass: () => string
  staggerStyle: (index: number, step?: number, base?: number) => CSSProperties | undefined
  layout: 'grid' | 'scroll'
}

function MemberCard({
  member,
  index,
  onSelect,
  revealClass,
  panelClass,
  staggerStyle,
  layout,
}: MemberCardProps) {
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className={[
        'group team-dossier-card text-left transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-fixed',
        layout === 'scroll' ? 'w-[min(78vw,300px)] shrink-0 snap-center' : 'w-full',
        revealClass(`hero-animate-delay-${Math.min(index + 2, 10)}`),
        panelClass(),
      ].join(' ')}
      style={{
        ...staggerStyle(index, 0.1, 0.08),
        ['--team-rotate' as string]: `${member.rotate}deg`,
      }}
      aria-label={`${t('team.view-member')}: ${t(memberKey(member.id, 'name'))}`}
    >
      <div className="team-dossier-frame relative overflow-hidden border-2 border-white/25 bg-background shadow-[6px_6px_0_rgba(14,14,14,0.9)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white group-hover:shadow-[10px_10px_0_rgba(14,14,14,0.95)] group-active:scale-[0.99]">
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={member.photo}
            alt={t(memberKey(member.id, 'image-alt'))}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/92 to-transparent px-3 pb-3 pt-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary-fixed">
            {String(index + 1).padStart(2, '0')} //
          </p>
          <h3 className="font-headline text-xl uppercase leading-none tracking-tight text-white sm:text-2xl">
            {t(memberKey(member.id, 'name'))}
          </h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container/90">
            {t(memberKey(member.id, 'role'))}
          </p>
        </div>
        <span className="absolute right-2 top-2 border border-white/30 bg-background/75 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {t('team.expand')}
        </span>
      </div>
    </button>
  )
}

export default function TeamSection() {
  const { sectionRef, revealClass, panelClass, staggerStyle } = useSectionReveal({
    threshold: 0.08,
  })
  const { t } = useLanguage()
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null)

  const closePreview = useCallback(() => setActiveMember(null), [])

  useEffect(() => {
    if (!activeMember) return

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
  }, [activeMember, closePreview])

  const memberCount = TEAM_MEMBERS.length

  return (
    <section
      ref={sectionRef}
      id="team"
      aria-labelledby="team-heading"
      className="team-dossier-section relative w-full overflow-hidden py-10 md:py-14"
    >
      <div className="pointer-events-none absolute inset-0 speed-lines opacity-[0.14]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grunge opacity-[0.22]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-primary/25 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-2/3 w-1/2 bg-gradient-to-l from-background/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <header
          className={`mb-8 flex flex-col gap-5 px-4 md:mb-10 md:flex-row md:items-end md:justify-between md:px-8 lg:px-12 ${revealClass('hero-animate-delay-1')}`}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 border border-on-primary-container/25 bg-background/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-fixed backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-fixed" />
              {t('team.subtitle')}
            </span>
            <h2
              id="team-heading"
              className="mt-3 font-headline text-[clamp(2.5rem,6vw,4.25rem)] font-black uppercase leading-[0.9] tracking-tighter text-on-primary-container"
            >
              {t('team.heading')}
            </h2>
            <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-on-primary-container/85 md:text-lg">
              {t('team.intro')}
            </p>
          </div>

          <div className="flex flex-col gap-2 border-l-4 border-on-primary-container bg-background/90 px-4 py-3 shadow-[4px_4px_0_rgba(14,14,14,0.85)] md:min-w-[200px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">
              {t('team.roster-label')}
            </span>
            <span className="font-headline text-4xl font-black tabular-nums leading-none text-primary-fixed">
              {String(memberCount).padStart(2, '0')}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
              {t('team.roster-unit')}
            </span>
          </div>
        </header>

        <p
          className={`mb-5 px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-on-primary-container/70 md:hidden md:px-8 ${revealClass('hero-animate-delay-2')}`}
        >
          {t('team.scroll-hint')}
        </p>

        <div
          className={`team-dossier-scroll mb-2 flex gap-4 overflow-x-auto px-4 pb-4 md:hidden ${revealClass('hero-animate-delay-2')}`}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              index={index}
              onSelect={setActiveMember}
              revealClass={revealClass}
              panelClass={panelClass}
              staggerStyle={staggerStyle}
              layout="scroll"
            />
          ))}
        </div>

        <div
          className={`team-dossier-grid hidden gap-5 px-4 md:grid md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:gap-6 lg:px-12 ${revealClass('hero-animate-delay-2')}`}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              index={index}
              onSelect={setActiveMember}
              revealClass={revealClass}
              panelClass={panelClass}
              staggerStyle={staggerStyle}
              layout="grid"
            />
          ))}
        </div>

        <p
          className={`mt-6 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-on-primary-container/65 ${revealClass('hero-animate-delay-3')}`}
        >
          {t('team.tap-hint')}
        </p>
      </div>

      {activeMember && (
        <div
          className="popup-backdrop-in fixed inset-0 z-[10000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-preview-name"
          onClick={closePreview}
        >
          <div
            className="popup-panel-in relative flex w-full max-w-md flex-col overflow-hidden border-2 border-outline-variant bg-background shadow-[0_24px_80px_rgba(0,0,0,0.75)] sm:max-w-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center border border-outline-variant/70 bg-background/90 text-secondary transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
              aria-label={t('team.view-close')}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="max-h-[min(70vh,540px)] overflow-hidden bg-primary-container/30">
              <img
                src={activeMember.photo}
                alt={t(memberKey(activeMember.id, 'image-alt'))}
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="border-t border-outline-variant/40 bg-surface-container-low p-5 sm:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                {t('team.subtitle')}
              </span>
              <h3
                id="team-preview-name"
                className="mt-1 font-headline text-3xl uppercase tracking-tight text-white"
              >
                {t(memberKey(activeMember.id, 'name'))}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-fixed">
                {t(memberKey(activeMember.id, 'role'))}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant sm:text-base">
                {t(memberKey(activeMember.id, 'desc'))}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
