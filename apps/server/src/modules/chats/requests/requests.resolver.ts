import { Args, Mutation, Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { ChatRequestsService } from './requests.service'
import { ChatRequest, SendChatRequestInput } from './requests.entity'

@Resolver(() => ChatRequest)
export class ChatRequestsResolver {
  constructor(private readonly requestsService: ChatRequestsService) {}

  @Mutation(() => ChatRequest)
  async sendChatRequest(
    @Args('sendChatRequestInput') sendChatRequestInput: SendChatRequestInput
  ): Promise<ChatRequest> {
    return await this.requestsService.createRequest(sendChatRequestInput)
  }
}
