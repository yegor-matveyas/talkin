import { ComponentDefaultProps } from '@types'

import Typography from '../Typography/Typography'

interface CounterProps extends ComponentDefaultProps {
  value?: number
  maxlength: number
}

export default function Counter({ value = 0, maxlength, className = '', style = {} }: CounterProps) {
  const isWarning = value / maxlength > 0.8 && value < maxlength
  const isNegative = value >= maxlength

  return (
    <Typography warning={isWarning} negative={isNegative} variant="caption" className={className} style={style}>
      {`${value} of ${maxlength}`}
    </Typography>
  )
}
