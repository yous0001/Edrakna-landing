import type { CardProps } from '../../types/componentProps'
import styles from './Card.module.css'

export function Card({
  children,
  as: Component = 'article',
  elevated = false,
  className = '',
  ...props
}: CardProps) {
  const classNames = [styles.card, elevated ? styles.elevated : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  )
}
