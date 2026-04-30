import { homePageContent } from '../data/homeData'
import { CtaSection } from '../components/home/CtaSection'
import { FeaturesSection } from '../components/home/FeaturesSection'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { HeroSection } from '../components/home/HeroSection'
import { ProgramsSection } from '../components/home/ProgramsSection'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page} dir="rtl">
      <Header navItems={homePageContent.navItems} />
      <main>
        <HeroSection content={homePageContent.hero} />
        <ProgramsSection content={homePageContent.programs} />
        <FeaturesSection content={homePageContent.features} />
        <CtaSection content={homePageContent.cta} />
      </main>
      <Footer navItems={homePageContent.navItems} />
    </div>
  )
}
