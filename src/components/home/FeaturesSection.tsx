import type { HomePageContent } from '../../types/home'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './FeaturesSection.module.css'

interface FeaturesSectionProps {
  readonly content: HomePageContent['features']
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
  return (
    <section className={styles.features} id="features" aria-labelledby="features-title">
      <div className={styles.container}>
        <SectionHeading title={content.title} description={content.description} />

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <Card
              key={card.title}
              className={[
                styles.card,
                card.featured ? styles.featured : '',
                card.wide ? styles.wide : '',
              ]
                .filter(Boolean)
                .join(' ')}
              elevated={card.featured}
            >
              <span className={styles.icon}>{card.icon}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
