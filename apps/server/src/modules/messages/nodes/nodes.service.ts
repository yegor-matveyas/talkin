import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { MessageNodeType } from '@types'

import { User } from '../../users/users.entity'

import { Message } from '../messages.entity'
import { MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText, MessageNodeInput } from './nodes.entity'
import { UsersService } from '../../users/users.service'

@Injectable()
export class NodesService {
  constructor(
    @InjectRepository(MessageNode) private readonly nodeRepository: Repository<MessageNode>,
    @InjectRepository(MessageNodeLink) private readonly linkRepository: Repository<MessageNodeLink>,
    @InjectRepository(MessageNodeText) private readonly textRepository: Repository<MessageNodeText>,
    @InjectRepository(MessageNodeMention) private readonly mentionRepository: Repository<MessageNodeMention>,
    private usersService: UsersService
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

  async createNode(data: MessageNodeInput, message: Message): Promise<MessageNode> {
    const { nodeType } = data

    const nodeData = new MessageNode()
    nodeData.message = message
    nodeData.nodeType = nodeType
    nodeData.style = data.style

    const node = await this.nodeRepository.save(nodeData)

    switch (nodeType) {
      case MessageNodeType.LINK: {
        const nodeLink = new MessageNodeLink()
        nodeLink.link = data.link
        nodeLink.node = node
        await this.linkRepository.save(nodeLink)
        break
      }
      case MessageNodeType.TEXT: {
        const nodeText = new MessageNodeText()
        nodeText.text = data.text
        nodeText.node = node
        await this.textRepository.save(nodeText)
        break
      }
      case MessageNodeType.MENTION: {
        const nodeMention = new MessageNodeMention()
        const user = await this.usersService.getOneByUserId(data.mentionId)
        nodeMention.user = user
        nodeMention.node = node
        await this.mentionRepository.save(nodeMention)
        break
      }
    }

    return node
  }

  async getMessageNodes(message: Message): Promise<MessageNode[]> {
    return await this.nodeRepository.findBy({ message })
  }
}
