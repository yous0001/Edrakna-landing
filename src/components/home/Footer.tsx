import type { NavItem } from '../../types/home'
import styles from './Footer.module.css'

interface FooterProps {
  readonly navItems: readonly NavItem[]
}

export function Footer({ navItems }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a className={styles.brand} href="#home" aria-label="إدراكنا الرئيسية">
          <img src="/logo.png" alt="" />
          <span>Edrakna</span>
        </a>

        <nav className={styles.nav} aria-label="روابط تذييل الموقع">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p>© 2026 إدراكنا. كل الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
