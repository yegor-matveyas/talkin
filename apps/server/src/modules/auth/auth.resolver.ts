import { UnauthorizedException } from '@nestjs/common'
import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { AuthInput, AuthResponse } from './auth.types'
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('authInput') authInput: AuthInput) {
    const user = await this.authService.validateUser(authInput.username, authInput.password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return this.authService.login(user)
  }
}
