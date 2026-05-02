import { aboutPageContent } from '../data/aboutData'
import { homePageContent } from '../data/homeData'
import { AboutHeroSection } from '../components/about/AboutHeroSection'
import { AboutMissionVisionSection } from '../components/about/AboutMissionVisionSection'
import { AboutPageCta } from '../components/about/AboutPageCta'
import { AboutTeamSection } from '../components/about/AboutTeamSection'
import { AboutValuesSection } from '../components/about/AboutValuesSection'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { JsonLdAboutPage } from '../seo/JsonLd'
import { usePageSeo } from '../seo/pageSeo'
import { aboutSeo } from '../seo/seoCopy'
import styles from './HomePage.module.css'

export function AboutPage() {
  usePageSeo({
    title: aboutSeo.title,
    description: aboutSeo.description,
    path: aboutSeo.path,
    extraKeywords: [
      'من نحن إدراكنا',
      'رسالة إدراكنا',
      'فريق إدراكنا',
      'ادراكنا التعليمية',
      'شرح المناهج في مصر',
      'منصة تعليمية مصرية',
    ],
  })
  return (
    <div className={styles.page} dir="rtl">
      <JsonLdAboutPage title={aboutSeo.title} description={aboutSeo.description} />
      <Header />
      <main>
        <AboutHeroSection content={aboutPageContent.hero} />
        <AboutMissionVisionSection
          mission={aboutPageContent.mission}
          vision={aboutPageContent.vision}
          commitment={aboutPageContent.commitment}
        />
        <AboutTeamSection
          kicker={aboutPageContent.team.kicker}
          title={aboutPageContent.team.title}
          description={aboutPageContent.team.description}
          members={aboutPageContent.team.members}
        />
        <AboutValuesSection content={aboutPageContent.values} />
        <AboutPageCta content={aboutPageContent.cta} />
      </main>
      <Footer tagline={homePageContent.footer.tagline} links={homePageContent.footer.links} />
    </div>
  )
}
