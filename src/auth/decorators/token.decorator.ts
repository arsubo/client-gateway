import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    //si no viene el usuario en la request
    if (!request.token) {
      throw new InternalServerErrorException('token not found in request');
    }

    return request.token;
  },
);
