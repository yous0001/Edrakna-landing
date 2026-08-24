import { useState } from 'react'
import { DemoBookingModal } from '../common/DemoBookingModal'
import { Button } from '../ui/Button'
import type { HeroSectionProps } from '../../types/componentProps'
import styles from './HeroSection.module.css'

const SUBJECT_TAGS = [
  'الرياضيات',
  'العلوم',
  'الدراسات الاجتماعية',
  'الفيزياء',
  'الكيمياء',
  'SAT Math',
  'EST / ACT',
  'اللغة الإنجليزية',
]

export function HeroSection({ content }: HeroSectionProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className={styles.hero} id="main-content" aria-labelledby="hero-title">
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

            <div className={styles.subjectPills}>
              <span className={styles.pillLabel}>أبرز المواد:</span>
              {SUBJECT_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={styles.pillChip}
                  onClick={() => setModalOpen(true)}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
                    menu_book
                  </span>
                  {tag}
                </button>
              ))}
            </div>

            <div className={styles.actions}>
              <Button
                variant="primary"
                className={styles.primaryCta}
                onClick={() => setModalOpen(true)}
              >
                {content.primaryAction}
                <span className={`material-symbols-outlined ${styles.ctaIcon}`}>
                  arrow_back
                </span>
              </Button>
              <Button to="/#programs" variant="secondary" className={styles.secondaryCta}>
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

      <DemoBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

