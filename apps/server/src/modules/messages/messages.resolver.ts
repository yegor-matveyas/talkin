import { Args, Mutation, Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { MessageType } from '@types'

import { MessageNode } from './nodes/nodes.entity'

import { MessagesService } from './messages.service'
import { Message, SendMessageInput } from './messages.entity'

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message)
  async sendMessage(@Args('sendMessageInput') sendMessageInput: SendMessageInput): Promise<Message> {
    return await this.messagesService.createMessage(sendMessageInput)
  }

  @ResolveField()
  async nodes(@Parent() message: Message): Promise<MessageNode[]> {
    return await this.messagesService.getNodes(message)
  }

  @ResolveField()
  async messageType(@Parent() message: Message): Promise<MessageType> {
    return await this.messagesService.getMessageType(message)
  }
}
