import { SITE_NAME_AR, SITE_NAME_EN, absoluteUrl, siteOrigin } from './siteConfig'

/** Organization + WebSite schema (sitewide). */
export function JsonLdSite() {
  const origin = siteOrigin()
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${origin}/#organization`,
        name: SITE_NAME_AR,
        alternateName: [SITE_NAME_EN, `${SITE_NAME_AR} ${SITE_NAME_EN}`],
        url: origin,
        logo: absoluteUrl('/logo.png'),
        image: absoluteUrl('/hero-students.png'),
        description:
          'منصة تعليمية مصرية تجمع بين الجودة والابتكار الرقمي: مناهج وطنية، دبلومة أمريكية، ومسارى IGCSE؛ لتمكين الطلاب من التفوق الأكاديمي والمنافسة العالمية.',
        areaServed: {
          '@type': 'Country',
          name: 'Egypt',
        },
        knowsAbout: [
          'التعليم الإلكتروني',
          'EdTech',
          'American Diploma',
          'IGCSE',
          'المنهج المصري',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: `${SITE_NAME_AR} | ${SITE_NAME_EN}`,
        inLanguage: 'ar',
        publisher: { '@id': `${origin}/#organization` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface JsonLdAboutPageProps {
  readonly title: string
  readonly description: string
}

export function JsonLdAboutPage({ title, description }: JsonLdAboutPageProps) {
  const origin = siteOrigin()
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${origin}/about/#webpage`,
    name: title,
    description,
    url: absoluteUrl('/about'),
    inLanguage: 'ar',
    isPartOf: { '@id': `${origin}/#website` },
    about: { '@id': `${origin}/#organization` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
