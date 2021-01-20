import React, { FC, ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

interface ICardProps {
  children: ReactNode
  type?: 'inset'
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

const Card: FC<ICardProps> = ({
  children,
  type,
  disabled,
  className,
  style,
}) => {
  const cardClass = classNames([
    styles['neu-card'],
    type ? styles[`neu-card--${type}`] : null,
    disabled ? styles['neu-card--disabled'] : null,
    className,
  ])

  return (
    <div className={cardClass} style={style}>
      {children}
    </div>
  )
}

export default Card
