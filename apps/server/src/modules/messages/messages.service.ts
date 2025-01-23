import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { UsersService } from '../users/users.service'

import { NodesService } from './nodes/nodes.service'
import { MessageNode } from './nodes/nodes.entity'
import { Message, SendMessageInput } from './messages.entity'

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private readonly messageRepository: Repository<Message>,
    private nodesService: NodesService,
    private usersService: UsersService
  ) {}

  async createMessage(data: SendMessageInput): Promise<Message> {
    const messageData = new Message()

    messageData.sentAt = new Date()
    messageData.sender = await this.usersService.getOneByUserId(data.senderId)

    const message = await this.messageRepository.save(messageData)

    data.nodes.forEach(async (n) => {
      await this.nodesService.createNode(n, message)
    })
    return message
  }

  async getNodes(message: Message): Promise<MessageNode[]> {
    return await this.nodesService.getMessageNodes(message)
  }
}
