import { teachersData } from '../../data/teachersData'
import styles from './AboutTeamSection.module.css'

export function AboutTeamSection() {
  return (
    <section className={styles.section} aria-labelledby="about-team-title">
      <div className={styles.shell}>
        <header className={styles.intro}>
          <span className={styles.kicker}>نخبة المعلمين والخبراء</span>
          <h2 id="about-team-title" className={styles.title}>
            نخبة من أفضل معلمي مصر في خدمتكم
          </h2>
          <p className={styles.lead}>
            نختار أفضل المعلمين المعتمدين والمبدعين في كافة التخصصات لضمان وصول الطالب لأعلى درجات الفهم والتفوق الأكاديمي.
          </p>
        </header>

        <div className={styles.teachersGrid}>
          {teachersData.map((teacher) => (
            <article key={teacher.id} className={styles.teacherCard}>
              <div className={styles.imageColumn}>
                <div className={styles.photoFrame}>
                  <img src={teacher.image} alt={teacher.name} loading="lazy" />
                  <span className={styles.badge}>{teacher.badge}</span>
                </div>
              </div>

              <div className={styles.infoColumn}>
                <div className={styles.teacherHeader}>
                  <div>
                    <h3 className={styles.name}>{teacher.name}</h3>
                    <p className={styles.role}>{teacher.role}</p>
                  </div>
                  <div className={styles.ratingBox}>
                    <span className="material-symbols-outlined" style={{ color: '#f59e0b', fontSize: '1.25rem' }}>
                      star
                    </span>
                    <span className={styles.ratingVal}>{teacher.rating}</span>
                  </div>
                </div>

                <div className={styles.statsRow}>
                  <div className={styles.statPill}>
                    <span className="material-symbols-outlined">workspace_premium</span>
                    <span>{teacher.experience}</span>
                  </div>
                  <div className={styles.statPill}>
                    <span className="material-symbols-outlined">menu_book</span>
                    <span>{teacher.subject}</span>
                  </div>
                  {teacher.studentsCount ? (
                    <div className={styles.statPill}>
                      <span className="material-symbols-outlined">groups</span>
                      <span>{teacher.studentsCount}</span>
                    </div>
                  ) : null}
                </div>

                <p className={styles.bio}>{teacher.bio}</p>

                <div className={styles.specialtiesWrap}>
                  <span className={styles.specialtiesLabel}>التخصصات والأبحاث:</span>
                  <div className={styles.chips}>
                    {teacher.specialties.map((spec) => (
                      <span key={spec} className={styles.chip}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.actions}>
                  <a
                    href={`https://wa.me/201223373972?text=${encodeURIComponent(`مرحباً إدراكنا، أود الاستفسار عن حصص ومجموعات ${teacher.name} لمادة ${teacher.subject}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactBtn}
                  >
                    <span className="material-symbols-outlined">chat</span>
                    احجز حصتك مع {teacher.name}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.noticeBanner}>
          <span className="material-symbols-outlined" style={{ fontSize: '1.4rem', color: 'var(--color-brand-primary)' }}>
            info
          </span>
          <span>وجاري انضمام المزيد من نخبة معلمي مصر لكافة المواد والتخصصات قريباً.</span>
        </div>
      </div>
    </section>
  )
}
