import { Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { MessageNodeType } from '@types'

import { User } from '../../users/users.entity'

import { NodesService } from './nodes.service'
import { MessageNode } from './nodes.entity'

@Resolver(() => MessageNode)
export class NodesResolver {
  constructor(private readonly nodesService: NodesService) {}

  @ResolveField()
  async link(@Parent() node: MessageNode): Promise<string | null> {
    if (node.nodeType === MessageNodeType.LINK) {
      return this.nodesService.getLink(node)
    } else return null
  }

  @ResolveField()
  async mention(@Parent() node: MessageNode): Promise<User | null> {
    if (node.nodeType === MessageNodeType.MENTION) {
      return this.nodesService.getMention(node)
    } else return null
  }

  @ResolveField()
  async text(@Parent() node: MessageNode): Promise<string | null> {
    if ([MessageNodeType.EVENT, MessageNodeType.TEXT].includes(node.nodeType)) {
      return this.nodesService.getText(node)
    } else return null
  }
}
