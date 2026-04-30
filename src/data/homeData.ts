import type { HomePageContent } from '../types/home'

export const homePageContent: HomePageContent = {
  navItems: [
    { label: 'الرئيسية', href: '#home', isActive: true },
    { label: 'عن إدراكنا', href: '#about' },
    { label: 'خدماتنا', href: '#programs' },
    { label: 'المدونة', href: '#blog' },
  ],
  hero: {
    eyebrow: 'مستقبل التعليم الذكي بين يديك',
    title: 'إدراكنا: رحلتك الذكية',
    highlightedTitle: 'للتميز الأكاديمي',
    description:
      'نجمع بين أحدث تقنيات التعليم وأمهر المعلمين لنقدم لك تجربة تعليمية مخصصة تضمن وصولك لأعلى مستويات التفوق.',
    primaryAction: 'سجل الآن مجاناً',
    secondaryAction: 'استكشف المناهج',
    statLabel: 'معدل النجاح العام',
    statValue: '98%',
    trustBefore: 'انضم إلى أكثر من ',
    trustHighlight: '5000 طالب',
    trustAfter: ' متفوق',
  },
  programs: {
    eyebrow: 'خدماتنا المتكاملة',
    title: 'مناهج عالمية مصممة خصيصاً لمستقبلك',
    description: 'نحن نغطي كافة المسارات التعليمية بأعلى معايير الجودة الأكاديمية.',
    cards: [
      {
        title: 'المنهج الوطني',
        description:
          'شرح شامل ومبسط للمناهج الحكومية لجميع المراحل الدراسية مع نماذج امتحانات مكثفة.',
        icon: 'menu_book',
        tone: 'default',
      },
      {
        title: 'الدبلومة الأمريكية',
        description:
          'تأهيل متكامل لاختبارات SAT و ACT مع التركيز على مهارات التفكير النقدي والتحليل الرياضي.',
        icon: 'star',
        tone: 'inverse',
      },
      {
        title: 'المنهج البريطاني IG',
        description:
          'نخبة من المدرسين المعتمدين لتدريس مواد IGCSE و A-Level بأحدث الطرق التفاعلية.',
        icon: 'public',
        tone: 'warm',
      },
    ],
  },
  features: {
    title: 'لماذا يختارنا الطلاب؟',
    description:
      'نحن نوفر بيئة تعليمية ذكية تتجاوز الحدود التقليدية لتمنحك التفوق الحقيقي.',
    analysis: {
      title: 'تحليل ذكي للأداء',
      description:
        'منصتنا تستخدم الذكاء الاصطناعي لتحليل نقاط قوتك وضعفك وتقدم لك خطة مخصصة لرفع مستواك الدراسي بفعالية.',
      chartLabel: 'تقدم الطالب',
      chartValue: '88%',
    },
    teachers: {
      title: 'نخبة المعلمين',
      description:
        'نختار معلمينا من أفضل الكفاءات في كل تخصص لضمان شرح احترافي وممتع.',
      name: 'أ. سارة أحمد',
      role: 'خبيرة الرياضيات والمنهج الأمريكي',
    },
    quiz: {
      title: 'اختبارات تفاعلية',
      description:
        'نظام تقييم فوري يحاكي الامتحانات الدولية الحقيقية لتعتاد على نمط الأسئلة وتتغلب على الرهبة.',
    },
    support: {
      title: 'دعم فني وأكاديمي 24/7',
      description:
        'نحن معك في كل خطوة، فريق الدعم والمشرفين الأكاديميين جاهزون للرد على استفساراتك في أي وقت.',
    },
  },
  cta: {
    title: 'جاهز لبدء رحلة نجاحك؟',
    description: 'انضم إلى مجتمع إدراكنا واستفد من أحدث وسائل التعليم الذكية اليوم.',
    primaryAction: 'اشترك مجاناً الآن',
    secondaryAction: 'تحدث مع مستشار',
  },
  footer: {
    tagline: '© 2024 Edrakna. Intelligence for EdTech.',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Help Center', href: '#' },
    ],
  },
}
