import { ElementType } from 'react'
import { Link } from 'react-router-dom'

import { TypographyVariant } from './Typography.types'

export const TypographyElements: Record<TypographyVariant, ElementType | typeof Link> = {
  title: 'h1',
  subtitle: 'h2',
  text: 'p',
  caption: 'span',
  link: Link,
}
