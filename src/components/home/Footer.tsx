import type { FooterProps } from '../../types/componentProps'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

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
            link.href.startsWith('/') ? (
              <Link key={link.href + link.label} to={link.href}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href + link.label} href={link.href}>
                {link.label}
              </a>
            )
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
