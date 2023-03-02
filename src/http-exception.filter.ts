import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch() // ()를 공란으로 두어 모든 예외처리를 받을 수 있도록 하였다.
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = (exception as any).message.message;
    let code = 'HttpException';

    switch (exception.constructor) {
      case HttpException: // for HttpException
        status = (exception as HttpException).getStatus();
        break;

      case QueryFailedError: // for TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as QueryFailedError).message;
        code = (exception as any).code;
        break;

      case NotFoundException:
        status = HttpStatus.NOT_FOUND;
        message = '찾을 수 없습니다. 입력하신 내용을 다시 확인해주세요.';
        code = (exception as any).code;
        break;

      default: // default
        status = (exception as HttpException).getStatus();
        message = (exception as QueryFailedError).message;
        code = (exception as any).code;
    }

    response.status(status).json({
      status,
      errorType: code,
      message: message,
    });
  }
}
