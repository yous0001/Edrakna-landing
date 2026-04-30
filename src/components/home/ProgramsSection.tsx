import type { HomePageContent } from '../../types/home'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './ProgramsSection.module.css'

interface ProgramsSectionProps {
  readonly content: HomePageContent['programs']
}

export function ProgramsSection({ content }: ProgramsSectionProps) {
  return (
    <section className={styles.programs} id="programs" aria-labelledby="programs-title">
      <div className={styles.container}>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <Card
              key={card.title}
              className={`${styles.card} ${card.featured ? styles.featured : ''}`}
              elevated={card.featured}
            >
              <span className={styles.icon}>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href="#contact">استكشف المسار +</a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
