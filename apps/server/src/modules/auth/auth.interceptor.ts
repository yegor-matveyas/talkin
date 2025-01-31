import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Response } from 'express'

import { AuthCredentials } from './auth.entity'

@Injectable()
export class RefreshTokenCookieInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<AuthCredentials>): Observable<any> {
    const ctx = GqlExecutionContext.create(context)
    const response: Response = ctx.getContext().res
    return next.handle().pipe(
      tap<AuthCredentials>((data) => {
        response.cookie('refreshToken', data.refreshToken, { httpOnly: true })
      })
    )
  }
}
