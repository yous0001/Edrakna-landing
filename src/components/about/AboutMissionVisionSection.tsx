import { Fragment } from 'react'
import type { AboutMissionVisionSectionProps } from '../../types/componentProps'
import styles from './AboutMissionVisionSection.module.css'

export function AboutMissionVisionSection({
  mission,
  vision,
  commitment,
}: AboutMissionVisionSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="about-mission-title">
      <div className={styles.shell}>
        <div className={styles.grid}>
          <article className={styles.mission}>
            <div className={styles.missionInner}>
              <div className={styles.iconTile}>
                <span className="material-symbols-outlined">{mission.icon}</span>
              </div>
              <h2 id="about-mission-title" className={styles.title}>
                {mission.title}
              </h2>
              <p className={styles.body}>{mission.body}</p>
            </div>
          </article>

          <article className={styles.vision} aria-labelledby="about-vision-title">
            <div className={styles.visionInner}>
              <div className={styles.iconTile}>
                <span className="material-symbols-outlined">{vision.icon}</span>
              </div>
              <h2 id="about-vision-title" className={styles.title}>
                {vision.title}
              </h2>
              <p className={styles.body}>{vision.body}</p>
            </div>
          </article>

          <article className={styles.commitment} aria-labelledby="about-commitment-title">
            <div className={styles.commitmentCopy}>
              <h2 id="about-commitment-title" className={styles.title}>
                {commitment.title}
              </h2>
              <p className={styles.body}>{commitment.body}</p>
              <div className={styles.stats}>
                {commitment.stats.map((stat, i) => (
                  <Fragment key={stat.label}>
                    {i > 0 ? <div className={styles.statRule} aria-hidden="true" /> : null}
                    <div className={styles.stat}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className={styles.visualWrap}>
              <div className={styles.orbit}>
                <div className={styles.orbitRing} aria-hidden="true" />
                <span className="material-symbols-outlined">{commitment.icon}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
