import { ComponentDefaultProps } from '@types'

export default function LockIcon({ className = '', style = {} }: ComponentDefaultProps) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12C6.89543 12 6 12.8954 6 14V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V14C30 12.8954 29.1046 12 28 12H8ZM26 16H10V28H26V16Z"
        fill="currentColor"
      />
      <rect x="21" y="10" width="5" height="4" fill="currentColor" />
      <circle cx="18" cy="22" r="4" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10H26C26 5.58172 22.4183 2 18 2C13.5817 2 10 5.58172 10 10H15C15 8.34315 16.3431 7 18 7C19.6569 7 21 8.34315 21 10Z"
        fill="currentColor"
      />
    </svg>
  )
}
