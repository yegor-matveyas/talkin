import cx from 'classnames'

import type { CircularProgressProps } from './CircularProgress.types'

import styles from './CircularProgress.tsx.module.scss'

export default function CircularProgress({
  size = 26,
  color = 'primary',
  className = '',
  style = {},
}: CircularProgressProps) {
  const strokeWidth = 4
  const radius = (size - strokeWidth) / 2
  const viewBoxSize = size + strokeWidth

  return (
    <div className={cx(styles.wrapper, styles[color], className)} style={{ width: size, height: size, ...style }}>
      <svg className={styles.spinner} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={size} height={size}>
        <circle
          r={radius}
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={styles.circle}
        />
      </svg>
    </div>
  )
}
