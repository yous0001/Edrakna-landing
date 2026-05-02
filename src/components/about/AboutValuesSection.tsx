import type { AboutValuesSectionProps } from '../../types/componentProps'
import styles from './AboutValuesSection.module.css'

export function AboutValuesSection({ content }: AboutValuesSectionProps) {
  const [a, b, c, d] = content.mosaic

  return (
    <section className={styles.section} aria-labelledby="about-values-title">
      <div className={styles.shell}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <div className={styles.headerBlock}>
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
          <div className={styles.mosaic}>
            <div className={styles.mosaicGrid}>
              <div className={styles.col}>
                <div className={`${styles.tile} ${styles.tileTall}`}>
                  <img src={a.imageUrl} alt={a.alt} loading="lazy" />
                </div>
                <div className={`${styles.tile} ${styles.tileSquare}`}>
                  <img src={b.imageUrl} alt={b.alt} loading="lazy" />
                </div>
              </div>
              <div className={`${styles.col} ${styles.colOffset}`}>
                <div className={`${styles.tile} ${styles.tileSquare}`}>
                  <img src={c.imageUrl} alt={c.alt} loading="lazy" />
                </div>
                <div className={`${styles.tile} ${styles.tileTall}`}>
                  <img src={d.imageUrl} alt={d.alt} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
