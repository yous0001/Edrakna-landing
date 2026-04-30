import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import type { ButtonVariant } from '../../types/home'
import styles from './Button.module.css'

type SharedButtonProps = {
  readonly children: ReactNode
  readonly variant?: ButtonVariant
  readonly className?: string
}

type ButtonAsButton = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: never
  }

type ButtonAsAnchor = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if ('href' in props && props.href) {
    return (
      <a className={classNames} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classNames} type="button" {...props}>
      {children}
    </button>
  )
}
