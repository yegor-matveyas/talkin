import { ComponentDefaultProps } from '@types'

export default function VisibilityIcon({ className = '', style = {} }: ComponentDefaultProps) {
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
      <g clipPath="url(#clip0_106_11)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 28C25.732 28 32 23.5228 32 18C32 12.4772 25.732 8 18 8C10.268 8 4 12.4772 4 18C4 23.5228 10.268 28 18 28ZM26 18C26 22.4183 22.4183 26 18 26C13.5817 26 10 22.4183 10 18C10 13.5817 13.5817 10 18 10C22.4183 10 26 13.5817 26 18ZM23 18C23 20.7614 20.7614 23 18 23C15.2386 23 13 20.7614 13 18C13 15.2386 15.2386 13 18 13C20.7614 13 23 15.2386 23 18Z"
          fill="currentColor"
        />
        <path
          d="M1.76941 18.7269C1.35173 18.3323 1.35173 17.6677 1.76941 17.2731L7.56326 11.7993C8.20095 11.1969 9.25 11.649 9.25 12.5262V23.4738C9.25 24.351 8.20095 24.8031 7.56326 24.2007L1.76941 18.7269Z"
          fill="currentColor"
        />
        <path
          d="M34.2306 17.2731C34.6483 17.6677 34.6483 18.3323 34.2306 18.7269L28.4367 24.2007C27.7991 24.8031 26.75 24.351 26.75 23.4738V12.5262C26.75 11.649 27.7991 11.1969 28.4367 11.7993L34.2306 17.2731Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
