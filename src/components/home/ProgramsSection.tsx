import { Link } from 'react-router-dom'
import type { HomePageContent, ProgramCard as ProgramCardModel } from '../../types/home'
import styles from './ProgramsSection.module.css'

interface ProgramsSectionProps {
  readonly content: HomePageContent['programs']
}

function toneClass(card: ProgramCardModel) {
  if (card.tone === 'inverse') return styles.cardInverse
  if (card.tone === 'warm') return styles.cardWarm
  return styles.cardDefault
}

function iconToneClass(card: ProgramCardModel) {
  if (card.tone === 'inverse') return styles.iconInverse
  if (card.tone === 'warm') return styles.iconWarm
  return styles.iconDefault
}

export function ProgramsSection({ content }: ProgramsSectionProps) {
  return (
    <section className={styles.section} id="programs" aria-labelledby="programs-title">
      <div className={styles.shell}>
        <div className={styles.headRow}>
          <div className={styles.headCopy}>
            <span className={styles.kicker}>{content.eyebrow}</span>
            <h2 id="programs-title" className={styles.title}>
              {content.title}
            </h2>
          </div>
          <p className={styles.headLead}>{content.description}</p>
        </div>

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.title} className={`${styles.card} ${toneClass(card)}`}>
              <div className={`${styles.iconWrap} ${iconToneClass(card)}`}>
                <span className={`material-symbols-outlined ${styles.icon}`}>{card.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.description}</p>
              <Link to="/contact" className={styles.explore}>
                استكشف المسار
                <span className={`material-symbols-outlined ${styles.exploreIcon}`}>arrow_back</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
