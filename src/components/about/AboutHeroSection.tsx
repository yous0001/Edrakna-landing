import { Link } from 'react-router-dom'
import type { AboutHeroSectionProps } from '../../types/componentProps'
import styles from './AboutHeroSection.module.css'

export function AboutHeroSection({ content }: AboutHeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.ping}>
              <span className={styles.pingDot} aria-hidden="true" />
              <span className={styles.pingCore} aria-hidden="true" />
            </span>
            {content.eyebrow}
          </div>

          <h1 id="about-hero-title" className={styles.title}>
            {content.titleBefore} <br />
            <span className={styles.highlight}>
              {content.titleHighlight}
              <span className={styles.highlightUnderline} aria-hidden="true" />
            </span>
          </h1>

          <p className={styles.lead}>{content.description}</p>

          <div className={styles.actions}>
            <Link to="/#programs" className={styles.primaryCta}>
              {content.primaryAction}
              <span className="material-symbols-outlined">arrow_left_alt</span>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.blobTertiary} aria-hidden="true" />
          <div className={styles.blobPrimary} aria-hidden="true" />
          <div className={styles.frame}>
            <img src={content.imageUrl} alt={content.imageAlt} loading="lazy" />
            <div className={styles.frameTint} aria-hidden="true" />
          </div>
          <div className={styles.floatCard}>
            <div className={styles.floatIcon}>
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <div className={styles.floatTitle}>{content.floatBadgeTitle}</div>
              <div className={styles.floatSub}>{content.floatBadgeSubtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
