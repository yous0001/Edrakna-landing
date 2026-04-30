import { homePageContent } from '../data/homeData'
import { CtaSection } from '../components/home/CtaSection'
import { FeaturesSection } from '../components/home/FeaturesSection'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { HeroSection } from '../components/home/HeroSection'
import { ProgramsSection } from '../components/home/ProgramsSection'
import { usePageSeo } from '../seo/pageSeo'
import { homeSeo } from '../seo/seoCopy'
import styles from './HomePage.module.css'

export function HomePage() {
  usePageSeo({ ...homeSeo })
  return (
    <div className={styles.page} id="home" dir="rtl">
      <Header />
      <main>
        <HeroSection content={homePageContent.hero} />
        <ProgramsSection content={homePageContent.programs} />
        <div id="blog" className={styles.hashTarget} aria-hidden="true" />
        <FeaturesSection content={homePageContent.features} />
        <CtaSection content={homePageContent.cta} />
      </main>
      <Footer
        tagline={homePageContent.footer.tagline}
        links={homePageContent.footer.links}
      />
    </div>
  )
}
