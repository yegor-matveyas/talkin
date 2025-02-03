import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Response } from 'express'

@Injectable()
export class ClearCookiesInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context)
    const response: Response = ctx.getContext().res
    return next.handle().pipe(
      tap(() => {
        response.clearCookie('refreshToken', { httpOnly: true })
      })
    )
  }
}
