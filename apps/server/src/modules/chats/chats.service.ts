import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { MessageNodeType, ChatType } from '@types'

import { Chat } from './chats.entity'

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>
  ) {}

  async findChats() {
    const data = await this.chatsRepository.find()
    console.log('data ', data)
    return []
  }

  findChatById(uuid: string) {
    return chats.find((c) => c.chatId === uuid)
  }
}

const chats = [
  {
    id: 1,
    chatId: '550e8400-e29b-41d4-a716-446655440000',
    chatType: ChatType.DEFAULT,
    messages: [
      {
        id: 1,
        messageId: '550e8400-e29b-41d4-a716-446655440000',
        nodes: [
          {
            id: 1,
            nodeType: MessageNodeType.TEXT,
            text: 'You are welcome!',
          },
        ],
      },
    ],
  },
]
