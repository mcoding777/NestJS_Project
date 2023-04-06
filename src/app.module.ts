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
import { PipelineDatum } from './pipeline-data/entities/pipeline-datum.entity';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { CommandsModule } from './commands/commands.module';
import { Command } from './commands/entities/command.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'mlops',
      entities: [User, Reference, PipelineDatum, Client, Command],
      autoLoadEntities: true, // entity 자동 추가
      synchronize: true, // entity 설정 적용
      logging: true, // 로그 계속 뜨게
      keepConnectionAlive: true, // 연결 유지
      charset: 'utf8mb4_unicode_ci',
    }),
    BoardsModule,
    UserModule,
    TargetModule,
    TrackingModule,
    SettingsModule,
    LogModule,
    ReferenceModule,
    PipelineModule,
    PipelineDataModule,
    ClientModule,
    CommandsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
