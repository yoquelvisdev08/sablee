import { useLanguage } from '../context/LanguageContext'
import { useSectionReveal } from '../hooks/useSectionReveal'

const MERCH_ITEMS = [
  {
    id: 'pins',
    image: '/images/pins.jpg',
    badgeKey: 'shop.pins.badge',
    titleKey: 'shop.pins.title',
    descKey: 'shop.pins.desc',
    code: 'PIN-01',
  },
  {
    id: 'keychain',
    image: '/images/llavero.jpg',
    badgeKey: 'shop.keychain.badge',
    titleKey: 'shop.keychain.title',
    descKey: 'shop.keychain.desc',
    code: 'KEY-02',
  },
] as const

export default function ShopSection() {
  const { t } = useLanguage()
  const { sectionRef, revealClass, panelClass, staggerStyle } = useSectionReveal()

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative w-full overflow-hidden bg-surface py-8 md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 halftone-bg opacity-[0.06]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-primary-container/40" aria-hidden="true" />

      <div className="relative z-10 w-full">
        <div
          className={`mb-5 flex flex-wrap items-end justify-between gap-4 px-4 md:mb-7 md:px-8 lg:px-12 ${revealClass('hero-animate-delay-1')}`}
        >
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
              {t('shop.subtitle')}
            </span>
            <h2 className="mt-1 font-headline text-3xl uppercase text-white md:text-4xl lg:text-[2.75rem]">
              {t('shop.heading')}
            </h2>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-on-surface-variant md:text-base">
              {t('shop.intro')}
            </p>
          </div>

          <div className="flex items-center gap-2 border border-outline-variant/50 bg-surface-container-lowest/80 px-3 py-2 backdrop-blur-sm">
            <span className="material-symbols-outlined text-base text-primary">redeem</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant">
              {t('shop.status-badge')}
            </span>
          </div>
        </div>

        <div
          className={`w-full overflow-hidden border-y border-outline-variant/50 bg-surface-container-low ${revealClass('hero-animate-delay-2')}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {MERCH_ITEMS.map((item, index) => (
              <article
                key={item.id}
                className={[
                  'group flex flex-col border-outline-variant/40',
                  index === 0 ? 'md:border-r' : '',
                  'border-b md:border-b-0',
                  panelClass(),
                ].join(' ')}
                style={staggerStyle(index, 0.12, 0.18)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-lowest sm:aspect-[5/4]">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 border-l-2 border-primary bg-background/85 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary-fixed">
                    {t(item.badgeKey)}
                  </span>
                  <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70">
                    {item.code}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4 md:p-5 lg:p-6">
                  <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                    {t(item.titleKey)}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant md:text-[15px]">
                    {t(item.descKey)}
                  </p>
                  <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                    {t('shop.item-note')}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div
            className={`flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant/40 bg-surface-container-lowest/40 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-on-surface-variant ${revealClass('hero-animate-delay-3')}`}
          >
            <span>{t('shop.footer-left')}</span>
            <span className="text-primary">{t('shop.footer-right')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
