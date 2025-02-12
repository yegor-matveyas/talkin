type AvatarSize = 'xs' | 'sm' | 'md' | 'lg'

type DefaultAvatarProps = {
  size?: AvatarSize
  style?: object
  className?: string
}

type ImageProps = {
  url: string
  alt: string
}

type FallbackProps = {
  children: string
}

export type AvatarProps = DefaultAvatarProps & (ImageProps | FallbackProps)
