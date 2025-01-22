import { Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { MessageNodeType } from '@types'

import { User } from '../../users/users.entity'
import { MessagesService } from '../messages.service'

import { MessageNode } from './nodes.entity'

@Resolver(() => MessageNode)
export class NodesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @ResolveField()
  async link(@Parent() node: MessageNode): Promise<string | null> {
    if (node.nodeType === MessageNodeType.LINK) {
      return this.messagesService.getLink(node)
    } else return null
  }

  @ResolveField()
  async mention(@Parent() node: MessageNode): Promise<User | null> {
    if (node.nodeType === MessageNodeType.MENTION) {
      return this.messagesService.getMention(node)
    } else return null
  }

  @ResolveField()
  async text(@Parent() node: MessageNode): Promise<string | null> {
    if (node.nodeType === MessageNodeType.TEXT) {
      return this.messagesService.getText(node)
    } else return null
  }
}
