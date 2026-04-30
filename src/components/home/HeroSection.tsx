import { Button } from '../ui/Button'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  readonly content: {
    readonly eyebrow: string
    readonly title: string
    readonly highlightedTitle: string
    readonly description: string
    readonly primaryAction: string
    readonly secondaryAction: string
    readonly statLabel: string
    readonly statValue: string
  }
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.photoCard}>
            <div className={styles.studentGroup}>
              <span className={`${styles.student} ${styles.studentOne}`} />
              <span className={`${styles.student} ${styles.studentTwo}`} />
              <span className={`${styles.student} ${styles.studentThree}`} />
              <span className={`${styles.student} ${styles.studentFour}`} />
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>↗</span>
              <span>
                <strong>{content.statValue}</strong>
                {content.statLabel}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h1 id="hero-title">
            {content.title}
            <span>{content.highlightedTitle}</span>
          </h1>
          <p>{content.description}</p>
          <div className={styles.actions}>
            <Button href="#contact">{content.primaryAction}</Button>
            <Button href="#programs" variant="secondary">
              {content.secondaryAction}
            </Button>
          </div>
          <div className={styles.microProof}>
            <span className={styles.avatar} />
            <span>انضم إلى طلاب يدرسون بخطة واضحة ونتائج قابلة للقياس.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
