import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { compare } from 'bcryptjs'

import { UsersService } from '../users/users.service'
import { User } from '../users/users.entity'

import { AuthResponse } from './auth.types'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.getOneByUsername(username)
    if (user && (await compare(pass, user.password))) {
      return user
    }
    return null
  }

  login(user: User): AuthResponse {
    const payload = { username: user.username, userId: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
