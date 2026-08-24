import { useState } from 'react'
import type { AboutPageCtaProps } from '../../types/componentProps'
import { DemoBookingModal } from '../common/DemoBookingModal'
import styles from './AboutPageCta.module.css'

export function AboutPageCta({ content }: AboutPageCtaProps) {
  const [modalOpen, setModalOpen] = useState(false)

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
              <button
                type="button"
                className={styles.primary}
                onClick={() => setModalOpen(true)}
              >
                {content.primaryAction}
              </button>
              <button
                type="button"
                className={styles.secondary}
                onClick={() => setModalOpen(true)}
              >
                {content.secondaryAction}
              </button>
            </div>
          </div>
        </div>
      </div>

      <DemoBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

