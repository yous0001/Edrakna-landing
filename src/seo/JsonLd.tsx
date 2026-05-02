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
        alternateName: [
          SITE_NAME_EN,
          `${SITE_NAME_AR} ${SITE_NAME_EN}`,
          'ادراكنا',
          'Edrakna Education',
        ],
        url: origin,
        logo: absoluteUrl('/logo.png'),
        image: absoluteUrl('/hero-students.png'),
        description:
          'منصة تعليمية مصرية تجمع بين الجودة والابتكار الرقمي: مناهج وطنية، دبلومة أمريكية، ومسارى IGCSE؛ لتمكين الطلاب من التفوق الأكاديمي والمنافسة العالمية.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'EG',
        },
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
        potentialAction: {
          '@type': 'SearchAction',
          target: `${origin}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
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

interface JsonLdHomePageProps {
  readonly title: string
  readonly description: string
}

export function JsonLdHomePage({ title, description }: JsonLdHomePageProps) {
  const origin = siteOrigin()
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${origin}/#home`,
        url: absoluteUrl('/'),
        name: title,
        description,
        inLanguage: 'ar-EG',
        about: { '@id': `${origin}/#organization` },
        isPartOf: { '@id': `${origin}/#website` },
      },
      {
        '@type': 'OfferCatalog',
        '@id': `${origin}/#catalog`,
        name: 'برامج إدراكنا التعليمية',
        itemListElement: [
          {
            '@type': 'Course',
            name: 'شرح المنهج الوطني المصري',
            educationalLevel: 'Primary, Preparatory, Secondary',
            inLanguage: 'ar',
            provider: { '@id': `${origin}/#organization` },
          },
          {
            '@type': 'Course',
            name: 'شرح الدبلومة الأمريكية',
            educationalLevel: 'Secondary',
            inLanguage: 'ar',
            provider: { '@id': `${origin}/#organization` },
          },
          {
            '@type': 'Course',
            name: 'شرح مسار IGCSE',
            educationalLevel: 'Secondary',
            inLanguage: 'ar',
            provider: { '@id': `${origin}/#organization` },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${origin}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'هل إدراكنا مناسبة لجميع المراحل الدراسية في مصر؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم، نقدم شرحاً وبرامج تعليمية تناسب مراحل ابتدائي وإعدادي وثانوي مع مسارات متعددة مثل المنهج الوطني والدبلومة الأمريكية وIGCSE.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل توفر إدراكنا شرحاً للمناهج المصرية؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم، نركز على شرح المناهج المصرية بأسلوب تفاعلي يساعد الطالب المصري على الفهم والتفوق في الامتحانات.',
            },
          },
        ],
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
