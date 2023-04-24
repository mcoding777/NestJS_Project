import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TargetModule } from './target/target.module';
import { TrackingModule } from './tracking/tracking.module';
import { SettingsModule } from './settings/settings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './http-exception.filter';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '1234',
    //   database: 'mcoding777',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   autoLoadEntities: true, // entity 자동 추가
    //   synchronize: true, // entity 설정 적용
    //   logging: true, // 로그 계속 뜨게
    //   keepConnectionAlive: true, // 연결 유지
    //   charset: 'utf8mb4_unicode_ci',
    // }),
    BoardsModule,
    TargetModule,
    TrackingModule,
    SettingsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
