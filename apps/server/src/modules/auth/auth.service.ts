import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'

import { compare } from 'bcryptjs'
import dayjs from 'dayjs'
import { Repository } from 'typeorm'

import { UsersService } from '../users/users.service'
import { User } from '../users/users.entity'

import { AuthCredentials, TCurrentUser } from './auth.entity'

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

  async login(user: User): Promise<AuthCredentials> {
    return await this.generateTokens(user)
  }

  async logout(token: string): Promise<boolean> {
    await this.deleteToken(token)
    return true
  }

  async refreshTokens(currentRefreshToken: string): Promise<AuthCredentials> {
    const user = await this.deleteToken(currentRefreshToken)
    return await this.generateTokens(user)
  }

  private async generateTokens(user: User): Promise<AuthCredentials> {
    const payload: TCurrentUser = { id: user.id, userId: user.userId, username: user.username }

    const existingCreds = await this.credentialsRepository.findOneBy({ user })
    const refreshToken = existingCreds
      ? existingCreds.refreshToken
      : await this.jwtService.signAsync(payload, { expiresIn: '7d' })

    const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' })

    const credsData = new AuthCredentials()
    credsData.refreshToken = refreshToken
    credsData.user = user
    const creds = await this.credentialsRepository.save(credsData)

    return {
      ...creds,
      accessToken,
      refreshToken,
      expiresAt: dayjs().add(15, 'm').toDate(),
    }
  }

  private async deleteToken(token: string): Promise<User> {
    const payload = await this.jwtService.verifyAsync<TCurrentUser>(token)
    const user = await this.userRepository.findOneBy({ userId: payload.userId })
    await this.credentialsRepository.delete({ user, refreshToken: token })
    return user
  }
}
