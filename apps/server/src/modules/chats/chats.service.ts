import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { ChatType, MessageNodeType } from '@types'

import { UsersService } from '../users/users.service'
import { User } from '../users/users.entity'

import { SendMessageInput } from '../messages/messages.entity'

import { Chat, CreateChatInput } from './chats.entity'
import { MessagesService } from '../messages/messages.service'

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>,
    private readonly usersService: UsersService,

    @Inject(forwardRef(() => MessagesService))
    private readonly messsagesService: MessagesService
  ) {}

  async getOneByChatId(chatId: string): Promise<Chat | undefined> {
    return this.chatsRepository.findOne({ where: { chatId } })
  }

  async createChat(data: CreateChatInput, founder: User) {
    const members = await this.usersService.getAllByUserIds(data.memberIds)

    const chatData = new Chat()
    chatData.members = members
    chatData.chatType = data.chatType

    if (data.chatType === ChatType.GROUP) {
      chatData.founder = founder
    }

    const chat = await this.chatsRepository.save(chatData)
    await this.createGreetingMessage(chat, founder)
    return chat
  }

  private async createGreetingMessage(chat: Chat, founder: User): Promise<void> {
    let text = 'The chat has been created'
    if (chat.chatType === ChatType.GROUP) {
      text += ' by ' + founder.username
    }

    const data: SendMessageInput = {
      chatId: chat.chatId,
      senderId: founder.userId,
      nodes: [{ nodeType: MessageNodeType.EVENT, text }],
    }
    await this.messsagesService.createMessage(data, chat)
  }
}
