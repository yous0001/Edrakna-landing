import { useState } from 'react'
import type { ProgramsSectionProps, ProgramCardModel } from '../../types/componentProps'
import { DemoBookingModal } from '../common/DemoBookingModal'
import styles from './ProgramsSection.module.css'

function toneClass(card: ProgramCardModel) {
  if (card.tone === 'inverse') return styles.cardInverse
  if (card.tone === 'warm') return styles.cardWarm
  return styles.cardDefault
}

function iconToneClass(card: ProgramCardModel) {
  if (card.tone === 'inverse') return styles.iconInverse
  if (card.tone === 'warm') return styles.iconWarm
  return styles.iconDefault
}

export function ProgramsSection({ content }: ProgramsSectionProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<'all' | string>('all')

  const filteredCards =
    selectedFilter === 'all'
      ? content.cards
      : content.cards.filter((c) => c.title.includes(selectedFilter))

  return (
    <section className={styles.section} id="programs" aria-labelledby="programs-title">
      <div className={styles.shell}>
        <div className={styles.headRow}>
          <div className={styles.headCopy}>
            <span className={styles.kicker}>{content.eyebrow}</span>
            <h2 id="programs-title" className={styles.title}>
              {content.title}
            </h2>
          </div>
          <p className={styles.headLead}>{content.description}</p>
        </div>

        <div className={styles.filterRow}>
          <button
            type="button"
            className={`${styles.filterBtn} ${selectedFilter === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            كافة المسارات
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${selectedFilter === 'الوطني' ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedFilter('الوطني')}
          >
            المنهج الوطني
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${selectedFilter === 'الأمريكية' ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedFilter('الأمريكية')}
          >
            ⭐ الدبلومة الأمريكية
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${selectedFilter === 'تأسيس' ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedFilter('تأسيس')}
          >
            التأسيس والمراجعات
          </button>
        </div>

        <div className={styles.grid}>
          {filteredCards.map((card) => {
            const isNational = card.title.includes('الوطني')
            const isAmerican = card.title.includes('الأمريكية')
            return (
              <article key={card.title} className={`${styles.card} ${toneClass(card)}`}>
                {isNational && (
                  <span className={styles.featuredBadge}>
                    <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>
                      star
                    </span>
                    الأكثر طلباً
                  </span>
                )}
                {isAmerican && (
                  <span className={styles.comingSoonBadge}>
                    <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>
                      schedule
                    </span>
                    قريباً
                  </span>
                )}
                <div className={`${styles.iconWrap} ${iconToneClass(card)}`}>
                  <span className={`material-symbols-outlined ${styles.icon}`}>{card.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.description}</p>
                <button
                  type="button"
                  className={styles.explore}
                  onClick={() => setModalOpen(true)}
                >
                  استكشف المسار
                  <span className={`material-symbols-outlined ${styles.exploreIcon}`}>arrow_back</span>
                </button>
              </article>
            )
          })}
        </div>
      </div>

      <DemoBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

