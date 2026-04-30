import type { NavItem } from '../../types/home'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

interface HeaderProps {
  readonly navItems: readonly NavItem[]
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className={styles.header} id="home">
      <div className={styles.container}>
        <a className={styles.brand} href="#home" aria-label="إدراكنا الرئيسية">
          <img src="/logo.png" alt="" />
          <span>Edrakna</span>
        </a>

        <nav className={styles.nav} aria-label="روابط الموقع">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" variant="ghost" className={styles.action}>
          ابدأ الآن
        </Button>
      </div>
    </header>
  )
}
