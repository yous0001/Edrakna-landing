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

export const servicesSeo = {
  title: `الخدمات التعليمية — ${brand}`,
  description:
    'خدمات إدراكنا التعليمية في مصر: شرح المناهج، كورسات كل المراحل الدراسية، دعم أكاديمي، ومسارات المنهج الوطني والدبلومة الأمريكية وIGCSE.',
  path: '/services' as const,
}

export const studentSuccessSeo = {
  title: `نجاح الطلاب — ${brand}`,
  description:
    'اكتشف قصص نجاح طلاب إدراكنا في مصر وكيف ساعدتهم المنصة في تحسين الدرجات، تقوية الفهم، والاستعداد للامتحانات المدرسية والدولية.',
  path: '/student-success' as const,
}

export const contactSeo = {
  title: `تواصل معنا — ${brand}`,
  description:
    'تواصل مع فريق إدراكنا لخدمات الشرح والكورسات التعليمية في مصر. دعم سريع للطلاب وأولياء الأمور واختيار المسار الدراسي المناسب.',
  path: '/contact' as const,
}

export const privacySeo = {
  title: `سياسة الخصوصية — ${brand}`,
  description:
    'تعرف على سياسة الخصوصية في إدراكنا وكيف نحمي بيانات الطلاب وأولياء الأمور داخل المنصة التعليمية.',
  path: '/privacy-policy' as const,
}

export const termsSeo = {
  title: `شروط الاستخدام — ${brand}`,
  description:
    'اطلع على شروط استخدام منصة إدراكنا التعليمية بما يضمن تجربة آمنة ومنظمة لجميع الطلاب وأولياء الأمور.',
  path: '/terms-of-service' as const,
}

export const helpSeo = {
  title: `مركز المساعدة — ${brand}`,
  description:
    'مركز المساعدة في إدراكنا: إجابات الأسئلة الشائعة، دعم فني، وإرشادات سريعة حول الاشتراك، الدروس، والامتحانات.',
  path: '/help-center' as const,
}
