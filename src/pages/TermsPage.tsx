import { GenericContentPage } from '../components/common/GenericContentPage'
import { homePageContent } from '../data/homeData'
import { termsPageData } from '../data/staticPagesData'
import { JsonLdAboutPage, JsonLdBreadcrumbs } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { termsSeo } from '../seo/seoCopy'

export function TermsPage() {
  usePageSeo(termsSeo)

  return (
    <>
      <JsonLdAboutPage
        title={termsSeo.title}
        description={termsSeo.description}
        path={termsSeo.path}
      />
      <JsonLdBreadcrumbs items={[{ name: 'شروط الاستخدام', path: '/terms-of-service' }]} />
      <GenericContentPage
        kicker={termsPageData.kicker}
        title={termsPageData.title}
        lead={termsPageData.lead}
        sections={termsPageData.sections}
        footerTagline={homePageContent.footer.tagline}
        footerLinks={homePageContent.footer.links}
      />
    </>
  )
}

