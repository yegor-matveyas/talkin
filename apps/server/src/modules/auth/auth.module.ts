import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UsersModule } from '../users/users.module'

import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { AuthStrategy } from './auth.strategy'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    UsersModule,
  ],
  providers: [AuthResolver, AuthService, AuthStrategy],
  exports: [AuthService],
})
export class AuthModule {}
