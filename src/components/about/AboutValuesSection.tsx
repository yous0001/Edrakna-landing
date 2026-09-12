import type { AboutValuesSectionProps } from '../../types/componentProps'
import styles from './AboutValuesSection.module.css'

export function AboutValuesSection({ content }: AboutValuesSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="about-values-title">
      <div className={styles.shell}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <div className={styles.headerBlock}>
              <span className={styles.kicker}>ثقافة التميّز</span>
              <h2 id="about-values-title" className={styles.title}>
                {content.titleLine1} <br />
                {content.titleLine2Before} <span className={styles.em}>{content.titleLine2Em}</span>
              </h2>
              <p className={styles.lead}>{content.lead}</p>
            </div>
            <ul className={styles.list}>
              {content.items.map((item) => (
                <li key={item.title} className={styles.item}>
                  <div className={styles.itemIcon}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemBody}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.showcaseColumn}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseGlow} aria-hidden="true" />
              <div className={styles.showcaseBadge}>
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>منصة إدراكنا التعليمية</span>
              </div>
              <h3 className={styles.showcaseTitle}>بيئة تعلم ذكية صُممت خصيصاً للتفوق</h3>
              <p className={styles.showcaseDesc}>
                نُعيد تعريف تجربة المذاكرة من خلال الدمج بين تبسيط أعتى الدروس والتقنيات الرقمية الممتعة.
              </p>

              <div className={styles.pillarsGrid}>
                <div className={styles.pillarBox}>
                  <span className="material-symbols-outlined">play_circle</span>
                  <div>
                    <div className={styles.pillarHead}>شرح تفاعلي مبسط</div>
                    <div className={styles.pillarSub}>مقاطع مركزة تشرح الأعماق</div>
                  </div>
                </div>

                <div className={styles.pillarBox}>
                  <span className="material-symbols-outlined">quiz</span>
                  <div>
                    <div className={styles.pillarHead}>تقييم وتحليل فوري</div>
                    <div className={styles.pillarSub}>امتحانات تحاكي النظام الحديث</div>
                  </div>
                </div>

                <div className={styles.pillarBox}>
                  <span className="material-symbols-outlined">psychology</span>
                  <div>
                    <div className={styles.pillarHead}>متابعة أكاديمية مستمرة</div>
                    <div className={styles.pillarSub}>توجيه شخصي لكل طالب</div>
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
