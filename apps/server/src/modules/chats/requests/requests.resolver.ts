import { Args, Mutation, Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { ChatRequestsService } from './requests.service'
import { ChatRequest, SendChatRequestInput } from './requests.entity'

@Resolver(() => ChatRequest)
export class ChatRequestsResolver {
  constructor(private readonly requestsService: ChatRequestsService) {}

  @Mutation(() => ChatRequest)
  async sendRequest(@Args('sendRequestInput') sendRequestInput: SendChatRequestInput): Promise<ChatRequest> {
    return await this.requestsService.createRequest(sendRequestInput)
  }
}
