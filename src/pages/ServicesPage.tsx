import { GenericContentPage } from '../components/common/GenericContentPage'
import { homePageContent } from '../data/homeData'
import { servicesPageData } from '../data/staticPagesData'
import { JsonLdAboutPage } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { servicesSeo } from '../seo/seoCopy'

export function ServicesPage() {
  usePageSeo({
    ...servicesSeo,
    extraKeywords: ['خدمات تعليمية مصر', 'شرح المناهج', 'كورسات دراسية'],
  })

  return (
    <>
      <JsonLdAboutPage
        title={servicesSeo.title}
        description={servicesSeo.description}
        path={servicesSeo.path}
      />
      <GenericContentPage
        kicker={servicesPageData.kicker}
        title={servicesPageData.title}
        lead={servicesPageData.lead}
        sections={servicesPageData.sections}
        footerTagline={homePageContent.footer.tagline}
        footerLinks={homePageContent.footer.links}
      />
    </>
  )
}

