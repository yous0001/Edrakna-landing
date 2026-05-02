import { GenericContentPage } from '../components/common/GenericContentPage'
import { homePageContent } from '../data/homeData'
import { privacyPageData } from '../data/staticPagesData'
import { JsonLdAboutPage } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { privacySeo } from '../seo/seoCopy'

export function PrivacyPolicyPage() {
  usePageSeo(privacySeo)

  return (
    <>
      <JsonLdAboutPage
        title={privacySeo.title}
        description={privacySeo.description}
        path={privacySeo.path}
      />
      <GenericContentPage
        kicker={privacyPageData.kicker}
        title={privacyPageData.title}
        lead={privacyPageData.lead}
        sections={privacyPageData.sections}
        footerTagline={homePageContent.footer.tagline}
        footerLinks={homePageContent.footer.links}
      />
    </>
  )
}

