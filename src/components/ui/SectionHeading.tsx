import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  readonly eyebrow?: string
  readonly title: string
  readonly titleId?: string
  readonly description?: string
  readonly align?: 'center' | 'start'
}

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
