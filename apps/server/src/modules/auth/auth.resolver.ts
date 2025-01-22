import { UnauthorizedException } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { AuthInput, AuthCredentials } from './auth.entity'
import { Cookies } from './auth.guard'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthCredentials)
  async login(@Args('authInput') authInput: AuthInput) {
    const user = await this.authService.validateUser(authInput.username, authInput.password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return this.authService.login(user)
  }

  @Mutation(() => AuthCredentials)
  async refreshTokens(@Cookies() cookies: { refreshToken: string }) {
    const token = cookies.refreshToken
    return this.authService.refreshTokens(token)
  }
}
