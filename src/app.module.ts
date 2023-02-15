import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { UserModule } from './user/user.module';
import { TargetModule } from './target/target.module';
import { TrackingModule } from './tracking/tracking.module';

@Module({
  imports: [BoardsModule, UserModule, TargetModule, TrackingModule],
})
export class AppModule {}
