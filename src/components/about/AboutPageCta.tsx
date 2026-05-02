import type { AboutPageCtaProps } from '../../types/componentProps'
import styles from './AboutPageCta.module.css'

export function AboutPageCta({ content }: AboutPageCtaProps) {
  return (
    <section className={styles.section} aria-labelledby="about-page-cta-title">
      <div className={styles.shell}>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.inner}>
            <h2 id="about-page-cta-title" className={styles.title}>
              {content.title}
            </h2>
            <p className={styles.lead}>{content.description}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="mailto:hello@edrakna.com">
                {content.primaryAction}
              </a>
              <a className={styles.secondary} href="mailto:hello@edrakna.com">
                {content.secondaryAction}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
