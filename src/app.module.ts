import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { UserModule } from './user/user.module';
import { TargetModule } from './target/target.module';
import { TrackingModule } from './tracking/tracking.module';
import { SettingsModule } from './settings/settings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { LogModule } from './log/log.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './http-exception.filter';
import { ReferenceModule } from './reference/reference.module';
import { Reference } from './reference/entities/reference.entity';
import { PipelineModule } from './pipeline/pipeline.module';
import { PipelineDataModule } from './pipeline-data/pipeline-data.module';

@Module({
  imports: [
    BoardsModule,
    UserModule,
    TargetModule,
    TrackingModule,
    SettingsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'mlops',
      entities: [User, Reference],
      autoLoadEntities: true, // entity 자동 추가
      synchronize: true, // entity 설정 적용
      logging: true, // 로그 계속 뜨게
      keepConnectionAlive: true, // 연결 유지
      charset: 'utf8mb4_unicode_ci',
    }),
    LogModule,
    ReferenceModule,
    PipelineModule,
    PipelineDataModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
