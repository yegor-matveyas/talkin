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
        d="M22 12H23V15.3178C23.6318 14.3675 24 13.2267 24 12C24 8.68629 21.3137 6 18 6C14.6863 6 12 8.68629 12 12H14C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12Z"
        fill="currentColor"
      />
      <path
        d="M22 12H21V13H22V12ZM23 12H24V11H23V12ZM23 15.3178H22V18.6279L23.8327 15.8715L23 15.3178ZM12 12H11V13H12V12ZM14 12V13H15V12H14ZM22 13H23V11H22V13ZM22 12V15.3178H24V12H22ZM23.8327 15.8715C24.5703 14.7622 25 13.4298 25 12H23C23 13.0237 22.6934 13.9728 22.1673 14.7641L23.8327 15.8715ZM25 12C25 8.13401 21.866 5 18 5V7C20.7614 7 23 9.23858 23 12H25ZM18 5C14.134 5 11 8.13401 11 12H13C13 9.23858 15.2386 7 18 7V5ZM12 13H14V11H12V13ZM18 7C15.2386 7 13 9.23858 13 12H15C15 10.3431 16.3431 9 18 9V7ZM23 12C23 9.23858 20.7614 7 18 7V9C19.6569 9 21 10.3431 21 12H23Z"
        fill="currentColor"
      />
      <rect x="21" y="12" width="4" height="5" fill="currentColor" />
      <circle cx="18" cy="23" r="3" fill="currentColor" />
      <circle cx="18" cy="23" r="3" fill="currentColor" />
      <circle cx="18" cy="23" r="3" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 15C8.89543 15 8 15.8954 8 17V29C8 30.1046 8.89543 31 10 31H26C27.1046 31 28 30.1046 28 29V17C28 15.8954 27.1046 15 26 15H10ZM24 19H12V27H24V19Z"
        fill="currentColor"
      />
    </svg>
  )
}
