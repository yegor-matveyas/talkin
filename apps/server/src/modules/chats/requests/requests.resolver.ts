import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthGuard, CurrentUser } from '../../auth/auth.guard'
import { User } from '../../users/users.entity'

import { ChatRequestsService } from './requests.service'
import { ChatRequest, SendChatRequestInput } from './requests.entity'

@Resolver(() => ChatRequest)
export class ChatRequestsResolver {
  constructor(private readonly requestsService: ChatRequestsService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => ChatRequest)
  async sendChatRequest(
    @Args('sendChatRequestInput') sendChatRequestInput: SendChatRequestInput,
    @CurrentUser() currentUser: User
  ): Promise<ChatRequest> {
    return await this.requestsService.createRequest(currentUser.userId, sendChatRequestInput.receiverId)
  }
}
