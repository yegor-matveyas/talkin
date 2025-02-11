import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { UsersService } from '../../users/users.service'
import { ChatRequest, SendChatRequestInput } from './requests.entity'

@Injectable()
export class ChatRequestsService {
  constructor(
    @InjectRepository(ChatRequest) private readonly requestsRepository: Repository<ChatRequest>,
    private readonly usersService: UsersService
  ) {}

  async createRequest(input: SendChatRequestInput): Promise<ChatRequest> {
    const [sender, receiver] = await this.usersService.getAllByUserIds([input.senderId, input.receiverId])
    const request = new ChatRequest()
    request.sender = sender
    request.receiver = receiver
    return await this.requestsRepository.save(request)
  }
}
