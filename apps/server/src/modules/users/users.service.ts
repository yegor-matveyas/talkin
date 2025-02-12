import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { hash } from 'bcryptjs'
import { And, In, Not, Like, Repository } from 'typeorm'

import { User, CreateUserInput, UsersWhereInput } from './users.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  async getUsers(where: UsersWhereInput, currentUser: User): Promise<User[]> {
    const { username } = where
    if (username === '') return []
    const users = await this.usersRepository.find({
      where: { username: And(Like(`%${username}%`), Not(currentUser.username)) },
    })
    return users
  }

  async getOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } })
  }

  async getOneByUserId(userId: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { userId } })
  }

  async getAllByUserIds(userIds: string[]): Promise<User[] | undefined> {
    return this.usersRepository.findBy({ userId: In(userIds) })
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = await hash(createUserInput.password, parseInt(process.env.BCRYPT_SALT, 10))
    const user = this.usersRepository.create({ ...createUserInput, password: hashedPassword })
    return this.usersRepository.save(user)
  }
}
