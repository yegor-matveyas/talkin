import { ComponentDefaultProps } from '@types'

export default function CloseIcon({ className = '', style = {} }: ComponentDefaultProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M8 28L28 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M8 8L28 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
