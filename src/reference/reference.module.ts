import { Module } from '@nestjs/common';
import { ReferenceService } from './reference.service';
import { ReferenceController } from './reference.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reference } from './entities/reference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reference])],
  controllers: [ReferenceController],
  providers: [ReferenceService],
})
export class ReferenceModule {}
