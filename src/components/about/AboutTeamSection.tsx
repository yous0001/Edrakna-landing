import type { AboutTeamSectionProps } from '../../types/componentProps'
import styles from './AboutTeamSection.module.css'

export function AboutTeamSection({ kicker, title, description, members }: AboutTeamSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="about-team-title">
      <div className={styles.shell}>
        <header className={styles.intro}>
          <span className={styles.kicker}>{kicker}</span>
          <h2 id="about-team-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.lead}>{description}</p>
        </header>
        <div className={styles.grid}>
          {members.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.photoWrap}>
                <img src={member.imageUrl} alt={member.imageAlt} loading="lazy" />
                <div className={styles.hoverPanel}>
                  <p className={styles.hoverTitle}>{member.hoverTitle}</p>
                  <p className={styles.hoverSub}>{member.hoverSubtitle}</p>
                </div>
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
