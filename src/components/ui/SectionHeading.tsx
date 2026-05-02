import type { SectionHeadingProps } from '../../types/componentProps'
import styles from './SectionHeading.module.css'

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 id={titleId}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
