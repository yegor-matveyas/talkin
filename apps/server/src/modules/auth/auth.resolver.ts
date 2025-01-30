import { UnauthorizedException } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { LoginInput, SignUpInput, AuthCredentials } from './auth.entity'
import { Cookies } from './auth.guard'
import { UsersService } from '../users/users.service'
import { CreateUserInput } from '../users/users.entity'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @Mutation(() => AuthCredentials)
  async login(@Args('loginInput') loginInput: LoginInput) {
    const user = await this.authService.validateUser(loginInput.username, loginInput.password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return this.authService.login(user)
  }

  @Mutation(() => AuthCredentials)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    const userData: CreateUserInput = {
      username: signUpInput.username,
      email: signUpInput.email,
      password: signUpInput.password,
    }
    const user = await this.usersService.createUser(userData)
    return this.authService.login(user)
  }

  @Mutation(() => AuthCredentials)
  async refreshTokens(@Cookies() cookies: { refreshToken: string }) {
    const token = cookies.refreshToken
    return this.authService.refreshTokens(token)
  }

  @Mutation(() => Boolean)
  async logout(@Cookies() cookies: { refreshToken: string }) {
    const token = cookies.refreshToken
    return this.authService.logout(token)
  }
}
