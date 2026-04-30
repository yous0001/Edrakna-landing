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
    readonly trustBefore: string
    readonly trustHighlight: string
    readonly trustAfter: string
  }
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.blobPrimary} aria-hidden="true" />
      <div className={styles.blobSecondary} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>
              <span className={`material-symbols-outlined ${styles.eyebrowIcon}`}>
                auto_awesome
              </span>
              {content.eyebrow}
            </div>

            <h1 id="hero-title" className={styles.title}>
              {content.title} <br />
              <span className={styles.titleGradient}>{content.highlightedTitle}</span>
            </h1>

            <p className={styles.lead}>{content.description}</p>

            <div className={styles.actions}>
              <Button href="#contact" variant="primary" className={styles.primaryCta}>
                {content.primaryAction}
                <span className={`material-symbols-outlined ${styles.ctaIcon}`}>
                  arrow_back
                </span>
              </Button>
              <Button href="#programs" variant="secondary" className={styles.secondaryCta}>
                {content.secondaryAction}
              </Button>
            </div>

            <div className={styles.trust}>
              <div className={styles.avatarStack} aria-hidden="true">
                <span className={styles.avatarFake} />
                <span className={styles.badgeK}>+5k</span>
              </div>
              <p className={styles.trustText}>
                {content.trustBefore}
                <span className={styles.trustEm}>{content.trustHighlight}</span>
                {content.trustAfter}
              </p>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageDecorCircle} aria-hidden="true" />
            <div className={styles.imageDecorSquare} aria-hidden="true" />

            <div className={styles.visualInner}>
              <div className={styles.photoFrame}>
                <img
                  src="/hero-students.png"
                  width={640}
                  height={800}
                  alt="طلاب وطالبات يدرسون مع الأجهزة اللوحية ضمن بيئة تعليم تفاعلية"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className={styles.photo}
                />

                <div className={styles.statGlass}>
                  <div>
                    <div className={styles.statValue}>{content.statValue}</div>
                    <div className={styles.statLabel}>{content.statLabel}</div>
                  </div>
                  <div className={styles.statIconWrap}>
                    <span className={`material-symbols-outlined ${styles.statIcon}`}>
                      trending_up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
