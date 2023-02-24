import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  Logger,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import {
  QueryFailedError,
  EntityNotFoundError,
  CannotCreateEntityIdMapError,
} from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  user_pw: string;

  @IsNotEmpty()
  client: string;

  @IsNotEmpty()
  manager: string;

  @IsNotEmpty()
  phone: string;
}

export class GetUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  user_pw: string;
}

export type CreateUserParams = {
  user_id: string;
  user_pw: string;
  client: string;
  manager: string;
  phone: string;
};

export type GetUserParams = {
  user_id: string;
  user_pw: string;
};

@Catch(QueryFailedError)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let message = (exception as any).message.message;
    let code = 'HttpException';

    Logger.error(
      message,
      (exception as any).stack,
      `${request.method} ${request.url}`,
    );

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    switch (exception.constructor) {
      case HttpException:
        status = (exception as HttpException).getStatus();
        break;
      case QueryFailedError: // this is a TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as QueryFailedError).message;
        code = (exception as any).code;
        break;
      case EntityNotFoundError: // this is another TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as EntityNotFoundError).message;
        code = (exception as any).code;
        break;
      case CannotCreateEntityIdMapError: // and another
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as CannotCreateEntityIdMapError).message;
        code = (exception as any).code;
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
