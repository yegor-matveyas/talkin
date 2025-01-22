import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { User } from '../users/users.entity'

import { MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText } from './nodes/nodes.entity'

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageNodeLink) private readonly linkRepository: Repository<MessageNodeLink>,
    @InjectRepository(MessageNodeText) private readonly textRepository: Repository<MessageNodeText>,
    @InjectRepository(MessageNodeMention) private readonly mentionRepository: Repository<MessageNodeMention>
  ) {}

  async getLink(node: MessageNode): Promise<string> {
    const linkNode = await this.linkRepository.findOneBy({ node })
    return linkNode.link
  }

  async getMention(node: MessageNode): Promise<User> {
    const mentionNode = await this.mentionRepository.findOneBy({ node })
    return mentionNode.user
  }

  async getText(node: MessageNode): Promise<string> {
    const textNode = await this.textRepository.findOneBy({ node })
    return textNode.text
  }
}
