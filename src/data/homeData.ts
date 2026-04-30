import type { HomePageContent } from '../types/home'

export const homePageContent: HomePageContent = {
  navItems: [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المناهج', href: '#programs' },
    { label: 'المميزات', href: '#features' },
    { label: 'تواصل معنا', href: '#contact' },
  ],
  hero: {
    eyebrow: 'كل ما يحتاجه الطالب في مكان واحد',
    title: 'إدراكنا: رحلتك الذكية',
    highlightedTitle: 'للتميّز الأكاديمي',
    description:
      'ادرس بذكاء مع محتوى تفاعلي، متابعة مستمرة، ومصادر تعليمية مصممة لتقربك من هدفك خطوة بخطوة.',
    primaryAction: 'سجل الآن مجاناً',
    secondaryAction: 'استكشف المناهج',
    statLabel: 'رضا الطلاب',
    statValue: '98%',
  },
  programs: {
    eyebrow: 'مناهجنا',
    title: 'مناهج علمية مصممة خصيصاً لمستقبلك',
    description:
      'برامج تعليمية منظمة تساعدك على فهم المفاهيم، حل الأسئلة بثقة، والاستعداد للاختبارات بكفاءة.',
    cards: [
      {
        title: 'المنهج البريطاني IG',
        description:
          'دروس منظمة، تدريبات تطبيقية، ومراجعات تساعدك على إتقان كل جزء من المنهج.',
        icon: 'IG',
      },
      {
        title: 'البكالوريا الأمريكية',
        description:
          'مسارات واضحة للـ ACT و SAT مع متابعة دقيقة وخطط مذاكرة مخصصة.',
        icon: '✦',
        featured: true,
      },
      {
        title: 'المنهج الوطني',
        description:
          'شرح مبسط وتدريب مستمر يغطي المهارات الأساسية المطلوبة للنجاح.',
        icon: '✓',
      },
    ],
  },
  features: {
    title: 'لماذا يختارنا الطلاب؟',
    description: 'كل تفصيلة في إدراكنا مصممة لتجعل التعلم أسهل، أوضح، وأكثر فعالية.',
    cards: [
      {
        title: 'نخبة المعلمين',
        description:
          'مدرسون متخصصون يقدمون شرحاً عملياً ودعماً مستمراً حتى تصل للنتيجة التي تريدها.',
        icon: 'معلم',
        featured: true,
      },
      {
        title: 'تحليل ذكي للأداء',
        description:
          'تابع تقدمك عبر تقارير واضحة تكشف نقاط القوة والجوانب التي تحتاج إلى تطوير.',
        icon: '٪',
      },
      {
        title: 'دعم فني وأكاديمي 24/7',
        description:
          'فريقنا قريب منك دائماً للإجابة عن أسئلتك وتوجيهك خلال رحلة التعلم.',
        icon: '؟',
        wide: true,
      },
      {
        title: 'اختبارات تفاعلية',
        description:
          'تدريبات قصيرة، أسئلة متنوعة، ونتائج فورية تساعدك على تثبيت الفهم.',
        icon: '↗',
        featured: true,
      },
    ],
  },
  cta: {
    title: 'جاهز لبدء رحلة نجاحك؟',
    description: 'انضم إلى إدراكنا وابدأ مسار تعلم واضح يقودك للتميز بثقة اليوم.',
    primaryAction: 'اشترك الآن',
    secondaryAction: 'تحدث مع مستشار',
  },
}
