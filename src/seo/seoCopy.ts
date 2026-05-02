import { SITE_NAME_AR, SITE_NAME_EN, SITE_TAGLINE } from './siteConfig'

const brand = `${SITE_NAME_AR} | ${SITE_NAME_EN}`

export const homeSeo = {
  title: `${brand} — ${SITE_TAGLINE}`,
  description:
    'إدراكنا (ادراكنا) منصة تعليمية مصرية لشرح المناهج والكورسات لكل المراحل: ابتدائي، إعدادي، وثانوي، مع المنهج الوطني والدبلومة الأمريكية وIGCSE، لتجربة تعليم رقمي تفاعلي تناسب الطالب المصري.',
  path: '/' as const,
}

export const aboutSeo = {
  title: `من نحن — ${brand}`,
  description:
    'تعرّف على إدراكنا (ادراكنا): رسالتنا، رؤيتنا، وخبرات فريقنا في تطوير شرح المناهج المصرية والكورسات التعليمية للمراحل المختلفة بما يلائم سوق التعليم المصري.',
  path: '/about' as const,
}
