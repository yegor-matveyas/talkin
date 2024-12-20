import { ComponentDefaultProps } from '@types'

export default function MenuIcon({ className = '', style = {} }: ComponentDefaultProps) {
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
      <rect x="6" y="7" width="24" height="4" rx="2" fill="currentColor" />
      <rect x="6" y="16" width="24" height="4" rx="2" fill="currentColor" />
      <rect x="6" y="25" width="24" height="4" rx="2" fill="currentColor" />
    </svg>
  )
}
