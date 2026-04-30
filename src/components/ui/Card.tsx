import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLElement> {
  readonly children: ReactNode
  readonly as?: 'article' | 'div'
  readonly elevated?: boolean
}

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
