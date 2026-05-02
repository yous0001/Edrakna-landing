import { GenericContentPage } from '../components/common/GenericContentPage'
import { homePageContent } from '../data/homeData'
import { contactPageData } from '../data/staticPagesData'
import { JsonLdAboutPage } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { contactSeo } from '../seo/seoCopy'

export function ContactPage() {
  usePageSeo({
    ...contactSeo,
    extraKeywords: ['تواصل مع إدراكنا', 'رقم إدراكنا', 'دعم إدراكنا'],
  })

  return (
    <>
      <JsonLdAboutPage
        title={contactSeo.title}
        description={contactSeo.description}
        path={contactSeo.path}
      />
      <GenericContentPage
        kicker={contactPageData.kicker}
        title={contactPageData.title}
        lead={contactPageData.lead}
        sections={contactPageData.sections}
        footerTagline={homePageContent.footer.tagline}
        footerLinks={homePageContent.footer.links}
      />
    </>
  )
}

