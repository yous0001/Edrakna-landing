import { Link, useLocation } from 'react-router-dom'
import { siteNavItems } from '../../data/siteNav'
import { isNavItemActive } from '../../utils/navActive'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

export function Header() {
  const { pathname, hash } = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} to="/" aria-label="إدراكنا الرئيسية">
          <img src="/logo.png" alt="شعار إدراكنا" width={216} height={72} />
        </Link>

        <nav className={styles.nav} aria-label="روابط الموقع">
          {siteNavItems.map((item) => {
            const active = isNavItemActive(pathname, hash, item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={active ? styles.navLinkActive : styles.navLink}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.actions}>
          <Link to="/#contact" className={styles.loginLink}>
            تسجيل الدخول
          </Link>
          <Button to="/#contact" variant="primary" className={styles.cta}>
            ابدأ الآن
          </Button>
        </div>
      </div>

      <nav className={styles.navMobile} aria-label="روابط الموقع — جوّال">
        {siteNavItems.map((item) => {
          const active = isNavItemActive(pathname, hash, item.to)
          return (
            <Link
              key={`m-${item.to}`}
              to={item.to}
              className={active ? styles.navMobileLinkActive : styles.navMobileLink}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className={styles.hairline} aria-hidden="true" />
    </header>
  )
}
