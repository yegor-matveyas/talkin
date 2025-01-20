import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { hash } from 'bcryptjs'
import { Repository } from 'typeorm'

import { User, CreateUserInput } from './users.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    const users = this.usersRepository.find()
    return users
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = await hash(createUserInput.password, parseInt(process.env.BCRYPT_SALT, 10))
    const user = this.usersRepository.create({ ...createUserInput, password: hashedPassword })
    return this.usersRepository.save(user)
  }
}
