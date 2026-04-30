import type { HomePageContent } from '../../types/home'
import { Button } from '../ui/Button'
import styles from './CtaSection.module.css'

interface CtaSectionProps {
  readonly content: HomePageContent['cta']
}

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className={styles.section} id="contact" aria-labelledby="cta-title">
      <div className={styles.cta}>
        <img src="/logo.png" alt="" className={styles.logo} />
        <h2 id="cta-title">{content.title}</h2>
        <p>{content.description}</p>
        <div className={styles.actions}>
          <Button href="mailto:hello@edrakna.com" variant="secondary">
            {content.primaryAction}
          </Button>
          <Button href="#programs" variant="ghost">
            {content.secondaryAction}
          </Button>
        </div>
      </div>
    </section>
  )
}
