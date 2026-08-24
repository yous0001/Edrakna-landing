import { useState } from 'react'
import type { CtaSectionProps } from '../../types/componentProps'
import { DemoBookingModal } from '../common/DemoBookingModal'
import { Button } from '../ui/Button'
import styles from './CtaSection.module.css'

export function CtaSection({ content }: CtaSectionProps) {
  const [modalOpen, setModalOpen] = useState(false)

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
            <Button
              variant="surfaceLight"
              className={styles.actionPrimary}
              onClick={() => setModalOpen(true)}
            >
              {content.primaryAction}
            </Button>
            <Button
              variant="primaryContainer"
              className={styles.actionSecondary}
              onClick={() => setModalOpen(true)}
            >
              {content.secondaryAction}
            </Button>
          </div>
        </div>
      </div>

      <DemoBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

