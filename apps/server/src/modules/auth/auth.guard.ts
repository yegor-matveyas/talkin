import { ExecutionContext, Injectable, createParamDecorator } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport'

@Injectable()
export class AuthGuard extends PassportAuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
}

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context)
  return ctx.getContext().req.user
})

export const Cookies = createParamDecorator((data: string, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context)
  const request = ctx.getContext().req
  return data ? request.cookies?.[data] : request.cookies
})
