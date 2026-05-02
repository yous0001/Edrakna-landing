import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import type { ButtonProps } from '../../types/componentProps'
import styles from './Button.module.css'

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'outlineLight'
      ? styles.outlineLight
      : variant === 'primaryContainer'
        ? styles.primaryContainer
        : variant === 'surfaceLight'
          ? styles.surfaceLight
          : styles[variant]
  const classNames = [styles.button, variantClass, className].filter(Boolean).join(' ')

  if ('to' in props && props.to != null && props.to !== '') {
    const { to, replace, state, preventScrollReset, relative, ...linkRest } = props
    return (
      <Link
        to={to}
        className={classNames}
        replace={replace}
        state={state}
        preventScrollReset={preventScrollReset}
        relative={relative}
        {...linkRest}
      >
        {children}
      </Link>
    )
  }

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
