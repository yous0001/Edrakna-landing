import { SITE_NAME_AR, SITE_NAME_EN, SITE_TAGLINE } from './siteConfig'

const brand = `${SITE_NAME_AR} | ${SITE_NAME_EN}`

export const homeSeo = {
  title: `${brand} — ${SITE_TAGLINE}`,
  description:
    'إدراكنا منصة تعليمية ذكية في مصر: مناهج وطنية، دبلومة أمريكية، وIGCSE، مع محتوى رقمي وتفاعلي يرفع جودة التعلّم ويدعم تميز الطلاب والتحضير للامتحانات العالمية.',
  path: '/' as const,
}

export const aboutSeo = {
  title: `من نحن — ${brand}`,
  description:
    'تعرّف على رسالة إدراكنا ورؤيتها وفريق الخبراء وقيم الجودة والابتكار وتمكين الطلاب المصريين عبر تعليم رقمي موثوق يجمع بين الهوية المحلية والمعايير الدولية.',
  path: '/about' as const,
}
