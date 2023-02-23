import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { UserModule } from './user/user.module';
import { TargetModule } from './target/target.module';
import { TrackingModule } from './tracking/tracking.module';
import { SettingsModule } from './settings/settings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { LogModule } from './log/log.module';

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
      entities: [User],
      autoLoadEntities: true,
      synchronize: true, // entity 설정 적용
      logging: true, // 로그 계속 뜨게
      keepConnectionAlive: true, // 연결 유지
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      charset: 'utf8mb4_unicode_ci',
    }),
    LogModule,
  ],
})
export class AppModule {}
