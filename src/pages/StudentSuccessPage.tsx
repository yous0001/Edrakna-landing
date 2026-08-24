import { GenericContentPage } from '../components/common/GenericContentPage'
import { homePageContent } from '../data/homeData'
import { studentSuccessPageData } from '../data/staticPagesData'
import { JsonLdAboutPage, JsonLdBreadcrumbs } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { studentSuccessSeo } from '../seo/seoCopy'

export function StudentSuccessPage() {
  usePageSeo({
    ...studentSuccessSeo,
    extraKeywords: ['نتائج الطلاب', 'تفوق دراسي', 'نجاح الطلاب في مصر'],
  })

  return (
    <>
      <JsonLdAboutPage
        title={studentSuccessSeo.title}
        description={studentSuccessSeo.description}
        path={studentSuccessSeo.path}
      />
      <JsonLdBreadcrumbs items={[{ name: 'نجاح الطلاب', path: '/student-success' }]} />
      <GenericContentPage
        kicker={studentSuccessPageData.kicker}
        title={studentSuccessPageData.title}
        lead={studentSuccessPageData.lead}
        sections={studentSuccessPageData.sections}
        footerTagline={homePageContent.footer.tagline}
        footerLinks={homePageContent.footer.links}
      />
    </>
  )
}

