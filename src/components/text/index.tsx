import React, { FC, ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

interface ITextProps {
  children: ReactNode
  lines?: number
  unselectable?: boolean
  className?: string
  style?: CSSProperties
}

const Text: FC<ITextProps> = ({
  children,
  lines,
  unselectable = false,
  className,
  style,
}) => {
  const textClass = classNames([
    styles['neu-text'],
    lines ? styles['neu-text--lines'] : null,
    unselectable ? styles['neu-text--unselectable'] : null,
    className,
  ])

  style = {
    ...style,
    WebkitLineClamp: lines ? lines : 'none',
  }

  return (
    <p className={textClass} style={style}>
      {children}
    </p>
  )
}

export default Text
