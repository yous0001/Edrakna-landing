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
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

    return (
      <a className={classNames} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button {...buttonProps} className={classNames} type={buttonProps.type ?? 'button'}>
      {children}
    </button>
  )
}
