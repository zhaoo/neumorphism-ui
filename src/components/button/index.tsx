import React, { FC, ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

interface IButtonProps {
  children: ReactNode
  type?: 'error' | 'info' | 'success' | 'warning'
  shape?: 'round'
  size?: 'small' | 'normal' | 'large'
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

const Button: FC<IButtonProps> = (props) => {
  const {
    children,
    type,
    shape,
    size = 'normal',
    disabled = false,
    className,
    style,
  } = props

  const buttonClass = classNames([
    styles['neu-button'],
    type ? styles[`neu-button--${type}`] : null,
    styles[`neu-button--${shape}`],
    styles[`neu-button--${size}`],
    disabled ? styles['neu-button--disabled'] : null,
    className,
  ])

  return (
    <button className={buttonClass} style={style}>
      {children}
    </button>
  )
}

export default Button
