import type { CtaSectionProps } from '../../types/componentProps'
import { Button } from '../ui/Button'
import styles from './CtaSection.module.css'

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className={styles.section} id="contact" aria-labelledby="cta-title">
      <div className={styles.shell}>
        <div className={styles.card}>
          <div className={styles.glowOne} aria-hidden="true" />
          <div className={styles.glowTwo} aria-hidden="true" />

          <h2 id="cta-title" className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.lead}>{content.description}</p>

          <div className={styles.actions}>
            <Button href="mailto:hello@edrakna.com" variant="surfaceLight" className={styles.actionPrimary}>
              {content.primaryAction}
            </Button>
            <Button to="/#programs" variant="primaryContainer" className={styles.actionSecondary}>
              {content.secondaryAction}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
