import type { HomePageContent } from '../../types/home'
import styles from './FeaturesSection.module.css'

interface FeaturesSectionProps {
  readonly content: HomePageContent['features']
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
  return (
    <section className={styles.section} id="why-edrakna" aria-labelledby="why-edrakna-title">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <h2 id="why-edrakna-title" className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.lead}>{content.description}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.analysis}>
            <div className={styles.analysisText}>
              <div className={`${styles.miniIcon} ${styles.miniIconMuted}`}>
                <span className={`material-symbols-outlined`}>monitoring</span>
              </div>
              <h3 className={styles.cardTitle}>{content.analysis.title}</h3>
              <p className={styles.cardBody}>{content.analysis.description}</p>
            </div>
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <span className={styles.chartLabel}>{content.analysis.chartLabel}</span>
                <span className={styles.chartValue}>{content.analysis.chartValue}</span>
              </div>
              <div className={styles.chartTrack}>
                <div className={styles.chartFill} style={{ width: content.analysis.chartValue }} />
              </div>
              <div className={styles.skeletonStack}>
                <span className={styles.skeletonLine} />
                <span className={`${styles.skeletonLine} ${styles.skeletonShort}`} />
              </div>
            </div>
          </div>

          <div className={styles.teachers}>
            <div className={`${styles.miniIcon} ${styles.miniIconLight}`}>
              <span className={`material-symbols-outlined`}>groups</span>
            </div>
            <h3 className={styles.inverseTitle}>{content.teachers.title}</h3>
            <p className={styles.inverseBody}>{content.teachers.description}</p>
            <div className={styles.teacherRow}>
              <span className={styles.teacherAvatar} aria-hidden="true" />
              <div>
                <p className={styles.teacherName}>{content.teachers.name}</p>
                <p className={styles.teacherRole}>{content.teachers.role}</p>
              </div>
            </div>
          </div>

          <div className={styles.quiz}>
            <div className={`${styles.miniIcon} ${styles.miniIconNight}`}>
              <span className={`material-symbols-outlined`}>quiz</span>
            </div>
            <h3 className={styles.nightTitle}>{content.quiz.title}</h3>
            <p className={styles.nightBody}>{content.quiz.description}</p>
            <div className={styles.dots} aria-hidden="true">
              <span className={`${styles.dot} ${styles.dotPing}`} />
              <span className={`${styles.dot} ${styles.dotSecondary}`} />
              <span className={`${styles.dot} ${styles.dotTertiary}`} />
            </div>
          </div>

          <div className={styles.support}>
            <div className={styles.supportCopy}>
              <h3 className={styles.supportTitle}>{content.support.title}</h3>
              <p className={styles.supportBody}>{content.support.description}</p>
            </div>
            <span className={`material-symbols-outlined ${styles.supportWatermark}`}>
              support_agent
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
