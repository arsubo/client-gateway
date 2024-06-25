import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    //si no viene el usuario en la request
    if (!request.user) {
      throw new InternalServerErrorException('User not found in request');
    }

    return request.user;
  },
);
