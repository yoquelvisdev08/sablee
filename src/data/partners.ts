export type PartnerCategory = 'technical' | 'automotive' | 'institutional' | 'engineering'

export type Partner = {
  id: string
  slug: string
  logo: string
  category: PartnerCategory
  lightPad?: boolean
  logoClass: string
  zoomLogoClass: string
}

export const PARTNERS: Partner[] = [
  {
    id: '01',
    slug: 'solvex',
    logo: '/images/logo-solvexsvg.svg',
    category: 'technical',
    logoClass: 'h-8 w-auto sm:h-9 md:h-10',
    zoomLogoClass: 'h-14 w-auto sm:h-16 md:h-20',
  },
  {
    id: '02',
    slug: 'motoruedas',
    logo: '/images/motoruedas.png',
    category: 'automotive',
    lightPad: true,
    logoClass:
      'h-9 w-auto max-w-[11rem] object-contain sm:h-10 sm:max-w-[12rem] md:h-11 md:max-w-[13rem]',
    zoomLogoClass:
      'h-16 w-auto max-w-[min(90vw,18rem)] object-contain sm:h-20 sm:max-w-[20rem] md:h-24',
  },
  {
    id: '03',
    slug: 'rbw',
    logo: '/images/autoimport-rbw.png',
    category: 'automotive',
    lightPad: true,
    logoClass:
      'h-9 w-auto max-w-[11rem] object-contain sm:h-10 sm:max-w-[12rem] md:h-11 md:max-w-[13rem]',
    zoomLogoClass:
      'h-16 w-auto max-w-[min(90vw,18rem)] object-contain sm:h-20 sm:max-w-[20rem] md:h-24',
  },
  {
    id: '04',
    slug: 'apolo27',
    logo: '/images/apolo27.png',
    category: 'engineering',
    lightPad: true,
    logoClass:
      'h-9 w-auto max-w-[9rem] object-contain sm:h-10 sm:max-w-[10rem] md:h-11 md:max-w-[11rem]',
    zoomLogoClass:
      'h-16 w-auto max-w-[min(90vw,16rem)] object-contain sm:h-20 sm:max-w-[18rem] md:h-24',
  },
  {
    id: '05',
    slug: 'junta-sanluis',
    logo: '/images/junta-sanluis.png',
    category: 'institutional',
    lightPad: true,
    logoClass: 'h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12',
    zoomLogoClass: 'h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28',
  },
]

export function partnerTranslationKey(slug: string, field: 'name' | 'role' | 'desc' | 'thanks') {
  return `partners.${slug}.${field}` as const
}
