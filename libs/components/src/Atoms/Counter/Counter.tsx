import type { ComponentDefaultProps } from '@types'

import Typography from '../Typography/Typography'

interface CounterProps extends ComponentDefaultProps {
  value?: number
  maxLength: number
}

export default function Counter({ value = 0, maxLength, className = '', style = {} }: CounterProps) {
  const isWarning = value / maxLength > 0.8 && value < maxLength
  const isNegative = value >= maxLength

  return (
    <Typography warning={isWarning} negative={isNegative} variant="caption" className={className} style={style}>
      {`${value} of ${maxLength}`}
    </Typography>
  )
}
