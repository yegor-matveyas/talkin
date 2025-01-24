import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { MessageType, MessageNodeType } from '@types'

import { UsersService } from '../users/users.service'
import { ChatsService } from '../chats/chats.service'
import { Chat } from '../chats/chats.entity'

import { NodesService } from './nodes/nodes.service'
import { MessageNode } from './nodes/nodes.entity'
import { Message, SendMessageInput } from './messages.entity'

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private readonly messageRepository: Repository<Message>,
    private nodesService: NodesService,
    private usersService: UsersService,

    @Inject(forwardRef(() => ChatsService))
    private chatsService: ChatsService
  ) {}

  async createMessage(data: SendMessageInput, chat?: Chat): Promise<Message> {
    const messageData = new Message()

    messageData.sentAt = new Date()
    messageData.sender = await this.usersService.getOneByUserId(data.senderId)
    if (chat) {
      messageData.chat = chat
    } else {
      messageData.chat = await this.chatsService.getOneByChatId(data.chatId)
    }

    const message = await this.messageRepository.save(messageData)

    data.nodes.forEach(async (n) => {
      await this.nodesService.createNode(n, message)
    })
    return message
  }

  async getNodes(message: Message): Promise<MessageNode[]> {
    return await this.nodesService.getMessageNodes(message)
  }

  async getMessageType(message: Message): Promise<MessageType> {
    const nodes = await this.getNodes(message)
    if (nodes.some(({ nodeType }) => nodeType === MessageNodeType.EVENT)) {
      return MessageType.EVENT
    } else if (nodes.some(({ nodeType }) => nodeType === MessageNodeType.ATTACHMENT)) {
      return MessageType.ATTACHMENT
    } else {
      return MessageType.TEXT
    }
  }
}
