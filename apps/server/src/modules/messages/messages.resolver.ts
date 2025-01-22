import { Resolver } from '@nestjs/graphql'
import { MessagesService } from './messages.service'
import { Message } from './messages.entity'

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}
}
