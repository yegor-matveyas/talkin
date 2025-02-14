import type { IconName } from '@components'
import type { TChat, TUser } from '@types'

export type ListItemProps = {
  text: string
  endIcon?: IconName
  onClick: <T = TChat | TUser>(entity: T) => void
}
