import { GenericContentPage } from '../components/common/GenericContentPage'
import { homePageContent } from '../data/homeData'
import { helpCenterPageData } from '../data/staticPagesData'
import { JsonLdAboutPage } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { helpSeo } from '../seo/seoCopy'

export function HelpCenterPage() {
  usePageSeo(helpSeo)

  return (
    <>
      <JsonLdAboutPage title={helpSeo.title} description={helpSeo.description} path={helpSeo.path} />
      <GenericContentPage
        kicker={helpCenterPageData.kicker}
        title={helpCenterPageData.title}
        lead={helpCenterPageData.lead}
        sections={helpCenterPageData.sections}
        footerTagline={homePageContent.footer.tagline}
        footerLinks={homePageContent.footer.links}
      />
    </>
  )
}

