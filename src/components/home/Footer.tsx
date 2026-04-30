import type { FooterLink } from '../../types/home'
import styles from './Footer.module.css'

interface FooterProps {
  readonly tagline: string
  readonly links: readonly FooterLink[]
}

export function Footer({ tagline, links }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <span className={styles.brandName}>Edrakna</span>
          <p className={styles.tagline}>{tagline}</p>
        </div>

        <nav className={styles.nav} aria-label="روابط الموقع">
          {links.map((link) => (
            <a key={link.href + link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.social}>
          <a href="#" aria-label="موقع عام">
            <span className={`material-symbols-outlined ${styles.socialIcon}`}>public</span>
          </a>
          <a href="#" aria-label="مشاركة">
            <span className={`material-symbols-outlined ${styles.socialIcon}`}>share</span>
          </a>
          <a href="#" aria-label="محادثة">
            <span className={`material-symbols-outlined ${styles.socialIcon}`}>chat</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
