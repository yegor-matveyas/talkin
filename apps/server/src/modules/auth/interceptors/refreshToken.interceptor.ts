import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Response } from 'express'
import dayjs from 'dayjs'

import { AuthCredentials } from '../auth.entity'

@Injectable()
export class RefreshTokenCookieInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<AuthCredentials>): Observable<any> {
    const ctx = GqlExecutionContext.create(context)
    const response: Response = ctx.getContext().res
    return next.handle().pipe(
      tap<AuthCredentials>((data) => {
        const expiresAt = dayjs(data.expiresAt).subtract(15, 'minute').add(7, 'day').toDate()
        response.cookie('refreshToken', data.refreshToken, { httpOnly: true, expires: expiresAt })
      })
    )
  }
}
