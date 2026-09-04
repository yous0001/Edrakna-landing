import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteNavItems } from '../../data/siteNav'
import { dashboardUrl } from '../../seo/siteConfig'
import { isNavItemActive } from '../../utils/navActive'
import { DemoBookingModal } from '../common/DemoBookingModal'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

export function Header() {
  const { pathname, hash } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const activeTheme = document.documentElement.getAttribute('data-theme')
    if (activeTheme === 'dark') {
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        تخطي إلى المحتوى الرئيسي
      </a>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.brand} to="/" aria-label="إدراكنا الرئيسية">
            <img src="/edrakna-lg.png" alt="شعار إدراكنا" width={216} height={72} />
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
            <a
              href={dashboardUrl('/login')}
              className={styles.loginLink}
            >
              تسجيل الدخول
            </a>
            <Button
              variant="primary"
              className={styles.cta}
              onClick={() => setModalOpen(true)}
            >
              ابدأ الآن
            </Button>
            <button
              type="button"
              className={styles.themeToggleBtn}
              onClick={toggleTheme}
              aria-label={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
              title={isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="mobile-site-menu"
              aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="material-symbols-outlined">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-site-menu"
          className={`${styles.navMobile} ${menuOpen ? styles.navMobileOpen : ''}`}
          aria-label="روابط الموقع — جوّال"
        >
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>القائمة</span>
            <button
              type="button"
              className={styles.mobileCloseButton}
              aria-label="إغلاق القائمة"
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {siteNavItems.map((item) => {
            const active = isNavItemActive(pathname, hash, item.to)
            return (
              <Link
                key={`m-${item.to}`}
                to={item.to}
                className={active ? styles.navMobileLinkActive : styles.navMobileLink}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <div className={styles.mobileActions}>
            <a
              href={dashboardUrl('/login')}
              className={styles.mobileLoginLink}
              onClick={() => setMenuOpen(false)}
            >
              تسجيل الدخول
            </a>
            <Button
              variant="primary"
              className={styles.mobileCta}
              onClick={() => {
                setMenuOpen(false)
                setModalOpen(true)
              }}
            >
              ابدأ الآن
            </Button>
          </div>
        </nav>

        <div className={styles.hairline} aria-hidden="true" />
      </header>

      <DemoBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

