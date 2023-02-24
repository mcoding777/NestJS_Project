import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS 허용
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dto에 없는 값은 거르고 에러 출력
      forbidNonWhitelisted: true, // dto에 없는 값이 들어오면 에러 출력
      transform: true, // string이 넘어와서 타입 변경을 해야하는 불편함을 없애줌
    }),
  );
  app.useGlobalFilters(new GlobalExceptionFilter()); // 전역으로 에러 핸들링
  await app.listen(7777);
}
bootstrap();
