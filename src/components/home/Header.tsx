import type { NavItem } from '../../types/home'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

interface HeaderProps {
  readonly navItems: readonly NavItem[]
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className={styles.header} id="home">
      <div className={styles.inner}>
        <a className={styles.brand} href="#home" aria-label="إدراكنا الرئيسية">
          <img src="/logo.png" alt="" width={160} height={40} />
        </a>

        <nav className={styles.nav} aria-label="روابط الموقع">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.isActive ? styles.navLinkActive : styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={styles.loginLink}>
            تسجيل الدخول
          </a>
          <Button href="#contact" variant="primary" className={styles.cta}>
            ابدأ الآن
          </Button>
        </div>
      </div>

      <nav className={styles.navMobile} aria-label="روابط الموقع — جوّال">
        {navItems.map((item) => (
          <a
            key={`m-${item.href}`}
            href={item.href}
            className={item.isActive ? styles.navMobileLinkActive : styles.navMobileLink}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.hairline} aria-hidden="true" />
    </header>
  )
}
