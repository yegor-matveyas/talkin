import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersModule } from '../users/users.module'
import { User } from '../users/users.entity'

import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { AuthStrategy } from './auth.strategy'
import { AuthCredentials } from './auth.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, AuthCredentials]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    UsersModule,
  ],
  providers: [AuthResolver, AuthService, AuthStrategy],
  exports: [AuthService],
})
export class AuthModule {}
