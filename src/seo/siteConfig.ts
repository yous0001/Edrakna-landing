/**
 * Central SEO / brand strings. Set VITE_SITE_URL in .env for production (no trailing slash).
 */

export const SITE_NAME_AR = 'إدراكنا'
export const SITE_NAME_EN = 'Edrakna'
export const SITE_TAGLINE = 'التميز التعليمي الذكي'

/** Topics and queries the product should rank for (Arabic + Latin brand terms). */
export const SEO_KEYWORDS = [
  'إدراكنا',
  'ادراكنا',
  'إدراكنا التعليمية',
  'ادراكنا التعليمية',
  'Edrakna',
  'edrakna',
  'Idrakna',
  'منصة تعليمية',
  'تعليم إلكتروني مصر',
  'منصة تعليمية مصرية',
  'شرح المناهج',
  'شرح الدروس',
  'شرح أونلاين',
  'شرح منهج',
  'شرح الرياضيات',
  'شرح العلوم',
  'شرح العربي',
  'شرح الانجليزي',
  'كورسات ثانوي',
  'كورسات إعدادي',
  'كورسات ابتدائي',
  'الصف الأول الثانوي',
  'الصف الثاني الثانوي',
  'الصف الثالث الثانوي',
  'الصف الأول الإعدادي',
  'الصف الثاني الإعدادي',
  'الصف الثالث الإعدادي',
  'أولى ثانوي',
  'تانية ثانوي',
  'تالتة ثانوي',
  'تعليم ثانوي مصر',
  'تعليم إعدادي مصر',
  'تعليم ابتدائي مصر',
  'منهج مصري',
  'EdTech مصر',
  'منصات تعليمية في مصر',
  'تعليم ذكي',
  'مناهج مصر',
  'المنهج الوطني',
  'دبلومة أمريكية',
  'IGCSE',
  'American diploma Egypt',
  'دروس أونلاين',
  'تميز أكاديمي',
  'التعليم الرقمي',
] as const

export function siteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim()
  if (raw) {
    return raw.replace(/\/$/, '')
  }
  return 'https://edrakna.com'
}

export function absoluteUrl(path: string): string {
  const origin = siteOrigin()
  if (!path || path === '/') {
    return `${origin}/`
  }
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}
