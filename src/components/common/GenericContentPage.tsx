import { Footer } from '../home/Footer'
import { Header } from '../home/Header'
import styles from './GenericContentPage.module.css'
import type { GenericContentPageProps } from '../../types/componentProps'

export function GenericContentPage({
  kicker,
  title,
  lead,
  sections,
  footerTagline,
  footerLinks,
}: GenericContentPageProps) {
  return (
    <div className={styles.page} dir="rtl">
      <Header />
      <main className={styles.main}>
        <header className={styles.hero}>
          <span className={styles.kicker}>{kicker}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className={styles.list}>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </main>
      <Footer tagline={footerTagline} links={footerLinks} />
    </div>
  )
}

