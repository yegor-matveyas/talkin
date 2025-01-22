import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'

import { compare } from 'bcryptjs'
import dayjs from 'dayjs'
import { Repository } from 'typeorm'

import { UsersService } from '../users/users.service'
import { User } from '../users/users.entity'

import { AuthCredentials, TAuthCredentials, TCurrentUser } from './auth.entity'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(AuthCredentials) private readonly credentialsRepository: Repository<AuthCredentials>,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.getOneByUsername(username)
    if (user && (await compare(pass, user.password))) {
      return user
    }
    return null
  }

  async login(user: User): Promise<TAuthCredentials> {
    return await this.generateTokens(user)
  }

  async refreshTokens(currentRefreshToken: string): Promise<TAuthCredentials> {
    const payload = await this.jwtService.verifyAsync<TCurrentUser>(currentRefreshToken)

    const user = await this.userRepository.findOneBy({ userId: payload.userId })

    await this.credentialsRepository.delete({ user, refreshToken: currentRefreshToken })

    const { accessToken, refreshToken, expiresAt } = await this.generateTokens(user)
    return { accessToken, refreshToken, expiresAt }
  }

  async generateTokens(user: User): Promise<TAuthCredentials> {
    const payload = { userId: user.userId, username: user.username }
    const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' })
    const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' })

    const creds = new AuthCredentials()
    creds.refreshToken = refreshToken
    creds.user = user
    await this.credentialsRepository.save(creds)

    return {
      accessToken,
      refreshToken,
      expiresAt: dayjs().add(15, 'm').toDate(),
    }
  }
}
